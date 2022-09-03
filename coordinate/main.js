'use strict';

const target = document.querySelector('.target');
const widthLine = document.querySelector('.widthLine');
const heightLine = document.querySelector('.heightLine');

console.log(widthLine.clientTop);
widthLine.style.top = `${widthLine.clientTop}`;
heightLine.style.left = `${widthLine.clientLeft}`;
// heightLine.style.left

// widthLine.clientTop
// widthLine.clientLeft

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    target.style.top = `${y}px`;
    target.style.left = `${x}px`;
    widthLine.style.top= `${y}px`;
    widthLine.style.left= `${x}px`;
    console.log(event.clientX);
    
})