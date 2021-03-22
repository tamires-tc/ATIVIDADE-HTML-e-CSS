//Funcao adiciona uma nova linha na tabela
function adicionaLinha(idTabela) {

    var tabela = document.getElementById(idTabela);
    var numeroLinhas = tabela.rows.length;
    var linha = tabela.insertRow(numeroLinhas);
    var nome = linha.insertCell(0);
    var email = linha.insertCell(1);   
    var telefone = linha.insertCell(2); 
    var remover = linha.insertCell(3);
    nome.innerHTML = document.getElementById('nome').value;
    email.innerHTML =  document.getElementById('email').value;
    telefone.innerHTML =  document.getElementById('telefone').value;
    remover.innerHTML =  "<button onclick='removeLinha(this)'>Remover</button>";

}

// funcao remove uma linha da tabela
function removeLinha(linha) {
  var i=linha.parentNode.parentNode.rowIndex;
  document.getElementById('tabela').deleteRow(i);
}    