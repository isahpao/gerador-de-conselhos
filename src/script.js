let botao = window.document.getElementById('botao')
let conselho = window.document.getElementById('idConselho')
let descricao = window.document.getElementById('descricaoConselho')



async function pegarDados() {
    try {
    const resposta = await fetch('	https://api.adviceslip.com/advice');
    const dados = await resposta.json();
   
    conselho.innerText = `ADVICE #${dados.slip.id}`;
    descricao.innerText = `"${dados.slip.advice}"`;
} catch (erro) {
    console.error('Algo deu errado:', erro);
  }
}
botao.addEventListener('click', pegarDados);