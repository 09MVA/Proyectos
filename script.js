const btnLike = document.getElementById('btn-like');
const contador = document.getElementById('contador-likes');

// 1. Al cargar, buscamos si ya había likes guardados. 
// Si no hay nada, empezamos en 0.
let likesGuardados = localStorage.getItem('misLikesTotales');
let likes = likesGuardados ? parseInt(likesGuardados) : 0;

// Mostramos los likes que recuperamos de la memoria
contador.innerText = likes;

// 2. Escuchamos el clic
btnLike.addEventListener('click', () => {
    likes++; // Aumentamos
    contador.innerText = likes; // Actualizamos la pantalla
    
    // 3. ¡LA CLAVE! Guardamos el nuevo número en la memoria del navegador
    localStorage.setItem('misLikesTotales', likes);
    
    // Animación visual
    btnLike.classList.toggle('activo');
    console.log("Like guardado en memoria: " + likes);
});