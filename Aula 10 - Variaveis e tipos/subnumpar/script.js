function changeEvenNumber(lista) {
    // let arrayAlt = [];
    // for (let i = 0; i < lista.length; i++) {
    //     if (lista[i] % 2 == 0 && lista[i] != 0) {
    //         arrayAlt.push(0);
    //     } else {
    //         arrayAlt.push(lista[i]);
    //     }
    // }
    // console.log(arrayAlt);

    const changedArray = [];
    lista.forEach((element) => {
        if (element % 2 == 0 && element != 0) {
            changedArray.push(0);
        } else {
            changedArray.push(element);
        }
    });
    console.log(changedArray);
    const evens = lista.filter((x) => x % 2 == 0);
    const odds = lista.filter((x) => x % 2 != 0);
    console.log([...evens, ...odds])
}
