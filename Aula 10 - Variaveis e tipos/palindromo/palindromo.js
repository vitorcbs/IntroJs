function palindromo(frase){
    if (!frase) return;
    
    if (frase.split('').reverse().join("") === frase) {
        alert('Isto é um palindromo')
    } else {
        alert('Não é um palindromo')
    }
}
