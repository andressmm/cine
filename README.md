Este proyecto muestra una interfaz interactiva para seleccionar asientos en una sala de cine utilizando HTML, CSS y JavaScript puro. Permite al usuario seleccionar asientos disponibles, visualizar el total de seleccionados y calcular el precio total.

**Características**

- Diseño visual de filas y asientos.
- Asientos con tres estados: disponible, ocupado, y seleccionado.
- Al hacer clic en un asiento disponible, se selecciona o deselecciona.
- Se actualiza dinámicamente el total de asientos seleccionados y el costo total.
- Código simple y sin dependencias externas
- Cada asiento es un div class="seat"
- Los asientos ocupados tienen la clase occupied y no se pueden seleccionar.
- Los asientos seleccionados tienen la clase selected, que se alterna con click.
- Se usa querySelectorAll para obtener todos los asientos disponibles (NodeList).
- Se usan manejadores de eventos (addEventListener) para detectar qué asiento fue cliqueado.
- La lógica se basa en la referencia directa al elemento DOM clickeado.
- El total se calcula multiplicando la cantidad de asientos seleccionados por el precio de la entrada.
