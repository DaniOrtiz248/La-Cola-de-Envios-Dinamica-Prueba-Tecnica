 # Envíos Masivos - Prueba Técnica (Frontend)

 **Autor:** Daniel Andres Ortiz Solano

 **Dirigido a:** Elemental Lab SAS

 > Interfaz simple para preparar y simular una campaña de envío masivo.

 Resumen
 - Proyecto React (Vite) que implementa la interfaz del reto "La Cola de Envíos Dinámica".
 - Estilos con CSS Modules; sin librerías de componentes ni de estado global.

 Características
 - Lista de clientes (hardcodeada) con selección condicional.
 - Simulación secuencial de envíos con estados: pending → sending → success/error.
 - Modal que muestra el progreso de la campaña.
 - Diseño responsivo básico y variables de color en `src/index.css`.

 Instalación y ejecución
 ```bash
 npm install
 npm run dev
 ```
 Abrir la URL que muestre Vite (por defecto http://localhost:5173).

 Build para producción
 ```bash
 npm run build
 ```

 Estructura principal
 - `src/components/` — componentes: `Banner`, `ClientList`, `ClientCard`, `CampaignButton`, `CampaignModal`.
 - `src/data/clients.js` — datos de ejemplo.
 - `src/index.css` — variables de paleta y estilos base.

 Notas importantes
 - Se respetaron las restricciones de la prueba: CSS puro (CSS Modules) y React con `useState`/`useEffect`.
 - No se añadieron librerías externas de UI ni manejo global de estado.

 Uso rápido
 - Selecciona clientes en la lista. Si un cliente tiene puntuación > 80, la app bloquea la selección de clientes inactivos según la regla del reto.
 - Haz clic en "Iniciar Campaña" para iniciar la simulación; abre el modal para ver el progreso.
