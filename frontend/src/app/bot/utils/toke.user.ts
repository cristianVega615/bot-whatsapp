interface itemUserJson {
  user: string;
  expiracion: number;
}

/**
 *
 * @param clave "user"
 * @param valor UUID creado
 * @param time El tiempo en minutos
 */
const guardarValor_Exp = (clave: string, valor: string, time: number) => {
  const fechaExpiración = new Date().getTime() + time * 60 * 1000;
  const item: itemUserJson = {
    user: valor,
    expiracion: fechaExpiración,
  };

  localStorage.setItem(clave, JSON.stringify(item));
};

const obtenerValor = (clave: string) => {
  let item: itemUserJson;
  const itemLocalStorage = localStorage.getItem(clave);

  if (itemLocalStorage) {
    item = JSON.parse(itemLocalStorage);
  } else {
    return null; // Si no existe el item, retorna null
  }
  const ahora = new Date().getTime();
  if (ahora > item.expiracion) {
    localStorage.removeItem(clave); // Si ha expirado, elimina el item del localStorage
    return null;
  }
  return item.user; // Retorna el valor almacenado
};

export { guardarValor_Exp, obtenerValor };
