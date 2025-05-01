document.querySelector('.heart').addEventListener('click', function () {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'foto.pdf', true); // Asegúrate que el nombre del archivo sea correcto.
    xhr.responseType = 'blob';
    xhr.onload = function () {
        if (xhr.status === 200) {
            const blob = xhr.response;
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'regalito.pdf'; // Nombre con el que se descarga la carta
            link.click();
            window.URL.revokeObjectURL(link.href);

            // 🎉 Lanzar confeti después de la descarga
            lanzarConfeti();
        } else {
            console.error('No se pudo descargar el archivo.');
        }
    };
    xhr.send();
});

// 🎉 Función para lanzar confeti
function lanzarConfeti() {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 }
            });
        }, i * 300);
    }
}
