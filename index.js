const displayValorAnterior = document.getElementById("valor-anterior")
const displayValorActual = document.getElementById("valor-actual")
const botonesNumeros = document.querySelectorAll(".numero")
const botonesOperadores = document.querySelectorAll(".operador")

const display = new Display(displayValorAnterior,displayValorActual);

botonesNumeros.forEach(boton => { //a cada boton se le agrega un detector de evento, donde el evento es un click
    boton.addEventListener("click", () => {//cada que alguien haga click, el display agregará un número
        display.agregarNumero(boton.innerHTML); //El valor que está en el HTML se pasa como parámetro
    });
});

botonesOperadores.forEach(boton => {
    boton.addEventListener("click", () => display.computar(boton.value))
})