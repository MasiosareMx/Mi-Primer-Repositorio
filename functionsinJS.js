const sumar = (a, b) => {
return a + b;
}

const restar = (a, b) =>  {
return a - b
}

const multiplicar = (a, b) => {
return a * b
const resultadoDeMultiplicar = (a, b)
}

const dividir = (a, b) => {
return a / b
}

const porcentaje = (a, b) => {
const resultadoDeMultiplicar = multiplicar(a, b)
const resultadoDeDividir = dividir(resultadoDeMultiplicar, 100)
    return resultadoDeDividir
}

console.log(porcentaje(20, 100))

