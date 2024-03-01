import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';
import CriarContato from './modules/CriarContato';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');

const criarContato = new CriarContato('.form-cadastro-contato');

login.init();
cadastro.init()

criarContato.init();


//import './assets/css/style.css';