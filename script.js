// 1. Obtener los elementos del DOM por su ID
const textoContador = document.getElementById("contador");
const boton = document.getElementById("btn-like");
const cuerpoTabla = document.getElementById("tabla-registros");
 
let likes = 0;
 
// 2. Escuchar el evento 'click' y manipular el DOM
boton.addEventListener("click", () => {
  likes++;
  textoContador.textContent = likes; // Actualizamos el DOM directamente
});

function obtenerHora() {
  const ahora = new Date();
  const horas = String(ahora.getHours()).padStart(2, "0");
  const minutos = String(ahora.getMinutes()).padStart(2, "0");
  const segundos = String(ahora.getSeconds()).padStart(2, "0");
  return `${horas}:${minutos}:${segundos}`;
}
 
function agregarFila(numero, hora) {
  const fila = document.createElement("tr");
  const celdaNumero = document.createElement("td");
  celdaNumero.textContent = numero;
  const celdaHora = document.createElement("td");
  celdaHora.textContent = hora;
  fila.appendChild(celdaNumero);
  fila.appendChild(celdaHora);
  cuerpoTabla.prepend(fila);   // lo más reciente arriba
}
