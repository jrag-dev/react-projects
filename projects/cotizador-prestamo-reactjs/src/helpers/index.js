
export const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })

    return formatter.format(valor)
}


export const calcularTotalPagar = (cantidad, plazo) => {
    let total

    // Mientras mayor es la cantidad menor es el interes
    if (cantidad < 5000) {
        total = cantidad * 1.5
    } else if (cantidad >= 5000 && cantidad < 10000) {
        total = cantidad * 1.4
    }  else if (cantidad >= 10000 && cantidad < 15000) {
        total = cantidad * 1.3
    } else {
        total = cantidad * 1.2
    }

    // Mientras mas meses para pagar mayor sera el interes
    if (plazo === 3) {
        total *= 1.05
    } else if (plazo === 6) {
        total *= 1.10
    } else if (plazo === 9) {
        total *= 1.15
    } else if (plazo === 12) {
        total *= 1.20
    } else if (plazo === 24) {
        total *= 1.25
    } else {
        total *= 1.30
    }

    return total
}


export const calcularMensualidades = (total, meses) => {
    return total / meses
}