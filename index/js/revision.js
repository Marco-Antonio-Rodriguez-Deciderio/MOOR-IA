// Selecciona el encabezado de la rúbrica y agrega un evento para desplegar/contraer
document.querySelector('.toggle-rubrica').addEventListener('click', function() {
    const section = document.querySelector('.section-rubrica');
    section.classList.toggle('active');

    // Cambia el icono expand_more por expand_less cuando se despliega
    const icon = this.querySelector('.material-icons-sharp');
    icon.textContent = section.classList.contains('active') ? 'expand_less' : 'expand_more';
});

// Selecciona el encabezado del trabajo de estudiante y agrega un evento para desplegar/contraer
document.querySelector('.toggle-trabajo').addEventListener('click', function() {
    const section = document.querySelector('.section-trabajo');
    section.classList.toggle('active');

    // Cambia el icono expand_more por expand_less cuando se despliega
    const icon = this.querySelector('.material-icons-sharp');
    icon.textContent = section.classList.contains('active') ? 'expand_less' : 'expand_more';
});

document.querySelector('.toggle-retroalimentacion').addEventListener('click', function() {
    const content = document.querySelector('.retroalimentacion-content');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
    const icon = this.querySelector('.material-icons-sharp');
    icon.textContent = icon.textContent === 'expand_more' ? 'expand_less' : 'expand_more';
});
