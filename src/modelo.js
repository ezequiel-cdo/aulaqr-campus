export function validarCatalogo(d) {
  const errores=[];
  const unico=(items,campo)=>new Set(items.map(x=>x[campo]??x)).size===items.length;
  for(const [nombre,items,campo] of [['participantes',d.participantes,'id'],['asignaciones',d.asignaciones,'id'],['docentes',d.docentes,'id'],['bloques',d.bloques,'id']])if(!unico(items,campo))errores.push(`Identificadores duplicados en ${nombre}`);
  const secciones=new Set(d.secciones),docentes=new Set(d.docentes.map(x=>x.id)),materias=new Set(d.asignaturas.map(x=>x.id));
  for(const p of d.participantes)if(!secciones.has(p.seccionId))errores.push(`Sección desconocida en ${p.id}`);
  for(const a of d.asignaciones){if(!secciones.has(a.seccionId))errores.push(`Sección desconocida en ${a.id}`);if(!docentes.has(a.docenteId))errores.push(`Docente desconocido en ${a.id}`);if(!materias.has(a.asignaturaId))errores.push(`Asignatura desconocida en ${a.id}`)}
  const asgs=new Map(d.asignaciones.map(a=>[a.id,a])),bloques=new Map(d.bloques.map(b=>[b.id,b]));
  const ocupacionDoc=new Set(),ocupacionSec=new Set();
  for(const h of d.horarios){const a=asgs.get(h.asignacionId),b=bloques.get(h.bloqueId);if(!a||!b){errores.push('Horario con referencia inexistente');continue}let kd=`${a.docenteId}|${b.dia}|${b.inicio}`,ks=`${a.seccionId}|${b.dia}|${b.inicio}`;if(ocupacionDoc.has(kd))errores.push(`Conflicto docente: ${kd}`);if(ocupacionSec.has(ks))errores.push(`Conflicto sección: ${ks}`);ocupacionDoc.add(kd);ocupacionSec.add(ks)}
  return errores;
}
export function horarioParticipante(d, participanteId) {
  const p=d.participantes.find(x=>x.id===participanteId);if(!p)return [];
  const asignaciones=d.asignaciones.filter(x=>x.seccionId===p.seccionId);
  return d.horarios.flatMap(h=>{const a=asignaciones.find(x=>x.id===h.asignacionId);if(!a)return [];const bloque=d.bloques.find(x=>x.id===h.bloqueId);if(!bloque)return [];return [{...bloque,asignacionId:a.id,asignatura:d.asignaturas.find(x=>x.id===a.asignaturaId)?.nombre,docente:d.docentes.find(x=>x.id===a.docenteId)?.nombre}]}).sort((a,b)=>a.inicio.localeCompare(b.inicio));
}
export function sesionesAsignacion(d,id){return d.sesiones.filter(s=>s.asignacionId===id).map(s=>({...s,recurso:d.recursos.find(r=>r.id===s.recursoId)}))}
