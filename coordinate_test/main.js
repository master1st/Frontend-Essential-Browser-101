const Rectangle = document.querySelector('.Rectangle');

Rectangle.addEventListener('click', (e) => {
    
    console.log(Rectangle.getBoundingClientRect());
    console.log(`Screen X/Y: ${e.screenX}, ${e.screenY}`);
    console.log(`Client X/Y: ${e.clientX}, ${e.clientY}`);
})

