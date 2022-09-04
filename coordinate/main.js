'use strict';

const target = document.querySelector('.target');
const widthLine = document.querySelector('.widthLine');
const heightLine = document.querySelector('.heightLine');
const coordtext = document.querySelector('.coordtext');

console.log(widthLine.clientTop);
widthLine.style.top = `${widthLine.clientTop}`;
heightLine.style.left = `${widthLine.clientLeft}`;
// heightLine.style.left

// widthLine.clientTop
// widthLine.clientLeft

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    coordtext.style.top = `${y}px`;
    coordtext.style.left = `${x}px`;
    coordtext.innerHTML = `${x}px, ${y}px`;
    coordtext.style.color = "white";
    target.style.top = `${y}px`;
    target.style.left = `${x}px`;
    widthLine.style.top= `${y}px`;
    heightLine.style.left= `${x}px`;

    
})