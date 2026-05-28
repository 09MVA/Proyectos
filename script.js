const btnLike = document.getElementById('btn-like');
const contador = document.getElementById('contador-likes');

// 1. Recuperamos el total de likes y el estado de la memoria
let likesGuardados = localStorage.getItem('contador_likes');
let totalLikes = likesGuardados ? parseInt(likesGuardados) : 0;

// 2. Revisamos si el usuario ya había dado like antes (true o false)
let yaDioLike = localStorage.getItem('dio_like') === 'true';

// 3. Mostramos cómo quedó la última vez
contador.innerText = totalLikes;
if (yaDioLike) {
    btnLike.classList.add('activo');
}

// 4. Lógica del clic inteligente
btnLike.addEventListener('click', () => {
    if (!yaDioLike) {
        // SI NO HA DADO LIKE: Sumamos 1 y activamos
        totalLikes++;
        yaDioLike = true;
        btnLike.classList.add('activo');
    } else {
        // SI YA TENÍA LIKE: Restamos 1 y desactivamos
        totalLikes--;
        yaDioLike = false;
        btnLike.classList.remove('activo');
    }

    // 5. Guardamos los cambios para que al refrescar no se pierdan
    contador.innerText = totalLikes;
    localStorage.setItem('contador_likes', totalLikes);
    localStorage.setItem('dio_like', yaDioLike);
});