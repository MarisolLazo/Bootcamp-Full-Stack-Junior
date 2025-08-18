var Calculadora = /** @class */ (function () {
  function Calculadora() {}
  Calculadora.prototype.sumar = function (a, b) {
    return a + b;
  };
  Calculadora.prototype.restar = function (a, b) {
    return a - b;
  };
  Calculadora.prototype.multiplicar = function (a, b) {
    return a * b;
  };
  Calculadora.prototype.dividir = function (a, b) {
    if (b === 0) return Infinity;
    return a / b;
  };
  Calculadora.prototype.potencia = function (base, exponente) {
    return Math.pow(base, exponente);
  };
  Calculadora.prototype.factorial = function (n) {
    if (n < 0) return -1;
    var res = 1;
    for (var i = 1; i <= n; i++) {
      res *= i;
    }
    return res;
  };
  return Calculadora;
}());

var calc = new Calculadora();
console.log(calc.sumar(5, 3)); // 8
console.log(calc.factorial(5)); // 120
