import {Comida} from './comida.class.js';
import {Bebida} from './bebida.class.js';
import {Pedido} from './pedido.class.js';

var divBebida = document.getElementById('listaBebida');
var divPedido = document.getElementById('listaPedido');
var divComida = document.getElementById('listaComida');

var btnAdcComida = document.getElementById('btnAdcComida');
var btnAdcBebida = document.getElementById('btnAdcBebida');
var btnAdcPedido = document.getElementById('btnAdcPedido');
var btnLstBebida = document.getElementById('btnLstBebida');
var btnLstComida = document.getElementById('btnLstComida');
var btnLstPedido = document.getElementById('btnLstPedido');
var btnExcComida = document.getElementById('btnExcComida');
var btnExcBebida = document.getElementById('btnExcBebida');
var btnExcPedido = document.getElementById('btnExcPedido');
listarComida();
listarBebida();
listarPedido();

btnAdcComida.addEventListener("click", function () {
  adicionarComida();
  listarComida();
});
btnAdcBebida.addEventListener("click", function () {
  adicionarBebida();
  listarBebida();
});
btnAdcPedido.addEventListener("click", function () {
  adicionarPedido();
  listarPedido();
});
btnLstBebida.addEventListener("click", function (){
  listarBebida();
});
btnLstComida.addEventListener("click", function (){
  listarComida();
});
btnLstPedido.addEventListener("click", function (){
  listarPedido();
});
btnExcComida.addEventListener("click", function (){
  excluirComida();
  listarComida();
});
btnExcBebida.addEventListener("click", function (){
  excluirBebida();
  listarBebida();
});
btnExcPedido.addEventListener("click", function (){
  excluirPedido();
  listarPedido();
});


function adicionarComida(){
  let codigoComida        = document.getElementById('codigoComida').value;
  let nomeComida          = document.getElementById('nomeComida').value;
  let descricaoComida     = document.getElementById('descricaoComida').value;
  let valorUnitarioComida = document.getElementById('valorUnitarioComida').value;
  let dataValidadeComida  = document.getElementById('dataValidadeComida').value;
  let pesoComida          = document.getElementById('pesoComida').value;
  let tipoComida          = document.getElementById('tipoComida').value;
  if(codigoComida != '' && nomeComida != '' && descricaoComida != '' && valorUnitarioComida != '' && dataValidadeComida != '' && pesoComida != '' && tipoComida != ''){
    const comida = new Comida(codigoComida, nomeComida, descricaoComida, valorUnitarioComida, dataValidadeComida, pesoComida, tipoComida);
    comida.salvarStorage();
  }
  else{
    alert("Preencha todos os campos")
  }
} 

function adicionarBebida(){
  let codigoBebida        = document.getElementById('codigoBebida').value;
  let nomeBebida          = document.getElementById('nomeBebida').value;
  let descricaoBebida     = document.getElementById('descricaoBebida').value;
  let valorUnitarioBebida = document.getElementById('valorUnitarioBebida').value;
  let dataValidadeBebida  = document.getElementById('dataValidadeBebida').value;
  let litrosBebida        = document.getElementById('litrosBebida').value;
  let tipoBebida          = document.getElementById('tipoBebida').value;
  if(codigoBebida != '' && nomeBebida != '' && descricaoBebida != '' && valorUnitarioBebida != '' && dataValidadeBebida != '' && litrosBebida != '' && tipoBebida != ''){
    const bebida = new Bebida(codigoBebida, nomeBebida, descricaoBebida, valorUnitarioBebida, dataValidadeBebida, litrosBebida, tipoBebida);
    bebida.salvarStorage();
  }
  else{
    alert("Preencha todos os campos")
  }
} 

function adicionarPedido(){
  let numeroPedido    = document.getElementById('numeroPedido').value;
  let mesaPedido      = document.getElementById('mesaPedido').value;
  let comidaPedido    = document.getElementById('comidaPedido').value;
  let qtdComidaPedido = document.getElementById('qtdComidaPedido').value;
  let bebidaPedido    = document.getElementById('bebidaPedido').value;
  let qtdBebidaPedido = document.getElementById('qtdBebidaPedido').value;
  if(numeroPedido != '' && mesaPedido != '' && comidaPedido != '' && qtdComidaPedido != '' && bebidaPedido != '' && qtdBebidaPedido != ''){
    const pedido = new Pedido(numeroPedido, mesaPedido, comidaPedido, qtdComidaPedido, bebidaPedido, qtdBebidaPedido);
    pedido.salvarStorage();
  }
  else{
    alert("Preencha todos os campos")
  }
} 

function listarComida(){
  const cabecalho = ['Código', 'Nome', 'Descrição', 'Valor Unitário', 'Validade', 'Peso', 'Tipo'];
  const comida = new Comida();
  criarLista(cabecalho,comida.getStorage(), divComida);
}
 
function listarBebida(){
  const cabecalho = ['Código', 'Nome', 'Descrição', 'Valor Unitário', 'Validade', 'Litros', 'Tipo'];
  const bebida = new Bebida(); 
  criarLista( cabecalho, bebida.getStorage(), divBebida);
}

function listarPedido(){
  const cabecalho = ['Número', 'Mesa', 'Cód Comida', 'Qtd Comida', 'Cód Bebida', 'Qtd Bebida', 'Total Pedido'];
  const pedido = new Pedido();
  const bebida = new Bebida();
  const comida = new Comida();
  var objectPedido = pedido.getStorage()
  for(let i of objectPedido){
    var total = 0;
    var indexBebida = bebida.getIndexByCodigo(i.bebida);
    if( indexBebida >= 0){
      var objectBebida = bebida.getStorage();
      i.bebida = objectBebida[indexBebida].nome;
      total += i.qtdBebida * objectBebida[indexBebida].valorUnitario;
    }

    var indexComida = comida.getIndexByCodigo(i.comida);
    if( indexComida >= 0){
      var objectComida = comida.getStorage(); 
      i.comida = objectComida[indexComida].nome;
      total += i.qtdComida * objectComida[indexComida].valorUnitario;
    }
    Object.assign(i, { valorTotal: total });
  }
  criarLista(cabecalho, objectPedido, divPedido);
}

function criarLista(cabecalho, data, elem){
  var html = "<table>";
  html += '<tr>';
  for(let i of cabecalho){
    html += `<th>${i}</th>`;
  }
  html += '</tr>';
  for(let i of data){
    html += '<tr>';
    for(let j of Object.values(i))
      html += `<td>${j}</td>`;
    html += '</tr>';
  }
  html += '</table>';
  elem.innerHTML = html;
}

function excluirComida(){
  let codigo = document.getElementById('excluirComida').value;
  const comida = new Comida(); 
  comida.excluirItem(codigo);
}
function excluirBebida(){
  let codigo = document.getElementById('excluirBebida').value;
  const bebida = new Bebida(); 
  bebida.excluirItem(codigo);

}
function excluirPedido(){
  let codigo = document.getElementById('excluirPedido').value;
  const pedido = new Pedido(); 
  pedido.excluirItem(codigo);
}