// Tenemos un li de productos

//Se creó una carpeta donde se colocaron las imagenes y se modificaron las rutas de acceso de cada elemento del array

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./imagenes/taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./imagenes/taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./imagenes/bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./imagenes/bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./imagenes/zapato-rojo.jpg"}
]; //Se agrega el ';' ya que, aunque no manda error, es una práctica

const li = document.getElementById("lista-de-productos");//Se cambia el atributo getElementsByName por getElmentbyId ya que es un id a lo que se está haciendo referencia
const $i = document.getElementById("input");//Se cambia la instrucción por getElementById para poder identificar de una manera mas sencilla a que elemento del archivo filtro.html se hace referencia

//Se crea la función displayProductos para mostrar los productos
const displayProductos=(productos)=>
{
  for (let i = 0; i < productos.length; i++) {
    //Se sustituye la forma de declarar variables 'var' por 'let' ya que var ya no es usada.
    let d = document.createElement("div")
    d.classList.add("producto")
  
    let ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productos[i].nombre
    
    let imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);
    
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
};//Se agrega ';' para mantener una buena práctica

displayProductos(productos);//Se agrega ';' para mantener una buena práctica
const botonDeFiltro = document.querySelector("button");

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto.toLowerCase()) || item.color.includes(texto.toLowerCase()));//Se agrega el atributo 'toLowerCase' para normalizar el texto entrante por el input y el texto a como se tiene en el arreglo de productos
};//Se agrega ';' para mantener una buena práctica 

//Se cambia de lugar la función 'filtrado' para mejor legibilidad del código
botonDeFiltro.onclick = function() {
  
  /* while (li.firstChild) {
    li.removeChild(li.firstChild);
  } */
  //Se comenta el bloque de código anterior, ya que se sustituye por la línea de código 52 para optimización
  li.innerHTML = '';//Limpia la lista anterior
  

  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  /* for (let i = 0; i < productosFiltrados.length; i++) {
    let d = document.createElement("div")
    d.classList.add("producto")
  
    let ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    let imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  } */

  //Para optimizar el código, se quita el for para mostrar los productos filtrados y se sustituye haciendo uso de la función para mostrar los productos, creada anteriormente.
  displayProductos(productosFiltrados);
};//Se agrega ';' para mantener una buena práctica

