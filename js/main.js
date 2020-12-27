//Obtener el valor del formulario
const $form = document.querySelector("#carta-a-santa");

//Distintas formas de agregar elementos
const nombre = $form.nombre.value;
//nombre = document.querySelector('[name=nombre]').value;
//nombre = document.querySelector('#nombre').value;
console.log(nombre);

const ciudad = $form.ciudad.value;
console.log(ciudad);

const comportamiento = $form.comportamiento.value;
console.log(comportamiento);

const descripcion = $form["descripcion-regalo"].value;
console.log(descripcion);

let cantidadErrores = 0;

//Validar que el nombre sea válido y escribir una prueba

function validarNombre(nombre) {
  if (nombre.length === 0) {
    return "Este campo tiene que tener al menos un caracter";
  } else if (nombre.length >= 50) {
    return "Este campo no puede tener mas de 49 caracteres";
  }
  //que empieze con letras luego que haya un espacio
  //luego que haya otro conjunto de caracteres, que termine ahi
  // i = da igual el keySensitive
  else if (!/^[a-z]+ [a-z]+$/i.test(nombre)) {
    return "el campo acepta solo letras y es nombre-apellido";
  } else {
    return "";
  }
}

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return "Este campo tiene que tener al menos un caracter";
  } else if (ciudad.length >= 50) {
    return "Este campo no puede tener mas de 49 caracteres";
  } else {
    return "";
  }
}

function validarDescripcionRegalo(descripcion) {
  if (descripcion.length === 0) {
    return "Este campo tienen que tener al menos un caracter";
  } else if (descripcion.length >= 50) {
    return "Este campo no puede tener mas de 49 caracteres";
  }
  //cualquier letra y cualquier numero
  //acepta comas, puntos, guiones bajos y espacios
  // ^ que empieze con lo indicado
  // +$ al menos uno
  else if (!/^[a-z0-9,\._ ]+$/i.test(descripcion)) {
    return "Solo letras o numeros, ningun caracter raro";
  } else {
    return "";
  }
  function validarComportamiento() {}
}
//evento es un objeto
function validarFormulario(event) {
  cantidadErrores=0;
  const $form = document.querySelector("#carta-a-santa");
  const nombre = $form.nombre.value;
  const ciudad = $form.ciudad.value;
  const descripcionRegalo = $form["descripcion-regalo"].value;
  const errorNombre = validarNombre(nombre);
  const errorCiudad = validarCiudad(ciudad);
  const errorDescripcion = validarDescripcionRegalo(descripcionRegalo);
  //Creo un objeto porque AHORA vamos implementar una forma mas eficiente
  // que no sea tan especifica como manejarErrores(errores)
  //objeto que describe los errores que hay en nuestro formulario
  const errores = {
    nombre: errorNombre,
    ciudad: errorCiudad,
    //lo hago para pooder hacerlo dinamico a la toma de errores
    "descripcion-regalo": errorDescripcion,
  };
  //console.log(errores);

  //le paso un objeto errores
  manejarErrores2(errores);

  //le pasa un array porque puede tener varios errores !
  //manejarErrores([errorNombre, errorCiudad, errorDescripcion]);

  //el evento termina aca
  //Event.bubbling
  //Cuando se valida el formulario hace que no siga subiendo ese evento
  //no se siga propando el evento.submit
  //kill el evento antes de que se envie
  event.preventDefault();
}

function manejarErrores1(errores) {
  // A diferencia de los array no importa el orden de los atributos
  // No me hace falta saber el indice de c/u
  // Funcionan mas o menos como un dicconario mientras sepa la llave
  errorNombre = errores.nombre; //nombre
  errorCiudad = errores.ciudad; //ciudad
  errorDescripcion = errores.descripcionRegalo; //descripcion regalo

  //Cada vez que agregamos un campo hay que agregar una validacion
  //Es un viaje,esta hardcodeado, hay que arreglar esto !!
  //estatico
  if (errorNombre) {
    $form.nombre.className = "error";
  } else {
    $form.nombre.className = "";
  }
  if (errorCiudad) {
    $form.ciudad.className = "error";
  } else {
    $form.ciudad.className = "";
  }
  if (errorDescripcion) {
    console.log(errorDescripcion);
    $form["descripcion-regalo"].className = "error";
  } else {
    $form["descripcion-regalo"].className = "";
  }
}

function manejarErrores(errores) {
  //infiero que es el error[0] corresponde al nombre
  //error[1] corresponde a la ciudad
  //Tengo que manejar errores en orden y es una funcion especifica ... no conviene
  errorNombre = errores[0]; //nombre
  errorCiudad = errores[1]; //ciudad
  if (errorNombre) {
    //esto hace que despues se vea con color rojo en el css
    $form.nombre.className = "error";
  } else {
    $form.nombre.className = "";
  }
}

//cuando el formulario le hagan submit ejecuta la siguiente funcion
//submit propiedad que espera una funcion que se le asigne.
//validarFormualario(evento) se genera un evento (el evento que llevo a que le hicieran click al formulario )

//validarFormulario = funcion callback -> lo llama el navegador
$form.onsubmit = validarFormulario;

//event.bubbling

//---------------Aparte--------------------------
//Cuando quiero recorrer todos lo elementos del array a diferencia
//del for normal donde puede ser que no recorra todos los elementos.

//Recorrer todos los elementos input y muestro su valor

/*document.querySelectorAll("input").forEach(function (element) {
  console.log(element.value);
});
*/

function manejarErrores2(errores) {
  //cualquier campo que entre manejamos la validacion
  borrarElementosAnteriores();
  const llaves = Object.keys(errores);
  //console.log(llaves);
  llaves.forEach(function (llave) {
    const error = errores[llave];
    if (error) {
      cantidadErrores++;
      //el name de cada elemento debe coincidir con el nombre de la llave
      //descripcion-regalo hay que modificarlo
      $form[llave].className = "error";
      agregarErrores(error);
    } else {
      $form[llave].className = "";
    }
  });
  console.log(cantidadErrores);

 ocultarFormulario(cantidadErrores);
  
  
}

//Podemos agarrar solo los keys o los value de un objeto
//Object.keys(errores);
//Object.values(errores);

function agregarErrores(error) {
  $ul = document.querySelector("#errores");
  nuevoli = document.createElement("li");
  console.log(error);
  nuevoli.innerText = error;
  $ul.appendChild(nuevoli);
}

function borrarElementosAnteriores() {
  let $errores = document.querySelectorAll("#errores li");
  //console.log($errores)
  for (let i = 0; i < $errores.length; i++) {
    $errores[i].remove()
  }
  //console.log($errores)
}

function ocultarFormulario(cantidadErrores){
  if(cantidadErrores===0){
    const $cartaSanta = document.querySelector("#carta-a-santa");
    $cartaSanta.className="oculto";
    const $Exito = document.querySelector("#exito");
    $Exito.className="";
    //const regalo = $form["descripcion-regalo"].value;
    //cargarPedidosRegalo(regalo);    
    setTimeout(function(){location.href="wishlist.html"}, 5000)
    
  }

}

/*
function cargarPedidosRegalo(regalo){
  const $listaRegalos = document.querySelector("#listaRegalo");
  const nuevoli = document.createElement("li");
  console.log(nuevoli);
  //nuevoli.innerText=regalo;
  //$listaRegalos.appendChild(nuevoli);
}
*/
