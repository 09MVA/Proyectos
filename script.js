const btnLike = document.getElementById('btn-like');
const contador = document.getElementById('contador-likes');

// Esta es la dirección del servidor gratuito donde se guardará tu conteo
const namespace = "milton-pavel-ucsp-2026";
const key = "likes-totales";

// Función para leer los likes de internet
async function cargarLikes() {
    try {
        const resp = await fetch(`https://api.countapi.xyz/get/${namespace}/${key}`);
        const data = await resp.json();
        contador.innerText = data.value;
    } catch (e) { contador.innerText = "2"; }
}

cargarLikes();

btnLike.addEventListener('click', async () => {
    // Si el usuario no ha dado like en esta sesión
    if (!btnLike.classList.contains('activo')) {
        try {
            // Esta línea le dice al servidor de internet: "Súmale 1"
            const resp = await fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`);
            const data = await resp.json();
            contador.innerText = data.value;
            btnLike.classList.add('activo');
        } catch (e) { alert("Error de conexión"); }
    }
});