import {Produto} from './produto.class.js';

export class Bebida extends Produto {
  constructor(codigo, nome, descricao, valorUnitario, dataValidade, litros, tipoBebida) {
    super(codigo, nome, descricao, valorUnitario, dataValidade);
    this.litros = litros;
    this.tipoBebida = tipoBebida;
  }
  salvarStorage(){
    var objectBebida = JSON.parse(localStorage.getItem("objectBebida"));
    if(objectBebida == null){
      objectBebida = [];
    }
    objectBebida.push({codigo: this.codigo, nome: this.nome, descricao: this.descricao, valorUnitario: this.valorUnitario, dataValidade: this.dataValidade, litros: this.litros, tipoBebida: this.tipoBebida});
    localStorage.setItem("objectBebida", JSON.stringify(objectBebida));
    alert("Bebida adicionada com sucesso!");
  }

  getStorage(){
    return JSON.parse(localStorage.getItem("objectBebida"));
  }

  getIndexByCodigo(codigo){
    var objectBebida = JSON.parse(localStorage.getItem("objectBebida"));
    const indexBebida = objectBebida.findIndex(bebida => bebida.codigo == codigo);
    return indexBebida;
  }

  excluirItem(codigo){
    var objectBebida = JSON.parse(localStorage.getItem("objectBebida"));
    const indexBebida = this.getIndexByCodigo(codigo);
    if (indexBebida > -1) {
      objectBebida.splice(indexBebida, 1);
      localStorage.setItem("objectBebida", JSON.stringify(objectBebida));
      alert("Bebida removida com sucesso!");
    } else {
      alert("Bebida não encontrada!");
    }
  }
}