const sideDish = document.getElementById('side');
const mainDish = document.getElementById('main');
const dessertDish = document.querySelector('#dessert');
const entireDish = document.querySelector('#entire');
const dishDisplay = document.getElementById('dish-display');

const dishButton = document.querySelector('.dish-button');


var sides = [
  "Potato Salad",
  "Corn",
  "Rolls",
  "Green Beans",
  "Maple Carrots"
];

var mains = [
  "Tofu Steak",
  "Risotto",
  "Spaghetti",
  "Beet Wellington",
  "Shepard's Pie"
];

var desserts = [
  "Cheezecake",
  "Cherry Pie",
  "Blondies",
  "Blueberry Pie",
  "Maple Donuts"
];

var randomSide = sides[getRandomIndex(sides)];
var randomMain = mains[getRandomIndex(mains)];
var randomDessert = desserts[getRandomIndex(desserts)];

let selectedRadio = ''

dishButton.addEventListener('click', function(event) {
  showDish(event);
});
sideDish.addEventListener('click', handleRadioClick);
mainDish.addEventListener('click', handleRadioClick);
dessertDish.addEventListener('click', handleRadioClick);

function handleRadioClick(event) {
  selectedRadio = event.target.value;
}

function showDish(event) {
  console.log(selectedRadio)
  event.preventDefault();

  if (selectedRadio === sideDish.id) {
  dishDisplay.innerHTML = `<p>You should make:</p>` + `<h1>${randomSide}</h1>`
  }
  else if(selectedRadio === mainDish.id) {
  dishDisplay.innerHTML = `<p>You should make:</p>` + `<h1>${randomMain}</h1>`
  }
  else if(selectedRadio === dessertDish.id) {
  dishDisplay.innerHTML = `<p>You should make:</p>` + `<h1>${randomDessert}</h1>`
  }
  else 
  dishDisplay.innerHTML = "<h2>Select a dish</h2>";
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}