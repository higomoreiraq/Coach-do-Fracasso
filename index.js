// variaveis
// dados de entrada
// dados de saida
const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const respostas = [
  "Não tenha medo do fracasso, tenha costume!",
  "Nunca é tarde para desistir!",
  "Seu maior problema é você!",
  "Sem lutas, não há derrota!",
  "O esforço hoje é o fracasso de amanhã",
  "Todo erro começa com a decisão de tentar!",
  "Só dará errado se você tentar!",
  "Daqui a um ano você vai desejar ter desistido hoje!",
  "Pare de desejar e comece a desistir!",
  "O que tiver de ser seu, nunca será!",
  "Você não pode mudar o seu passado, mas pode estragar o seu futuro!",
  "A vida não é uma caixinha de surpresas, é um container de decepções!",
  "Não existe caminho para o fracasso. O fracasso é o caminho!",
  "Você é mais fraco do que pensa!",
  "O caminho é longo, mas a derrota é certa!",
  "Acredite, você nasceu para conquistar grandes fracassos!",
  "Até o cheque é especial e você não!",
  "Depois da tempestade vem o lamaçal",
  "É só questão de tempo para dar tudo errado!",
  "O problema não é a segunda-feira, é a sua vida!",
  "Depois do sacrifício vem a derrota!",
  "Acorda, o fracasso te espera!",
  "Seu maior problema é você!",
  "Antes de começar, desista!",
  "Vai dar tudo errado!",
  "O mérito da derrota é todo seu. Orgulhe-se",
  "É só uma fase ruim, logo vai piorar!",
  "Sextou com S de Sofrimento",
  "Foco, Força e Fracasso",
  "Quando tudo estiver mal, pode piorar!",
  "O Não você já tem, busque o Nunca!",
  "Quando sua mente pensar em desistir, desista!",
  "Nunca foi azar, sempre foi incopetência!",
  "Eu quero, Eu posso, Eu desisto!",
  "Muita gente dirá que não vai dar certo. Acredite neles!",
  "Nunca deixe que os outros digam que você não é capaz. Diga você mesmo",
]

// console.log(numeroAleatorio)

// clicar em fazer pergunta
function fazerPergunta() {

  if(inputPergunta.value == "") {
    alert("Digite seu nome para o Coach abençoar seu dia!")
    return
  }
  buttonPerguntar.setAttribute("disabled", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"

  // gerar numero aleatorio
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
  
  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1;

  // sumir depois de 3 segundos
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  }, 3000)
}