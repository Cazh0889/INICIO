function login() {
    const usuario = document.getElementById("username").value;
    const clave = document.getElementById("password").value;
    const mensajeError = document.getElementById("error-message");

    if (usuario === "Juan" && clave === "12345") {
        window.location.href = "bienvenido.html";
    } else {
        mensajeError.textContent = "Usuario o contraseña incorrectos.";
        mensajeError.style.color = "red";
    }
}
