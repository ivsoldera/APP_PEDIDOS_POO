import {Produto} from './produto.class.js';

export class Comida extends Produto {
  constructor(codigo, nome, descricao, valorUnitario, dataValidade, peso, tipoComida){
    super(codigo, nome, descricao, valorUnitario, dataValidade);
    this.peso = peso;
    this.tipoComida = tipoComida;
  }
  salvarStorage(){
    var objectComida = JSON.parse(localStorage.getItem("objectComida"));
    if(objectComida == null){
      objectComida = [];
    }
    objectComida.push({codigo: this.codigo, nome: this.nome, descricao: this.descricao, valorUnitario: this.valorUnitario, dataValidade: this.dataValidade, peso: this.peso, tipoComida: this.tipoComida});
    localStorage.setItem("objectComida", JSON.stringify(objectComida));
    alert("Comida adicionada com sucesso!");
  }
  getStorage(){
    return JSON.parse(localStorage.getItem("objectComida"));
  }

  getIndexByCodigo(codigo){
    var objectComida = JSON.parse(localStorage.getItem("objectComida"));
    const indexComida = objectComida.findIndex(comida => comida.codigo == codigo);
    return indexComida;
  }

  excluirItem(codigo){
    var objectComida = JSON.parse(localStorage.getItem("objectComida"));
    const indexComida = this.getIndexByCodigo(codigo);
    if (indexComida > -1) {
      objectComida.splice(indexComida, 1);
      localStorage.setItem("objectComida", JSON.stringify(objectComida));
      alert("Comida removida com sucesso!");
    } else {
      alert("Comida não encontrada!");
    }
  }

}
