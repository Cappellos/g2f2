
bgImages = [
  'avocado',
  'banana',
  'coconut',
  'egg',
  'eggplant',
  'kombucha',
  'leaf',
  'salmon',
  'steak',
  'yoga'
];

const bgBody = document.getElementById('bg-body');

function randomBg() {
  let windowWidth = window.innerWidth;
  let randomNumber = Math.floor(Math.random() * (bgImages.length));
  bgBody.setAttribute('class', 'bg-' + bgImages[randomNumber]);
}

randomBg();

const main = document.getElementById('main');

main.onclick = function() {
  randomBg();
}

const links = document.getElementsByTagName('a');

for (var i = 0; i < links.length; i++) {
  links[i].onmouseenter = function() {
    randomBg();
  }
}
