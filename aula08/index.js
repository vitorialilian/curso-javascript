const nome = 'Vitória Lilian';
const sobrenome = 'dos Santos Araújo';
const idade = 27;
const peso = 64;
const alturaEmMetros = 1.55;
let indiceMassaCorporal;
let anoDeNascimento;

indiceMassaCorporal = peso / (alturaEmMetros * alturaEmMetros);
anoDeNascimento = 2023 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
/*console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg '); // Concatenar usando o +, e espaços dentros das strings para dar espaço.*/

console.log(`tem ${alturaEmMetros} de altura e seu IMC é de ${indiceMassaCorporal}`); // Template Strings

console.log(`${nome} nasceu em ${anoDeNascimento}.`); /* console.log(nome, 'nasceu em', anoDeNascimento)// jeito "normal" "básico" */