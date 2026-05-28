const btnLike = document.getElementById('btn-like');
const contador = document.getElementById('contador-likes');


let likesGuardados = localStorage.getItem('contador_likes');
let totalLikes = likesGuardados ? parseInt(likesGuardados) : 0;


let yaDioLike = localStorage.getItem('dio_like') === 'true';

contador.innerText = totalLikes;
if (yaDioLike) {
    btnLike.classList.add('activo');
}


btnLike.addEventListener('click', () => {
    if (!yaDioLike) {
        totalLikes++;
        yaDioLike = true;
        btnLike.classList.add('activo');
    } else {
        yaDioLike = false;
        btnLike.classList.remove('activo');
    }

    contador.innerText = totalLikes;
    localStorage.setItem('contador_likes', totalLikes);
    localStorage.setItem('dio_like', yaDioLike);
});