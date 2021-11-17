export class Pedido {
  constructor(numeroPedido, mesa, comida, qtdComida, bebida, qtdBebida){
    this.numeroPedido = numeroPedido;
    this.mesa         = mesa;
    this.comida       = comida;
    this.qtdComida    = qtdComida;
    this.bebida       = bebida;
    this.qtdBebida    = qtdBebida;
  }
  salvarStorage(){
    var objectPedido = JSON.parse(localStorage.getItem("objectPedido"));
    if(objectPedido == null){
      objectPedido = [];
    }
    objectPedido.push({numeroPedido: this.numeroPedido, mesa: this.mesa, comida: this.comida, qtdComida: this.qtdComida, bebida: this.bebida, qtdBebida: this.qtdBebida});
    localStorage.setItem("objectPedido", JSON.stringify(objectPedido));
    alert("Pedido adicionado com sucesso!");
  }
  getStorage(){
    return JSON.parse(localStorage.getItem("objectPedido"));
  } 
  getIndexByCodigo(codigo){
    var objectPedido = JSON.parse(localStorage.getItem("objectPedido"));
    const indexPedido = objectPedido.findIndex(pedido => pedido.numeroPedido == codigo);
    return indexPedido;
  }
  excluirItem(codigo){
    var objectPedido = JSON.parse(localStorage.getItem("objectPedido"));
    const indexPedido = this.getIndexByCodigo(codigo);
    if (indexPedido > -1) {
      objectPedido.splice(indexPedido, 1);
      localStorage.setItem("objectPedido", JSON.stringify(objectPedido));
      alert("Pedido removida com sucesso!");
    } else {
      alert("Pedido não encontrada!");
    }
  }
}