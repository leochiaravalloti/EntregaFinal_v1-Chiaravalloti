let alertaPeso = document.getElementById("pesoHelp");
let alertaAltura = document.getElementById("alturaHelp");
let botonRecomendación = document.getElementById("buttonRecomendacion")



// RECOMENDACIÓN DE PLAN DE TRABAJO (opcional)
let validarDatosIMC = (
    pesoUsuario = "",
    alturaUsuario = "",
  ) => {
    let pc = true;
    let ac = true;
    if (pesoUsuario == 0) {
      pc = false;
      alertaPeso.innerText = "El valor peso es requerido." ;
      return false;
    }
    if (isNaN(pesoUsuario) != false) {
      pc = false;
      alertaPeso.innerText ="El valor ingresado debe ser un número entero.";
      return false;
    }
    if (pesoUsuario < 10 || 400 < pesoUsuario) {
      pc = false;
      alertaPeso.innerText = "Ingrese un valor válido";
      return false;
    }
    if(pc == true){
      alertaPeso.innerText = "" ;
    } 
    if (alturaUsuario.length == 0) {
        ac = false;
        alertaAltura.innerText ="El altura del usuario es requerido.";
        return false;
      }
    if (isNaN(alturaUsuario) != false) {
        ac = false;
        alertaAltura.innerText ="El valor ingresado debe ser un número entero.";
        return false;
    }
    if (alturaUsuario < 100 || 250 < alturaUsuario) {
        ac = false;
        alertaAltura.innerText = "Ingrese una altura válida.";
        return false;
    }
    if(ac == true){
      alertaAltura.innerText = "" ;
    } 
    return true;
  };

function imcCalculo (peso, altura){
    const imc = peso / ((altura/100)*(altura/100))
    let eval = 0;
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
  let recomendacionText = document.getElementById("recomendacionText")
    switch(index){
        case 0:
            recomendacionText.innerText = "Este es el resultado de tu evaluacion: Tu indice de masa corporal indica que la relacion entre tu peso y estatura es apropiada, por esto te recomendamos el plan de entrenamiento básico.";
            break  
        case 1:
            recomendacionText.innerText = "Este es el resultado de tu evaluacion: Te recomendamos que inicies el plan de entrentamiento PLATA, cuyo plan de trabajo y alimentacion favorece que ganes masa muscular y aumentes de peso.";
            break
        case 2:
            recomendacionText.innerText ="Este es el resultado de tu evaluacion: Te recomendamos que inicies el plan de entrentamiento ORO, cuyo plan de trabajo y alimentacion favorece la perdida de peso.";
            break
    }
}

botonRecomendación.onclick = (e) => {
  e.preventDefault()
  let alturaUsuario = document.getElementById("alturaUsuario").value
  let pesoUsuario = document.getElementById("pesoUsuario").value
    console.log(alturaUsuario);
    let validarPA = validarDatosIMC(pesoUsuario,alturaUsuario);
    if(validarPA != true){
      return false;
    }
    return evaluacionResult(imcCalculo(pesoUsuario,alturaUsuario))     
}

// VALIDACION DE FORMULARIO Y REGISTRO
let validarFormulario = (
  emailUsuario = "",
  contrasenaUsuario = "",
  contrasenaRepUsuario = "",
  nombreUsuario = "",
  apellidoUsuario = "",
  paqueteElegido = ""
) => {
  let ec = true; let cc = true; let crc = true; let nc = true; let ac = true; let pc = true;
  let alertaEmail = document.getElementById("emailHelp");
  let alertaContra = document.getElementById("passwordHelp");
  let alertaContraRe = document.getElementById("rePasswordHelp");
  let alertaNombre = document.getElementById("nombreHelp");
  let alertaApellido = document.getElementById("apellidoHelp");
  let alertaPaquete = document.getElementById("paqueteHelp");

  if (emailUsuario == 0) {
    ec = false;
    alertaEmail.innerText = "La dirección de email es requerida." ;
    return false;
  }
  if (!emailUsuario.includes("@")) {
    ec = false;
    alertaEmail.innerText ="Por favor, ingrese una dirección válida.";
    return false;
  }
  if (isExisteUsuario(clientesMock, emailUsuario) == true){
    ec = false;
    alertaEmail.innerText ="Ya existe un usuario con la direccion de correo ingresada.";
    return false;
  }
  if(ec == true){
    alertaEmail.innerText = "" ;
  } 
  if (contrasenaUsuario.length == 0) {
      cc = false;
      alertaContra.innerText ="Contraseña requerida.";
      return false;
    }
  if (contrasenaUsuario.length < 8) {
      cc = false;
      alertaContra.innerText ="La contraseña debe tener al menos 8 carácteres.";
      return false;
  }
  if(cc == true){
    alertaContra.innerText = "" ;
  }
  if (contrasenaRepUsuario.length == 0) {
    crc = false;
    alertaContraRe.innerText ="Por favor, repita la constraseña.";
    return false;
  }
  if (contrasenaUsuario != contrasenaRepUsuario) {
      crc = false;
      alertaContraRe.innerText ="Las contraseñas ingresadas deben ser iguales.";
      return false;
  }
  if(crc == true){
    alertaContraRe.innerText = "" ;
  }
  if (nombreUsuario.length == 0) {
    nc = false;
    alertaNombre.innerText ="Nombre requerido.";
    return false;
  }
  if (nombreUsuario.length < 3) {
      nc = false;
      alertaNombre.innerText ="Ingrese un nombre válido.";
      return false;
  }
  if(nc == true){
    alertaNombre.innerText = "" ;
  }
  if (apellidoUsuario.length == 0) {
    ac = false;
    alertaApellido.innerText ="Apellido requerido.";
    return false;
  }
  if (apellidoUsuario.length < 5) {
      ac = false;
      alertaApellido.innerText ="Ingrese un apellido válido.";
      return false;
  }
  if(ac == true){
    alertaApellido.innerText = "" ;
  }
  if (paqueteElegido == 0) {
    pc = false;
    alertaPaquete.innerText ="Por favor, seleccione un paquete.";
    return false;
  }
  if(pc == true){
    alertaPaquete.innerText = "" ;
  }
  return true;
};


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
  
  const registrarseBoton = document.getElementById("btnRegistrar");
  registrarseBoton.onclick= (e) => {
  e.preventDefault();
  let emailUsuario = document
    .getElementById("labelEmailUsuario")
    .value.trim()
    .toLowerCase();
  let contrasenaUsuario = document
    .getElementById("labelContraseñaUsuario")
    .value.trim()
    .toLowerCase();
  let contrasenaRepUsuario = document
    .getElementById("labelContraseñaRepUsuario")
    .value.trim();
  let nombreUsuario = document
    .getElementById("nombreUsuario")
    .value.trim();
  let apellidoUsuario = document
    .getElementById("apellidoUsuario")
    .value.trim();
  let paqueteElegido = document.getElementById("paqueteElegido").value

  if (validarFormulario(emailUsuario, contrasenaUsuario, contrasenaRepUsuario, nombreUsuario, apellidoUsuario, paqueteElegido) != true) {
    return false;
  } 
  let unUsuario = new Cliente(emailUsuario, contrasenaUsuario, nombreUsuario, apellidoUsuario, paqueteElegido);
  clientesMock.push(unUsuario);
  return window.location = "../pages/index-clientes.html";
};