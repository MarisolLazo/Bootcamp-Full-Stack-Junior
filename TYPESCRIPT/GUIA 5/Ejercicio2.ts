class Calculadora {
  sumar(a: number, b: number) {
    return a + b;
  }

  restar(a: number, b: number) {
    return a - b;
  }

  multiplicar(a: number, b: number) {
    return a * b;
  }

  dividir(a: number, b: number) {
    if (b === 0) return Infinity;
    return a / b;
  }

  potencia(base: number, exponente: number) {
    return Math.pow(base, exponente);
  }

  factorial(n: number) {
    if (n < 0) return -1;
    let res = 1;
    for (let i = 1; i <= n; i++) {
      res *= i;
    }
    return res;
  }
}

let calc = new Calculadora();
console.log(calc.sumar(5, 3)); // 8
console.log(calc.factorial(5)); // 120
