
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

function randomBg() {
  let bodyTag = document.getElementById('body');
  let windowWidth = window.innerWidth;
  let randomNumber = Math.floor(Math.random() * (bgImages.length));
  bodyTag.setAttribute('class', 'bg-' + bgImages[randomNumber]);
}

randomBg();

document.getElementById('main').onclick = function() {
  randomBg()
}
