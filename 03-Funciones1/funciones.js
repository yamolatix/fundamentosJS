function crearCalculadora() {
    let total = 0
    let calculadora = {
        valor() { return total },
        sumar(num) { return total += num },
        restar(num) { return total -= num },
        reset() { return total = 0 }
    }
    return calculadora;
};

