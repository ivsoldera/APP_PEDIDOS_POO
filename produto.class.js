export class Produto {
  constructor( codigo, nome, descricao, valorUnitario, dataValidade){
    this.codigo = codigo;
    this.nome = nome;
    this.descricao = descricao;
    this.valorUnitario = valorUnitario;
    this.dataValidade = dataValidade;
  }
}

// localStorage.setItem("objectPedido", JSON.stringify([{ name: 'Andershow'}, { name: 'Gabi' }, {name: 'Igor'}, {name: 'Iuri'}])); //Salvar Objeto no Storage
// JSON.parse(localStorage.getItem("objectPedido")); //Pegar Objeto Storage
