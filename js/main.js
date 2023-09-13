console.log("-->Bienvendo/a, estas por iniciar el proceso de registro, si requerís retirarte antes de concluirlo, escribí 'SALIR'.");
let nombreAlumno = prompt("Ingrese su nombre")
if(nombreAlumno.trim().toUpperCase !== "SALIR"){
    if(nombreAlumno.length > 2){
        console.log("--> Su nombre fue ingresado correctamente") 
    }else{
        while(nombreAlumno.length <= 2 && nombreAlumno.trim().toUpperCase !== "SALIR"){
            console.log("--> Nombre invalido, intente nuevamente")
            nombreAlumno = prompt("Ingrese su nombre")
        }
    }
} 
let apellidoAlumno = prompt("Ingrese su apellido")
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
let edad = parseInt(prompt("Ingrese su edad"))
while (isNaN(edad)) {
    edad = parseInt(prompt('Por favor, escriba su edad con numeros'));
   }
if(edad >= 0 || edad < 80 ){
    console.log("--> Edad ingresada correctamente.") 
}else{
    while(edad < 0 || edad >= 80){
        console.log("--> Verifique el dato ingresado, intente nuevamente")
        edad = prompt("Ingrese su edad")
    }
    console.log("--> Edad ingresada correctamente.")
}
let peso = parseFloat(prompt("Ingrese su peso en kilogramos."))
while (isNaN(peso)) {
    peso = parseInt(prompt('Por favor, escriba un número'));
   }
if(peso > 30){
    console.log("--> Peso ingresado correctamente.") 
}else{
    while(peso <= 30){
        console.log("--> Verifique el dato ingresado, intente nuevamente")
        peso = prompt("Ingrese su peso en kilogramos.")
    }
    console.log("--> Peso ingresado correctamente.") 
}
let altura = parseInt(prompt("Ingrese su altura en centimetros."))
while (isNaN(altura)) {
    altura = parseInt(prompt('Por favor, escriba un número'));
   }
if(altura > 120){
    console.log("--> Altura ingresada correctamente.") 
}else{
    while(altura <= 120){
        console.log("--> Verifique el dato ingresado, intente nuevamente")
        altura = prompt("Ingrese su altura en centimetros.")
    }
}

alert("Muchas gracias " + nombreAlumno + " " + apellidoAlumno + ". Usted ha sido registrado correctamente."
)

let decision = parseInt(prompt("Si usted desea ver nuestra evaluación, ingrese 1, de lo contrario ingrese 0."))
while (isNaN(decision) || decision > 1 || decision < 0) {
    variable = parseInt(prompt('Si usted desea ver nuestra evaluación, ingrese 1, de lo contrario ingrese 0.'));
   }
const imc = peso / (altura*altura)
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
function evaluacion(name, index){
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
if(decision == 1){
    evaluacion(nombreAlumno, eval);
}



 
