exports.min = function min(array) {
  return array && array.length ? Math.min(...array) : 0;
}

exports.max = function max(array) {
  return array && array.length ? Math.max(...array) : 0;
}

exports.avg = function avg(array) {
  return array && array.length ? array.reduce((sum, el) => sum + el) / array.length : 0;
}

