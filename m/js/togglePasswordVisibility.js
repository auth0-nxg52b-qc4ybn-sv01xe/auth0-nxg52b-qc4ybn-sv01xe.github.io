// Developed by Malva Group

document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('p455');
    const actVisual = document.querySelector('.actVisual');
    const p455Row = document.querySelector('.p455Row');

    actVisual.style.display = 'none';

    input.addEventListener('focus', function() {
        p455Row.classList.add('red-border');
    });

    input.addEventListener('input', function() {
        if (this.value.length > 0) {
            actVisual.style.display = 'inline';
        } else {
            actVisual.style.display = 'none';
        }
    });

    actVisual.addEventListener('click', function() {
        if (input.type === 'password') {
            input.type = 'text';
            this.textContent = 'Ocultar';
        } else {
            input.type = 'password';
            this.textContent = 'Mostrar';
        }
    });

    document.addEventListener('click', function(event) {
        if (!p455Row.contains(event.target) && event.target !== input) {
            p455Row.classList.remove('red-border');
        }
    });
});