const getProfesor = (profesores = [], identificador = "") => {
  return profesores.find((unUsuario) => unUsuario.email === identificador);
};

const getClientes = (clientes = [], identificador = "") => {
  return clientes.find((unUsuario) => unUsuario.email === identificador);
};
