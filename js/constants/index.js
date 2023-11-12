const getUsuario = (usuarios = [], identificador = "") => {
  return usuarios.find((unUsuario) => unUsuario.email === identificador);
};

const isExisteUsuario = (usuarios = [], identificador = "") => {
  return usuarios.some(
    (unUsuario) =>
      unUsuario.email.toLowerCase() === identificador.toLowerCase()
  );
};

function findObjectByEmail(array= [], email = "") {
  return array.find(function (object) {
    return object.email === email;
  });
}
