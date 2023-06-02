// try {
//     // É executada quando não há erros
// } catch (e) {
//     // É executada quando há erros
// } finally {
//     // Sempre é executada
// }

// try {
//     // console.log(a);
//     console.log('Abrir um arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo');

//         try {
//             console.log(b);
//         } catch {
//             console.log('Deu erro');
//         } finally {
//             console.log('Também sou finally');
//         }

// } catch (e) {
//     console.log('Tratando o erro');
// } finally {
//     console.log('FINALLY: Eu sempre sou executado');
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.')
    } 

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
    console.log(data);
} catch(e) {
    // Tratar erro
} finally {
    console.log('Tenha um Bom dia.');
}

