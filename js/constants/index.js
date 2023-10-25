const LOCAL_STORAGE_NAME = "usuarios";

const actualizarListaEnStorage = (list = []) => {
  localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(list));
};

const recuperarListaEnStorage = () => {
  const recuperados = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME));
  if (recuperados) {
    return recuperados.map((e) => {
      return new Usuario(e.emailUsuario, e.contrasenaUsuario);
    });
  }
  return [];
};

let usuarios = recuperarListaEnStorage();
//console.table(usuarios);

const isExisteUsuario = (usuarios = [], identificador = "") => {
  return usuarios.some(
    (unUsuario) =>
      unUsuario.nombre.toLowerCase() === identificador.toLowerCase()
  );
};

const getUsuario = (usuarios = [], identificador = "") => {
  return usuarios.find((unUsuario) => unUsuario.nombre === identificador);
};

// Gestión de sesión de usuario
const USER_LOGED_KEY = "usuarioLogueda";
const registrarInicio = (unUsuario) => {
  sessionStorage.setItem(USER_LOGED_KEY, JSON.stringify(unUsuario));
};

const recuperarUsuarioLogueado = () => {
  return JSON.parse(sessionStorage.getItem(USER_LOGED_KEY)) || false;
};

const USER_LOGED = recuperarUsuarioLogueado();

/**
 *
 * @returns Retorna true en caso de haber iniciado una sesión, false en caso contrario.
 */
const isLogedUser = () => {
  return !!USER_LOGED;
};

/**
 * @abstract Evalua si el usuario actual se identificó ante el sistema a través del Login. En caso de no estar loguedo lo redireccionará a la página de ingresar
 */
const validateSession = () => {
  if (!isLogedUser()) {
    alert("Usted no ha iniciado sesion");
    window.location = "/pages/ingresar.html";
  }
};
