# AulaQR Campus — P-01 (PREPARA Canástica)

Prototipo **sin información personal** para validar el recorrido portal → área participante → horario calculado → asignatura → AulaQR.

## Estado y alcance
- Centro 14545 CANASTICA; Regional 04 SAN CRISTOBAL; Distrito 0403 SAN CRISTOBAL SUR; público, secundaria de jóvenes y adultos, sabatino.
- Año académico 2026–2027; cinco grados y **12 secciones previstas** (incluida 4C, sin matrícula verificada).
- **Perfiles, docentes, asignaciones y horarios creados son exclusivamente ficticios**. No son el horario oficial 2026–2027.
- Los documentos de horarios 2025–2026 se consultaron solamente para conocer la estructura de cinco bloques; no se copiaron matrículas ni horarios individuales históricos.
- La referencia AulaQR existente tiene el tema «Contraseñas seguras». Se usa solo para demostrar la integración técnica, **no** como contenido curricular de Matemática.
- Accesos por área: navegación simulada, **sin contraseñas ni autorización real**.

## Ejecutar localmente
Desde esta carpeta: `python3 -m http.server 8000`; visitar `http://localhost:8000`. Se requiere HTTP por los módulos JavaScript y la carga de JSON.

## Archivos
- `index.html`: portal y navegación
- `datos/catalogo.json`: catálogo estático ficticio
- `src/modelo.js`: reglas de validación y horarios calculados
- `src/app.js`: presentación e interacción
- `src/styles.css`: diseño responsive
- `tests/test-modelo.mjs`: pruebas básicas de relaciones
- `docs/DECISIONES.md`: alcance, riesgos y siguientes incrementos

## Publicación
Publicar solo la rama aprobada a GitHub Pages después de comprobar que NO se han subido nombres reales, documentos, fechas de nacimiento, matrículas reales o credenciales. Esta entrega no ha sido publicada.
