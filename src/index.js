
exports.min = function min (array) {
  return num && num.length ? Math.min(...num) : 0
}

exports.max = function max (array) {
  return num && num.length ? Math.max(...num) : 0
}

exports.avg = function avg (array) {
  return num && num.length ? num.reduce((acc, itm) => acc + itm) /num.length : 0
}
