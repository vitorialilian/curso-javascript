// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
// retorne true se a imagem estiver no modo paisagem.

// function ePaisagem(largura, altura) {
//     if (largura > altura) {
//         return 'true';
//     } else {
//         return 'false';
//     }
// }
// console.log(ePaisagem(15, 5));

function ePaisagem(largura, altura) {
    return largura > altura;
}

console.log(ePaisagem(1080, 566));

// Arrow function

const ePaisagem = (largura, altura) => largura > altura; 

console.log(ePaisagem(1080, 566));