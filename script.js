const boton1 = document.getElementById ('boton1');
const boton2 = document.getElementById ('boton2');

boton1.addEventListener('click', () => {
    alert('Te amo!');
});
boton2.addEventListener('click', () => {
    const parrafos = document.querySelectorAll('.parrafo');
    parrafos.forEach((parrafo) => { parrafo.style.color = '#ff69b4';
});
});