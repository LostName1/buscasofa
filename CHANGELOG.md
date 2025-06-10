# CHANGELOG

## [Unreleased]

### Añadido
- Integración de Cypress para pruebas end-to-end y cucumber-preprocessor para pruebas BDD.
- Nuevos tests automáticos para:
  - Home: comprobación de tablas de resumen nacional y por comunidad autónoma.
  - Footer: comprobación de los nombres del equipo.
  - Header: comprobación de enlaces y logo.
  - Modo oscuro: comprobación de cambio de fondo y color de icono.
  - Registro y login de usuario.
  - Página de error 404.
- Componente `Comments` para comentarios de usuarios en estaciones.
- Componente `FuelMap` para mostrar estaciones en un mapa con filtro por radio y ubicación.
- Componente `FuelTable` con filtros, ordenación y paginación.
- Página "Quiénes somos" (`About.jsx`) con información del equipo y enlaces de contacto.
- Soporte para modo oscuro en tablas y estilos generales.
- Listado de comunidades autónomas en [`src/apis/fuelApiLib.js`](src/apis/fuelApiLib.js).
- Documentación básica en [`README.md`](README.md).

### Cambiado
- Refactorización de estilos CSS para soportar modo oscuro.
- Mejoras en la gestión de estado y filtrado en tablas y mapas.
- Actualización de dependencias y configuración de Vite.

### Corregido
- Corrección de errores menores en la visualización de tablas y formularios.
- Ajustes en los tests para mayor robustez y compatibilidad.

---

**Nota:** Este changelog resume los cambios principales realizados desde el fork del repositorio original de hasta la fecha actual. Para detalles específicos de cada commit, consulta el historial de Git.
