const btnGuardar = document.querySelector(".btnGuardar");
const nombre = document.querySelector(".nombre");
const email = document.querySelector(".email");
const edad = document.querySelector(".edad");
const pais = document.querySelector(".pais");

const mostrarNombre = document.querySelector(".mostrarNombre");
const mostrarEmail = document.querySelector(".mostrarEmail");
const mostrarEdad = document.querySelector(".mostrarEdad");
const mostrarPais = document.querySelector(".mostrarPais");

const textoNombre = localStorage.getItem("nombre");
if (textoNombre !="") {
    mostrarNombre.textContent = textoNombre;
}

const textoEmail = localStorage.getItem("email");
if (textoEmail !="") {
    mostrarEmail.textContent = textoEmail;
}

const textoEdad = localStorage.getItem("edad");
if (textoEdad !="") {
    mostrarEdad.textContent = textoEdad;
}

const textoPais = localStorage.getItem("pais");
if (textoPais !="") {
    mostrarPais.textContent = textoPais;
}


btnGuardar.addEventListener("click", () => {

        localStorage.setItem("nombre", nombre.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("edad", edad.value);
        localStorage.setItem("pais", pais.value);

        mostrarNombre.textContent = nombre.value;
        mostrarEmail.textContent = email.value;
        mostrarEdad.textContent = edad.value;
        mostrarPais.textContent = pais.value;


});
