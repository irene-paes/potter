let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
let pontos = 0 
let placar = 0 

let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')


let articleQuestoes = document.querySelector('.questoes')
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Quantos anos a franquia acaba de completar?",
    alternativaA : "20 anos",
    alternativaB : "40 anos",
    alternativaC : "30 anos",
    correta      : "30 anos",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Quem é o pai de Herry Potter",
    alternativaA : "Dumbledore",
    alternativaB : "Thiago",
    alternativaC : "James",
    correta      : "James",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Quantas entradas secretas o Castelo de Hogwarts possui?",
    alternativaA : "Cerca de 11",
    alternativaB : "Certa de 6",
    alternativaC : "Cerca de 8",
    correta      : "Cerca de 8",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Qual é a cor favorita do Harry Potter",
    alternativaA : "Preta",
    alternativaB : "Roxo",
    alternativaC : "Rosa",
    correta      : "Rosa",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Em que periodo se passa o filme?",
    alternativaA : "1998 a 2007",
    alternativaB : "1791 a 1798",
    alternativaC : "1991 a 1998",
    correta      : "1991 a 1998",
}

const questoes = [q0, q1, q2, q3, q4, q5]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    
    let certa = questoes[numeroDaQuestao].correta
    
    if(respostaEscolhida == certa) {
        pontos += 10
    } else {
        
    }

    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    
    bloquearAlternativas()

    setTimeout(function() {
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0
        location.reload();
    }, 2000)
}