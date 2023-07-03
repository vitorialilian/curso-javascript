// import { nome as nome2, sobrenome as sobrenome2, idade1, soma } from './modulo1';
// import { fruta, resto, Pessoa as People } from './modulo1';

// const nome = 'João';

// const p1 = new People('Vitória', 'Lilian');

// console.log(nome, nome2, sobrenome2, idade1);

// console.log(soma(5546, 1506));

// console.log(fruta);

// console.log(resto(10, 2));

// console.log(p1);

// import * as meuModulo from './modulo1'; // para importar tudo

// console.log(meuModulo);

// import menos from './modulo1';

// console.log(menos(5, 3));

// import materialEscolar, { papelaria2, papelaria3 } from './modulo1';

// console.log(materialEscolar, papelaria2, papelaria3);

// import soma from './modulo1';

// console.log(soma(85691, 36412));

import Pessoa, {nome, sobrenome} from './modulo1';

const p1 = new Pessoa(nome, sobrenome);
console.log(p1);