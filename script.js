const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const ticketPrice = 1200; // precio de la entrada

function updateSelectedCount() { // se actualiza el número de asientos seleccionados y el total
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedCount = selectedSeats.length;

  count.innerText = selectedCount;
  total.innerText = selectedCount * ticketPrice;
}

seats.forEach(seat => { // se agrega un evento de clic a cada asiento
  seat.addEventListener('click', () => {
    seat.classList.toggle('selected');
    updateSelectedCount();
  });
});
