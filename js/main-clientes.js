const emailUsuario = JSON.parse(sessionStorage.getItem("usuarioOnline"))
const usuario = getUsuario(clientesMock,emailUsuario)

const msjBienvenida = document.getElementById("mensjBienvenida");
msjBienvenida.innerText = "Bienvenid@ " + usuario.nombre + ". Esta es la plataforma de Agon Training, aquí encontraras tu información personal y tus planes de entrenamiento." ;

const dataNombre = document.getElementById("dataNombre");
dataNombre.innerText = "Nombre: " + usuario.nombre;
const dataApellido = document.getElementById("dataApellido");
dataApellido.innerText = "Apellido: " + usuario.apellido;
const dataServicio = document.getElementById("dataServicio");
let textServicio = "";
usuario.plan == 1 &&  (textServicio = "Servicio: PAQUETE BÁSICO. Te recordamos que incluye 10 sesiones de entrenamiento personalizadas de 60 minutos cada una, un plan de entrenamiento personalizado elaborado por un entrenador certificado y evaluación física inicial.")
usuario.plan == 2 &&  (textServicio = "Servicio: PAQUETE PLATA. Te recordamos que incluye 20 sesiones de entrenamiento personalizadas de 60 minutos cada una, un plan de entrenamiento personalizado elaborado por un entrenador certificado, evaluación física inicial y asesoría nutricional personalizada.")
usuario.plan == 3 &&  (textServicio = "Servicio: PAQUETE ORO. Te recordamos que incluye 30 sesiones de entrenamiento personalizadas de 60 minutos cada una, un plan de entrenamiento personalizado elaborado por un entrenador certificado, evaluación física inicial, Acceso a un grupo de apoyo en línea y asesoría nutricional personalizada.")

dataServicio.innerText = textServicio;



let textDateRut = document.getElementById("rutinAFecha");
let textEx1 = document.getElementById("ex1");
let textEx2 = document.getElementById("ex2");
let textEx3 = document.getElementById("ex3");
let textEx4 = document.getElementById("ex4");
let textEx5 = document.getElementById("ex5");
let textEx6 = document.getElementById("ex6");

const rutinasUsuario = findObjectByEmail(rutinasUs , emailUsuario)
i = rutinasUsuario.rutinas.length - 1;

let mostrarRutinas = ()=>{
    const rutinasUsuario = findObjectByEmail(rutinasUs , emailUsuario)
    if(rutinasUsuario != undefined){
        j= rutinasUsuario.rutinas[i].ejercicios.length;
        let textDateAux = rutinasUsuario.rutinas[i].id
        textDateRut.innerText = "Rutina de " + textDateAux;
        let m = 0
        if(m<j){
            textEx1.innerText = rutinasUsuario.rutinas[i].ejercicios[m];
            textEx1.className = "rutinas__rut__list__ex1";
            m++;
            if(m<j){
                textEx2.innerText = rutinasUsuario.rutinas[i].ejercicios[m];
                textEx2.className = "rutinas__rut__list__ex2";
                m++;
                if(m<j){
                    textEx3.innerText = rutinasUsuario.rutinas[i].ejercicios[m];
                    textEx3.className = "rutinas__rut__list__ex3";
                    m++;
                    if(m<j){
                        textEx4.innerText = rutinasUsuario.rutinas[i].ejercicios[m];
                        textEx4.className = "rutinas__rut__list__ex4";
                        m++;
                        if(m<j){
                            textEx5.innerText = rutinasUsuario.rutinas[i].ejercicios[m];
                            textEx5.className = "rutinas__rut__list__ex5";
                            m++;
                            if(m<j){
                                textEx6.innerText = rutinasUsuario.rutinas[i].ejercicios[m];
                                textEx6.className = "rutinas__rut__list__ex6";
                                m++;
                            } else { return false }
                        } else { return false }
                    } else { return false }
                } else { return false }               
            }  else { return false }          
        }  else { return false }      
    } else{
        return textDateRut.innerText = "No hay rutinas disponibles en este momento. En los próximos días, tu profesor actualizará la misma."
    }
}

mostrarRutinas();

const buttonAnterior = document.getElementById("buttonAnterior");
buttonAnterior.onclick = (e)=>{
    e.preventDefault();
    if(i>0){
        i = i-1;
        mostrarRutinas();
    }
}
const buttonSiguiente = document.getElementById("buttonSiguiente");
buttonSiguiente.onclick = (e)=>{
    e.preventDefault();
    if((rutinasUsuario.rutinas.length - 1)>i){
        i = i+1;
        mostrarRutinas();
    }
}
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0c3a1e9f4dmsh4d35413f6236ed4p101928jsnf059694f8bf5',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

const temperatura = document.getElementById("temperatura");
const humedad = document.getElementById("humedad");
const lluvia = document.getElementById("lluvia");
const viento = document.getElementById("viento");

fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13', options)
    .then( (resp) => resp.json() )
    .then( (response) => {
        setTimeout(()=> {
            temperatura.innerText = response.current.feelslike_c + " °C";
            lluvia.innerText = "Precipitaciones: " + response.current.precip_in + " %";
            viento.innerText = "Viento: "+ response.current.gust_kph + " km/h";
            humedad.innerText = "Humedad: " + response.current.humidity + " %";}, 2000)
    })

