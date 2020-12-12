import Dado, {lados} from './dado.js'

export class JuegoDeDados {
  constructor() {
    this.dado1=new Dado();
    this.dado2=new Dado();
    this.dado3=new Dado();
  }

  sumaDados() {
    return this.dado1.valor+this.dado2.valor+this.dado3.valor;
  }
}

export {lados};