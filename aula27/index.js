// (Condição) ? 'Valor verdadeiro' : 'Valor para falso'

const pontuacaoUsuario = 1250;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

/* Versão mais extensa
if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal');
} */ 

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'preta';

console.log(nivelUsuario, corPadrao);