function validarForm() {
    var usuarioInput = document.getElementById('usuario');
    var senhaInput = document.getElementById('senha');

    if (usuarioInput.value === '' || senhaInput.value === '') {
        usuarioInput.classList.add('invalid');
        senhaInput.classList.add('invalid');
        return false;
    } else {
        usuarioInput.classList.remove('invalid');
        senhaInput.classList.remove('invalid');
        return true;
    }
}