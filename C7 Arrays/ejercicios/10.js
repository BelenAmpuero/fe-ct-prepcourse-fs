function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  return array.find(el => typeof el === 'string' && el.length >= 5);
}

module.exports = obtenerPrimerStringLargo;
