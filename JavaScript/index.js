document.addEventListener('DOMContentLoaded', () => {
    // Botón biografía
    const biografiaBtn = document.getElementById('biografia-btn');
    const biografiaPanel = document.getElementById('biografia-panel');
    const cerrarBiografia = document.getElementById('cerrar-biografia');

    biografiaBtn.addEventListener('click', () => {
        biografiaPanel.classList.add('open');
    });

    cerrarBiografia.addEventListener('click', () => {
        biografiaPanel.classList.remove('open');
    });

    // Cerrar panel al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!biografiaPanel.contains(e.target) && e.target !== biografiaBtn) {
            biografiaPanel.classList.remove('open');
        }
    });

    // Botones leer (redirigen a páginas de libros)
    const leerBtns = document.querySelectorAll('.leer-btn');
    leerBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            window.location.href = btn.dataset.url;
        });
    });

    // Botones info (modal)
    const infoBtns = document.querySelectorAll('.info-btn');
    const infoModal = document.getElementById('info-modal');
    const infoTexto = document.getElementById('info-texto');
    const cerrarModal = document.getElementById('cerrar-modal');

    infoBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            infoTexto.textContent = btn.dataset.info;
            infoModal.style.display = 'block';
        });
    });

    cerrarModal.addEventListener('click', () => {
        infoModal.style.display = 'none';
    });

    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', (e) => {
        if (e.target === infoModal) {
            infoModal.style.display = 'none';
        }
    });
});