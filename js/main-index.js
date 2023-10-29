let botonReg = document.getElementById("btnreg");
botonReg.onclick = () => {
    return window.location = "../pages/signin.html";
}

/*let clientes = []

let nombreAlumno
let apellidoAlumno
let dniAlumno
let edadAlumno 
let pesoAlumno
let alturaAlumno

function Cliente(nombre, apellido, dni, edad, peso, altura, mail){
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.edad = edad;
    this.peso = peso;
    this.altura = altura;
    this.mail = mail;
}

function obtenerDatos() {
    nombreAlumno = prompt("Ingrese su nombre")
    if(nombreAlumno.trim().toUpperCase !== "SALIR"){
        if(nombreAlumno.length > 2){
            console.log("--> Su nombreAlumno fue ingresado correctamente") 
        }else{
            while(nombreAlumno.length <= 2 && nombreAlumno.trim().toUpperCase !== "SALIR"){
                console.log("--> Nombre invalido, intente nuevamente")
                nombreAlumno = prompt("Ingrese su nombre")
            }
        }
    } 
    apellidoAlumno = prompt("Ingrese su apellido")
    if(apellidoAlumno.trim().toUpperCase !== "SALIR"){
        if(apellidoAlumno.length > 2){
            console.log("--> Su apellido fue ingresado correctamente") 
        }else{
            while(apellidoAlumno.length <= 2 && apellidoAlumno.trim().toUpperCase !== "SALIR"){
                console.log("--> Apellido invalido, intente nuevamente")
                apellidoAlumno = prompt("Ingrese su apellido")
            }
        }
    } 
    dniAlumno = prompt("Ingrese su DNI.")
    if(dniAlumno.length > 6){
        console.log("--> Altura ingresada correctamente.") 
    }else{
        while(dniAlumno <= 6){
            console.log("--> Verifique el dato ingresado, intente nuevamente")
            dniAlumno = prompt("Ingrese su DNI.")
        }
    }
    edadAlumno = parseInt(prompt("Ingrese su edad"))
    while (isNaN(edadAlumno)) {
        edadAlumno = parseInt(prompt('Por favor, escriba su edad con numeros'));
    }
    if(edadAlumno >= 0 || edadAlumno < 80 ){
        console.log("--> Edad ingresada correctamente.") 
    }else{
        while(edadAlumno < 0 || edadAlumno >= 80){
            console.log("--> Verifique el dato ingresado, intente nuevamente")
            edadAlumno = prompt("Ingrese su edad")
        }
        console.log("--> Edad ingresada correctamente.")
    }
    pesoAlumno = parseFloat(prompt("Ingrese su peso en kilogramos."))
    while (isNaN(pesoAlumno)) {
        pesoAlumno = parseInt(prompt('Por favor, escriba un número'));
    }
    if(pesoAlumno > 30){
        console.log("--> Peso ingresado correctamente.") 
    }else{
        while(pesoAlumno <= 30){
            console.log("--> Verifique el dato ingresado, intente nuevamente")
            pesoAlumno = prompt("Ingrese su peso en kilogramos.")
        }
        console.log("--> Peso ingresado correctamente.") 
    }
    alturaAlumno = parseInt(prompt("Ingrese su altura en centímetros."))
    while (isNaN(alturaAlumno)) {
        alturaAlumno = parseFloat(prompt('Por favor, escriba un número. Ingrese su altura en centímetros.'));
    }
    if(alturaAlumno > 0 && alturaAlumno < 2.5){
        console.log("--> Altura ingresada correctamente.") 
    }else{
        while(alturaAlumno <= 0 && alturaAlumno >= 2.5){
            console.log("--> Verifique el dato ingresado, intente nuevamente")
            alturaAlumno = prompt("Ingrese su altura en metros.")
        }
    }
    return {nombre: nombreAlumno, apellido: apellidoAlumno, dni : dniAlumno, edad: edadAlumno, peso: pesoAlumno, altura: alturaAlumno};
}

function verfData(entities = [], value = "") {
    return entities.some((el)=>el.dni == value)
}

function imcCalculo (peso, altura){
    const imc = peso / ((altura/100)*(altura/100))
    let eval = 0
    if(imc >= 18 && imc <25){
    eval = 0;
    } else{
        if(imc < 18){
        eval = 1;
        } else {
        eval = 2;
        }
    }
    return eval;
}
function evaluacionResult(name, index){
    switch(index){
        case 0:
            alert(name + ", este es el resultado de tu evaluacion: Tu indice de masa corporal indica que la relacion entre tu peso y estatura es apropiada, por esto te recomendamos el pla. de entrenamiento general")
            break  
        case 1:
            alert (name + ", este es el resultado de tu evaluacion: Te recomendamos que inicies el plan de entrentamiento PLATA, cuyo plan de trabajo y alimentacion favorece que ganes masa muscular y aumentes de peso.")
            break
        case 2:
            alert (name + ", este es el resultado de tu evaluacion: Te recomendamos que inicies el plan de entrentamiento ORO, cuyo plan de trabajo y alimentacion favorece la perdida de peso.");
            break
    }
}

function hacerEvaluacion (objectPosition){
    let decision = parseInt(prompt("Si usted desea ver nuestra evaluación, ingrese 1, de lo contrario ingrese 0."))
    while (!(decision == 1 || decision == 0)) {
        decision = parseInt(prompt('Si usted desea ver nuestra evaluación, ingrese 1, de lo contrario ingrese 0.'));
    }
    if(decision == 1){
        evaluacionResult(clientes[objectPosition].nombre, imcCalculo(clientes[objectPosition].peso, clientes[objectPosition].altura));
    }
}


alert("BIENVENIDO A AGON TRAINING")
let dec = prompt("Desea inscribirse?")
while(dec.trim().toUpperCase() == "SI" ){
    let cliente = obtenerDatos();
    let verf = verfData(clientes, dniAlumno)
    if(verf == true){
        alert("Ya existe un cliente asociado al número de DNI ingresado")
    } else{
        clientes.push(cliente);
        let nroCliente = clientes.length - 1
        console.log("--> Los datos ingresados son:")
        console.table(clientes[nroCliente]);
        alert("Verifique sus datos en consola.")
        hacerEvaluacion(nroCliente);
    }
    dec = prompt("Desea realizar una nueva inscripcion?")
}
alert("Muchas gracias!")*/
