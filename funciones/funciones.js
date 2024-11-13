
// Función para index
function mensajeBienvenida() {
    alert("¡Bienvenido a nuestra pagina web!");
}

// Función para la Página 1
function cambiarColor(elemento, color) {
    elemento.style.backgroundColor = color;
}

// Función para la Página 2
function validarFormulario(evento) {
    evento.preventDefault();
    const nombre = document.getElementById("nombre").value;
    if (!nombre) {
        alert("El campo de nombre no puede estar vacío.");
        return;
    }
    alert("Formulario enviado correctamente.");
}

// Función para la Página 3
function agregarElemento() {
    const lista = document.getElementById("miLista");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = "Nuevo elemento";
    lista.appendChild(nuevoElemento);
}

// Función para la Página 4
function iniciarContador() {
    let contador = 0;
    setInterval(() => {
        document.getElementById("contador").textContent = `Contador: ${contador}`;
        contador++;
    }, 1000);
}
function saludoInicio() {
    alert("¡Bienvenido a la Sociedad Gastronómica y Cultural!");
}
