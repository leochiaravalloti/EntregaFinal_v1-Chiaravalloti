let botonSub = document.getElementById("btnRegistrar");
let alertaMail = document.getElementById("emailHelp");
let alertaContra = document.getElementById("contraHelp");

let verificarForm = (email , contrasena="") => {
    let tm = true;
    let tc = true;
    if(email == 0){
        tm = false;
        return alertaMail.innerText = "Casilla de direccion mail no puede estar vacía." ;
    }
    if(!email.includes("@")){
        tm = false;
        return alertaMail.innerText = "La dirección email ingresada no es válida" ;
    }
    if(tm == true){
        alertaMail.innerText = "" ;
    }
    if(contrasena == 0){
        tc = false;
        return alertaContra.innerText = "Contraseña requerida." ;
    }
    if(8 >= contrasena.length ){
        tc = false;
        return alertaContra.innerText = "La contraseña es inválida." ;
    }   
    if(tc == true){
        alertaContra.innerText = "" ;
    } 
    return true;
}

botonSub.onclick = (e) => {
    e.preventDefault()
    let emailUsuario = document.getElementById("labelEmailUsuario").value;
    let contrasena = document.getElementById("labelContraseñaUsuario").value;
    if(verificarForm(emailUsuario,contrasena)!=true){
        return false;
    }
    const profesor = getUsuario(profesoresMock, emailUsuario);
    if(profesor != undefined){
        if(profesor.contrasena === contrasena){
            alert("Bienvenido profe " + profesor.nombre)
            sessionStorage.setItem("usuarioOnline", JSON.stringify(profesor));
            return window.location = "../pages/index-profes.html"
        } else{
            return alertaContra.innerText = "La contraseña es incorrecta.";
        }
    } 
    const cliente = getUsuario(clientesMock, emailUsuario);
    if(cliente != undefined){
        if(cliente.contrasena === contrasena){
            sessionStorage.setItem("usuarioOnline", JSON.stringify(emailUsuario));
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Has iniciado sesión correctamente",
                showConfirmButton: false,
                timer: 2000
              });
            return setTimeout(()=> {window.location = "./index-clientes.html"}, 2000)
             
        } else{
            return alertaContra.innerText = "La contraseña es incorrecta.";
        }
    } else{
        return alertaMail.innerText = "No existe ningun usuario que se corresponda con la direccion de mail ingresada." 
    }
    
}