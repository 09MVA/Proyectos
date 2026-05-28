const btnLike = document.getElementById('btn-like');
const contador = document.getElementById('contador-likes');

let baseLikes = 0; 
let dioLike = localStorage.getItem('usuarioDioLike') === 'true';

function actualizarVista() {
    if (dioLike) {
        btnLike.classList.add('activo');
        contador.innerText = baseLikes + 1;
    } else {
        btnLike.classList.remove('activo');
        contador.innerText = baseLikes;
    }
}

actualizarVista();

btnLike.addEventListener('click', () => {
    dioLike = !dioLike;
    localStorage.setItem('usuarioDioLike', dioLike);
    actualizarVista();
});