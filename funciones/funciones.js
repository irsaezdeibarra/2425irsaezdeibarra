
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
// Función para index
function saludoInicio() {
    alert("¡Bienvenido a la Sociedad Gastronómica y Cultural!");

// Función para la Página 1    
}
function mostrarDetalle(anio) {
    const detalles = {
        2010: "Renovación de nuestras instalaciones.",
        2015: "Incorporación de jóvenes con nuevas ideas.",
        2018: "Eventos con chefs invitados.",
        2021: "Compromiso con productos locales.",
        2023: "Catas de vinos y sesiones de maridaje."
    };
    alert(detalles[anio]);
}
// Función para la Página 2
function filtrarEventos() {
    const filtro = document.getElementById("buscarEvento").value.toLowerCase();
    const filas = document.querySelectorAll("tbody tr");
    filas.forEach(fila => {
        const nombreEvento = fila.cells[1].textContent.toLowerCase();
        fila.style.display = nombreEvento.includes(filtro) ? "" : "none";
    });
}
