import {Gerente} from "./Gerente.js"
import {Diretor} from "./Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"
import { Cliente } from "./Cliente.js";


const diretor = new Diretor("Rodrigo", 10000, 123456789);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo", 5000, 222333444);
const cliente = new Cliente("Carlos", 123456777, "123");

const estaLogado = SistemaAutenticacao.login(cliente, "133");

console.log(estaLogado);

//teste