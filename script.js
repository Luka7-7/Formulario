const USUARIO = document.querySelector("#user");
const EMAIL = document.querySelector("#email");
const SATISFACCION = document.querySelector("#nivel select");
const REVIEW = document.querySelector("#review");
const CHECK = document.getElementById("check");

let MEMORIA = JSON.parse(localStorage.getItem("registros")) || [];

function enviar() {
    let usuario = USUARIO.value.trim();
    let email = EMAIL.value.trim();
    let nivel = SATISFACCION.value;
    let review = REVIEW.value.trim();

    if (usuario && email && nivel && review && CHECK.checked) {
        let opinion = {
            user: usuario,
            mail: email,
            satisfaccion: nivel,
            feedback: review
        };

        MEMORIA.push(opinion);
        localStorage.setItem("registros", JSON.stringify(MEMORIA));
        USUARIO.value = "";
        EMAIL.value = "";
        REVIEW.value = "";
        SATISFACCION.value = 5;

        Swal.fire("¡Éxito!", "Tu opinión ha sido registrada.", "success");
    } else {
        Swal.fire("Error", "Llene todos los campos y acepte los términos.", "error");
    }
}

function Cancelar() {
    USUARIO.value = "";
    EMAIL.value = "";
    REVIEW.value = ""
    SATISFACCION.value = 5;
}

function checkMemory() {
    return MEMORIA.length > 0;
}
