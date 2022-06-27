import {Cliente} from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
const cliente2 = new Cliente();

     cliente1.nome = "Jose";
     cliente1.cpf = 11122233304;

     cliente2.nome = "Maria Alice";
     cliente2.cpf = 22211133304;

const contaCorrenteJose = new ContaCorrente();
contaCorrenteJose.agencia = 1001;

contaCorrenteJose.depositar(-100);
contaCorrenteJose.depositar(100);
contaCorrenteJose.depositar(100);

const valorSacado = contaCorrenteJose.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteJose);



