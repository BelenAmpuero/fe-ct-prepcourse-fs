function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  return array.map(el => typeof el === 'string' ? el.toUpperCase() : el);
}

module.exports = convertirStringAMayusculas;
