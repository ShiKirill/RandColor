'use strict';

const colorValue = document.querySelector('#color');
const buttonChangeColor = document.querySelector('#change');

function setColor() {
 document.body.style.backgroundColor = colorValue.textContent;
 buttonChangeColor.style.color = colorValue.textContent;
}
function generateColor() {
 return '#' + Math.floor(Math.random()*Math.pow(256,3)).toString(16);
}
setColor();

buttonChangeColor.addEventListener('click', function(){
 colorValue.textContent = generateColor();
 setColor();
});