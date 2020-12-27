
function probarValidarNombre(){
    console.assert(
        validarNombre('')==='Este campo tiene que tener al menos un caracter',
    'validarNombre no funciono con un string vacio');
    
    console.assert(
        validarNombre('111111111111111111111111111111111111111111111111111111111111111111111111111111111111111')==='Este campo no puede tener mas de 49 caracteres',
        'validarNombre no funciono con una cadena larga'
    )

    console.assert(
        validarNombre("123456")==="el campo acepta solo letras y es nombre-apellido",
        "Validar nombre no valido que el nombre solo tenga letras"
    )
    //caso camino feliz, nombre valido no deberia existir error

    console.assert(
        validarNombre("Tomas Liendo")==='',
        "el campo acepta solo letras y es nombre-apellido"
    )
    
}

function probarValidarCiudad(){
    console.assert(
        validarCiudad('')==='Este campo tiene que tener al menos un caracter',
        'validarCiudad no funciona con un string vacio'
    )
    console.assert(
        validarCiudad('111111111111111111111111111111111111111111111111111111111111111111111111111111111111111')==='Este campo no puede tener mas de 49 caracteres',
        'validarCiudad no funciona con una cadena larga')

    //caso camino feliz
    console.assert(
        validarCiudad("Buenos Aires") ==='', "Validar ciudad no funcionó con un nombre de ciudad valido"
    )
    
}

function probarDescripcionRegalo(){
    //camino no feliz
    console.assert(
        validarDescripcionRegalo("")==="Este campo tienen que tener al menos un caracter",
        "validarDescripcionRegalo no está funcionando con un string vacio"
    )
    console.assert(
        validarDescripcionRegalo("111111111111111111111111111111111111111111111111111111111111111111111111111111111111111")==="Este campo no puede tener mas de 49 caracteres",
        "No esta funcionando la validacion cuando la cadena de caracteres es larga"
    )
    console.assert(
        validarDescripcionRegalo("######~~~~~||")==="Solo letras o numeros, ningun caracter raro",
        "La validacion de solo letras y numeros no estaria funcionando"
    )
    //camino feliz
    console.assert(
        validarDescripcionRegalo("queria pedir la PS5")==="",
        "cuando se coloca un string correcto no funciona"

    )
}


probarValidarNombre();
probarValidarCiudad();
probarDescripcionRegalo();

//validar Descripcionregalo y ciuudad 

