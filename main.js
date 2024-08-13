const sideDish = document.getElementById('side');
const mainDish = document.querySelector('.main');
const dessertDish = document.querySelector('.dessert');
const entireDish = document.querySelector('.entire');
const dishDisplay = document.getElementById('dish-display');

const dishButton = document.querySelector('.dish-button');


dishButton.addEventListener('click', function(event) {
  showDish(event);
});

function showDish() {
  dishDisplay.innerHTML = `<p>You should make:</p>`
}