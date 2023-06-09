// function recursiva(max) {
//     if (max >= 10) return;
//     max++;
//     console.log(max); // 0 não é >= a 10 então ele não é exibido, só o incrementar de 1 á 10
//     recursiva(max);
// }

// recursiva(0);

function recursiva(max) {
    console.log(max); // aqui o console vindo antes, exibi o 0 também na análise de >= a 10
    if (max >= 11289) return;//a engine só vai até esse, acima da um erro size exceeded - 09/06/23
    max++;
    recursiva(max);
}

recursiva(0);
