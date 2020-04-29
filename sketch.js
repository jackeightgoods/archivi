/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
Quiz archivi movimenti

questa app consiste in un semplice quiz sui manifesti presenti in archivio
nella prima pagina sarà visuallizato il nome della pahina e due bottoni che
il quale uno porterà al sito della associazione e il secondo farà partire il Quiz

si trattatno di 60 manifesti il quale ognuno avrà a disposizione 3 possibili
domande a risposta multipla, di questi 60 manifesti ne verrano scelti solo 15
in un ordine casuale.
ad ogni risposta esatta verrano assegnati 10pt invece ad risposte errate 0pt.
alla fine del quiz verrà mostrato il punteggio e la possibilità di reiniziare
il quiz

Jacopo ottoboni aprile 2020

<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/


// punteggio
let score =0;
//mi prendo i vari elementi dal HTML
const homeButton = document.getElementById('home-btn')
const resultButton = document.getElementById('result-btn')
const titolo =document.getElementById('titolo')
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const siteButton = document.getElementById('site-btn')
const questionContainerElement = document.getElementById('question-container');

let questionElement =document.getElementById('question')
let answerButtonsElements = document.getElementById('answer-buttons')

//arrey che mescola le domande
let shuffledQuestion, currentQuestionindex;
//eventi in attesa sui vari bottoni
 startButton.addEventListener('click',startGame)
 siteButton.addEventListener('click',opensite)
 nextButton.addEventListener('click',()=>{
   currentQuestionindex++;
   setNextQuestion();
 })

 resultButton.addEventListener('click', ()=>{
   let mesaggeScore = 'punteggio\t'+ score;
   resultButton.classList.add('hide');
   titolo.innerText= mesaggeScore;
   titolo.classList.remove('hide')
   homeButton.classList.remove('hide')
   questionElement.classList.add('hide')
   //rinonimo il tasto start in restart e lo visuallizzo
   startButton.innerText= 'restart'
   startButton.classList.remove('hide')
   //
   Array.from(answerButtonsElements.children).forEach(answer =>{
     answerButtonsElements.classList.add('hide')
   })
 })
homeButton.addEventListener('click',()=>{location.reload()})

 //funzione di inizio gioco
function startGame(){
  //rimuovo il titolo, i bottoni inziali  e faccio spuntare la domaneda
  questionElement.classList.remove('hide')
  titolo.classList.add('hide')
  startButton.classList.add('hide');
  siteButton.classList.add('hide');
  homeButton.classList.add('hide')
  questionContainerElement.classList.remove("hide");
  //resetto il punteggio
  score=0;
  //mostro i bottoni per le risposte
  Array.from(answerButtonsElements.children).forEach(answer =>{
    answerButtonsElements.classList.remove('hide')
  })

  //non ho capito bene come ma riordina l' array di risposte
  shuffledQuestion= questions.sort(()=> Math.random()-.5)
  //imposto l'index  da cui partire nel array rimescolato
  currentQuestionindex =0
  //vado alla prima domanda
  setNextQuestion();
}

function setNextQuestion(){
  //imposto il cointaine in attesa della risoposta
  resetState();
  //mostro la domanda e le risposte
  showQuestion(shuffledQuestion[currentQuestionindex])
}

function showQuestion(question){
  // inserisco nell oggetto testo il testo della domanda
  questionElement.innerText = question.question
  // rimescola le risposte
question.answer = question.answer.sort(()=> Math.random()-.5)
//per ogni risposta la mette nel bottone
  question.answer.forEach(answer =>{
    //crea il pulsante
    const button = document.createElement('button')
    //ci inserisce il testo
    button.innerText= answer.text
    //gli aggiunge la classe bottone
    button.classList.add('btn')
    //guarda quale risposta è corretta
    if (answer.correct){
      //aggiunge il tag dataset come corretto
      button.dataset.correct = answer.correct
    }
    //aspetta la risposta e qua non capisco come ci gli passo il bottobnr
    button.addEventListener('click',selectAnswer)
    //aggiunge i bottoni delle risposte
    answerButtonsElements.appendChild(button)
  })
}

function selectAnswer(e){
  //perchè taget? gli passo il bottone cliccato
const selectedButton =e.target
//vedo se la risposta è corretta o meno
const correct= selectedButton.dataset.correct
if (correct){
  score+=10
}

setStatusClass(document.body, correct)
// answerButtonsElements.children prende tutti gli elementi con classe answer button?
//colora di rosso le risposte errate e verde quelle corrette
Array.from(answerButtonsElements.children).forEach(button =>{
  setStatusClass(button, button.dataset.correct)
})
// se  non siamo alla fine mostra il tasto next
if(shuffledQuestion.length>currentQuestionindex+1){
  nextButton.classList.remove('hide')
}
// se siamo alla fine mostara il tasto risultati andare a vedere all'inizio
else{
  resultButton.classList.remove('hide')
  }
}


//è la funzione che aggiunle la classe in base al fatto se è coretta o meno
function setStatusClass (element, correct){
  clearStatusClass(element)
    if(correct){
      element.classList.add('correct')
    } else{
      element.classList.add('wrong')
    }
}
//timuve la classe da i tasti in modo che non sia colorato il bottone
function clearStatusClass(element){
  element.classList.remove('correct')
    element.classList.remove('wrong')
}
//apre il sito non riusciovo a fare una arrow function non ho voglia di risostituirlo
function opensite(){
  window.open("http://www.archiviomovimenti.org/")
}
//prepara il box per la domanda
function resetState(){
  //nascondo il bottone next
  nextButton.classList.add('hide')
  //non ho capito cosa si firstChild
    while(answerButtonsElements.firstChild){
    answerButtonsElements.removeChild(answerButtonsElements.firstChild)
    }

}

const questions =  [
  {
    question:'è questa una domanda?',
    answer: [
      {text: 'si', correct:true},
      {text: 'non lo so', correct:false},
      {text: 'banana', correct:false},
      {text: 'banana', correct:false},
        ]
  },
  {
    question:'ti senti biricchina?',
    answer: [
      {text: 'si', correct:false},
      {text: 'ah ah ah ', correct:false},
      {text: 'mi piace la zucchina', correct:true},
      {text: 'banana', correct:false},
        ]
  },
  {
    question:'ma perchè non va?',
    answer: [
      {text: 'non lo so', correct:false},
      {text: 'sei incapace ', correct:false},
      {text: 'il computer mi odia', correct:true},
      {text: 'banana', correct:false},
        ]
  },
  {
    question:'bhe dai funziona, cosa manca?',
    answer: [
      {text: 'non lo so', correct:false},
      {text: 'le immagini', correct:false},
      {text: 'la vita sociale', correct:true},
      {text: 'boh', correct:false},
        ]
  }
]
