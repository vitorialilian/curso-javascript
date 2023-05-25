// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

/*
const tresHoras = 60 * 60 * 3 * 1000; - milésimos de segundos 60 segundos * 60 segundos * 3 horas * 1000
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras - umDia); // 01/01/1970 Timestamp unix ou época unix
console.log(data.toString());
*/

/*
const data = new Date(2019, 3, 20, 15, 14, 27); // ano, mês, dia, hora, minutos, segundos, milesimos de segundos
console.log(data.toString());
*/

/*
const data = new Date('2019-04-30T20:15:59.100'); // também pode usar dessa forma colocando data e hora em uma string, com T ou espaço para separar data de hora
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundo', data.getSeconds());
console.log('Milésimo de Segundo', data.getMilliseconds());
console.log('Dia Semana', data.getDay());

console.log(data.toString());

console.log(Date.now()); */

/* const data2 = new Date(1685047714232);
console.log(data2.toString()); */

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    // console.log(data);
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() +1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const sec = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);

