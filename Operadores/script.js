function desafio (x, y) {
    if (x == y) {
        if (x+y > 10) {
            if (x+y < 20) {
                console.log(`Os numeros ${x} e ${y} são iguais. Sua soma é ${x+y}, que  é maior que 10 e menor que 20`)
            } else if (x+y >= 20) {
                console.log(`Os numeros ${x} e ${y} são iguais. Sua soma é ${x+y}, que  é maior que 10 e maior que 20`)
            }
        } else if (x+y <= 10) {
                console.log(`Os numeros ${x} e ${y} são iguais. Sua soma é ${x+y}, que  é menor que 10 e menor que 20`)
            }
    } else if (x != y) {
        if (x+y > 10) {
            if (x+y < 20) {
                console.log(`Os numeros ${x} e ${y} são diferentes. Sua soma é ${x+y}, que  é maior que 10 e menor que 20`)
            } else if (x+y >= 20) {
                console.log(`Os numeros ${x} e ${y} são diferentes. Sua soma é ${x+y}, que  é maior que 10 e maior que 20`)
            }
        } else if (x+y <= 10) {
            console.log(`Os numeros ${x} e ${y} são diferentes. Sua soma é ${x+y}, que  é menor que 10 e menor que 20`)
        }
    }
}

