const getUsuario = (usuarios = [], identificador = "") => {
  return usuarios.find((unUsuario) => unUsuario.email === identificador);
};

const isExisteUsuario = (usuarios = [], identificador = "") => {
  return usuarios.some(
    (unUsuario) =>
      unUsuario.email.toLowerCase() === identificador.toLowerCase()
  );
};
