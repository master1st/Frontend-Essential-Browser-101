'use strict';

const container = document.querySelector('.container');

// const ws_size = `window.screen: ${window.screen.width},${window.screen.height}`;
// container.innerText= ws_size.innerText;
function updatesize() {
    container.innerHTML = `
    window.screen: ${window.screen.width},${window.screen.height} </br>
    window.outer: ${window.outerWidth}, ${window.outerHeight}   </br>
    window.inner: ${window.innerWidth}, ${window.innerHeight}</br>
    documentElement.clientWidth: ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}`;

}


    window.addEventListener('resize', () => {
       updatesize(); 
    });