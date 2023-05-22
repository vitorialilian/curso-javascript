const numero = 10;

// Se (numero >= 0 && numero <= 5) ocorrer, faça isso {código}
// Se não faça isso {o código}

// O javascript executa o que for verdadeiro primeiramente e mais nada, por isso se tiver algum código no meio que seja verdadeiro pode atrapalhar o restante

// Uma corrente que precisa ser checada até a engine do javascript encontrar uma verdadeira

if (numero <= 10) {
    console.log('O número é menor ou igual a 10.');
}

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
    console.log('O número está entre 6 e 8');
}
 else if (numero >= 9 && numero <= 11) {
    console.log('O número está entre 9 e 11.');
} else {
    console.log('O número não está entre 0 e 11.');
}

console.log('...Aqui é o resto do código');

