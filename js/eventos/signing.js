let pesoUsuario = document.getElementById("pesoUsuario").value
let alturaUsuario = document.getElementById("alturaUsuario").value
let botonRecomendación = document.getElementById("buttonRecomendacion")



// RECOMENDACIÓN DE PLAN DE TRABAJO (opcional)
/*let validarDatosIMC = (
    pesoUsuario = "",
    alturaUsuario = "",
  ) => {
    if (pesoUsuario != 0) {
      alert("El peso del usuario es requerido.");
      return false;
    }
    if (pesoUsuario == NaN) {
      alert("El valor ingresado en 'PESO' debe ser un número entero.");
      return false;
    }
    if (pesoUsuario < 10 || 400 < pesoUsuario) {
      alert(
        "Ingrese un peso válido"
      );
      return false;
    }
    if (alturaUsuario.length == 0) {
        alert("El altura del usuario es requerido.");
        return false;
      }
    if (alturaUsuario == NaN) {
        alert("El valor ingresado en 'ALTURA' debe ser un número entero.");
        return false;
    }
    if (alturaUsuario < 10 || 250 < alturaUsuario) {
        alert(
          "Ingrese una altura válida."
        );
        return false;
    }
    return true;
  };
*/
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
function evaluacionResult(index){
    switch(index){
        case 0:
            alert("Este es el resultado de tu evaluacion: Tu indice de masa corporal indica que la relacion entre tu peso y estatura es apropiada, por esto te recomendamos el pla. de entrenamiento general")
            break  
        case 1:
            alert ("Este es el resultado de tu evaluacion: Te recomendamos que inicies el plan de entrentamiento PLATA, cuyo plan de trabajo y alimentacion favorece que ganes masa muscular y aumentes de peso.")
            break
        case 2:
            alert ("Este es el resultado de tu evaluacion: Te recomendamos que inicies el plan de entrentamiento ORO, cuyo plan de trabajo y alimentacion favorece la perdida de peso.");
            break
    }
}

botonRecomendación.onclick = (e) => {
    e.preventDefault()
    evaluacionResult(imcCalculo(pesoUsuario,alturaUsuario))     
}

// VALIDACION Y REGISTRO


const NAME_MIN_CHARACTERS = 6;
const PASSWORD_MIN_CHARACTERS = 4;

const validarFormulario = (
  emailUsuario = "",
  contrasenaUsuario = "",
  contrasenaRepUsuario = "",
  nombreUsuario = "",
  apellidoUsuario = ""
) => {
  if (emailUsuario.length == 0) {
    alert("El email es requerido.");
    return false;
  }
  if (emailUsuario.length == 0) {
    alert("El email es requerido.");
    return false;
  }
  //emailUsuario.includes("@")
  //if (!emailUsuario.includes("@")){
    //alert("Ingrese un email válido");
    //return false;
 // }
  if (contrasenaUsuario.length == 0) {
    alert("Contraseña requerida.");
    return false;
  }
  if (contrasenaUsuario.length < PASSWORD_MIN_CHARACTERS) {
    alert(
      "el campo Contraseña debe contener un mínimo de " +
        PASSWORD_MIN_CHARACTERS +
        " caracteres."
    );
    return false;
  }
  if (contrasenaRepUsuario.length == 0) {
    alert("Repetir contraseña es requerido.");
    return false;
  }
  
  if (contrasenaUsuario !== contrasenaRepUsuario) {
    alert(
      "Las contraseñas ingresadas deben ser iguales."
    );
    return false;
  }
  if (nombreUsuario.length == 0) {
    alert("Nombre de usuario requerido");
    return false;
  }
  if (nombreUsuario.length < NAME_MIN_CHARACTERS) {
    alert(
      "el campo Nombre de usaurio debe contener un mínimo de " +
        NAME_MIN_CHARACTERS +
        " caracteres."
    );
    return false;
  }
  if (apellidoUsuario.length == 0) {
    alert("Apellido de usuario requerido");
    return false;
  }
  if (apellidoUsuario.length < NAME_MIN_CHARACTERS) {
    alert(
      "el campo Apellido de usaurio debe contener un mínimo de " +
        NAME_MIN_CHARACTERS +
        " caracteres."
    );
    return false;
  }
  return true;
}

const registrarUsuario = (
    emailUsuario,
    contrasenaUsuario,
    contrasenaRepUsuario,
    nombreUsuario,
    apellidoUsuario
  ) => {
    // 1er paso: validar los campos ingresado en busca de errores
    const tieneErrores = validarFormulario(
        emailUsuario,
        contrasenaUsuario,
        contrasenaRepUsuario,
        nombreUsuario,
        apellidoUsuario
    );
    // Remover todo error que pueda existir previamente en la UI
    if (!tieneErrores) {
      return false;
    }
    let unUsuario = new Usuario(emailUsuario, contrasenaUsuario);
    // 4to Añadimos al nuevo paciente a nuestra colección de pacientes registrados
    usuarios.push(unUsuario);
    actualizarListaEnStorage(usuarios);
    return true;
  };
  
  const miForm = document.getElementById("formRegister");
miForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // 1er paso es solicitar los datos al usuario (operador) - los recuperamos de los inputs del formulario
  let emailUsuario = document
    .getElementById("labelEmailUsuario")
    .value.trim()
    .toLowerCase();
  let contrasenaUsuario = document
    .getElementById("labelContraseñaUsuario")
    .value.trim()
    .toLowerCase();
  let contrasenaRepUsuario = document.getElementById("labelContraseñaRepUsuario").value.trim();
  let nombreUsuario = document
    .getElementById("nombreUsuario")
    .value.trim();
  let apellidoUsuario = document
    .getElementById("apellidoUsuario")
    .value.trim();

  //hideMessages();
  // 2do paso crear o registrar al paciente dentro del sistema
  if (registrarUsuario(emailUsuario, contrasenaUsuario, contrasenaRepUsuario, nombreUsuario, apellidoUsuario)) {
    miForm.reset();
    alert("Usuario registrado satisfactoriamente!");
    window.location = "/pages/login.html";
  } else {
    alert("Verifica los inputs ingresados!");
  }
});