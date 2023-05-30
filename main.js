function inicio() {
  const nombre = prompt("Favor de ingresar su nombre");
  const apellido = prompt("Favor de ingresar su apellido");
  alert(
    "Hola " +
      nombre +
      " " +
      apellido +
      "!" +
      " le damos la bienvenida a CELESTINA: Vida a Granel"
  );
}

class Integrales {
  constructor(item, precio, presentacion) {
    this.item = item;
    this.precio = precio;
    this.presentacion = presentacion;
  }
}

let precios = [
  { item: "Pasas Morena", precio: "16" },
  { item: "Almendras", precio: "34" },
  { item: "Castaña", precio: "40" },
  { item: "Chía", precio: "26" },
  { item: "Harina", precio: "14" },
];

function cargarProductos() {
  let item = prompt("Ingresar el producto a solicitar");
  let precio = parseInt(prompt("Ingrese el precio del producto"));
  let presentacion = prompt("Ingrese la presentacion a cotizar");
  const nuevoItem = new Integrales(item, precio, presentacion);
  carrito.push(nuevoItem);
  alert("Su producto se acaba de agregar al carrito de compras");
}

function verCarrito() {
  carrito.forEach((elemento) => {
    alert(
      `Se ha elegido el integral ${elemento.item} a un precio de ${elemento.precio} en la presentacion de ${elemento.presentacion}`
    );
  });
}

function verPromocion() {
  const promociones = precios.filter((integral) => integral.precio < 16);
  for (const promocion of promociones) {
    alert(
      `la promocion vigente el dia de hoy es: el integral ${promocion.item} a un precio de ${promocion.precio}`
    );
  }
}

function diaEntrega() {
  delivery = prompt(
    "Elige el día para la entrega \n 1: Lunes \n 2: Martes \n 3: Miercoles \n 4: Jueves \n 5: Viernes \n 6: Sábado \n 7: Domingo"
  );
  alert("Día seleccionado para la entrega");
}

function finalizarCompra() {
  const total = carrito.reduce((acc, element) => acc + element.precio, 0);
  alert(
    `Gracias por su compra, el total a pagar es de ${total} y la entrega se realizará el día indicado. Vuelva pronto!`
  );
}

let carrito = [];
let delivery;

inicio();
let opcion = prompt(
  "Que te gustaría hacer? \n 1: Cargar algún producto \n 2: Ver la promo del día \n 3: Ir al carrito \n 4: Finalizar la compra \n 5: Salir"
);

while (opcion !== "5") {
  if (opcion === "1") {
    cargarProductos(carrito);
  }
  if (opcion === "2") {
    verPromocion();
  }
  if (opcion === "3") {
    verCarrito();
  }
  if (opcion === "4") {
    diaEntrega();
    finalizarCompra();
  }
  opcion = prompt(
    "Usted desea: \n 1: Seleccionar otro producto \n 2: Ver la promo del día \n 3: Ir al carrito \n 4: Finalizar la compra \n 5: Salir"
  );
}
