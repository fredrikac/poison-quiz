//QUIZ




//FUNKTION bygg quiz
function buildQuiz(){

    //en variabel för att lagra html-output. en tom array
    const output = [];

    //för varje fråga...
    questionBattery.forEach((currentQuestion, questionNumber) => {

        //variabel för att lagra möjliga svar. också en tom array
        const answers = [];

        //för varje möjligt svar...
        //skapa en label 
        //lägg till en radio-knapp för svarsalternativen a och b
        for(letter in currentQuestion.answers){
            answers.push(
                `<label>
                <input type="radio" name="question${questionNumber}"value="${letter}"> 
               
                ${currentQuestion.answers[letter]}<br>
                </label>`
            );
        }

        //Lägg till frågan och dess svar till output
        output.push(
            `<div class="question"> ${currentQuestion.question}</div>
            <div class="answers"> ${answers.join(" ")}</div>`
        );
    }
    );
    //kombinera vår output-lista till en string av html och visa på sidan
    quizContainer.innerHTML = output.join('');
};



//FUNKTION visa resultat
function showResults(){

    //samla svarscontainers från vårt quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    //håll koll på användarens score
    let numCorrect = 0;

    //för varje fråga...
    questionBattery.forEach((currentQuestion, questionNumber)=>{
        //hitta valt svar
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        //Om svar är rätt... 
        if (userAnswer === currentQuestion.correctAnswer){
            //lägg till i numCorrect
            numCorrect++;
            //färga svaret grönt
            answerContainers[questionNumber].style.color = "lightgreen";
        }else{
            //färga röd
            answerContainers[questionNumber].style.color = "red";
        }
    });

    resultsContainer.innerHTML = `Du fick ${numCorrect} av ${questionBattery.length}rätt! Testa igen?`;
}

//VARIABLER
//En array av objekt att lagra frågorna i
const questionBattery = [
    {
        question: "Under 1700-1800-tal användes arsenik som en bärande ingrediens i ett färgämne som användes bl.a. i tapeter och tyger. Vilken färg?",
        answers: {
            a: "Blå",
            b: "Grön"
        },
        correctAnswer: "b"
    },
    {
        question: "Välj den sjukdom som ger dig högst sannolikhet att överleva i en modern kontext:",
        answers: {
            a: "Pest",
            b: "Kolera"
        },
        correctAnswer: "b"
    },
    {
        question: "Vilket är världens giftigaste toxin?",
        answers: {
            a: "Botulinumtoxin",
            b: "Digitoxin"
        },
        correctAnswer: "a"
    },
    {
        question: "Den ryske KBG-agenten Aleksandr Litvinenko lönnmördades 2006 med vilket ämne?",
        answers: {
            a: "Plutonium",
            b: "Polonium-210"
        },
        correctAnswer: "b"
    },
    {
        question: "Vilket giftigt ämne har du fått i dig om du behandlas med ämnet berlinerblått?",
        answers: {
            a: "Tallium",
            b: "Kvicksilver"
        },
        correctAnswer: "a"
    },
    {
        question: "En annan ryss som utsatts för mordförsök är Aleksej Navalnyj. Vad kallas den typ av nervgift han utsattes för?",
        answers: {
            a: "Novitjok",
            b: "Saringas"
        },
        correctAnswer: "a"
    },
    {
        question: "Giftiga svampar känner de flesta till, men varför är svampar som t.ex. vit flugsvamp så dödliga?",
        answers: {
            a: "De innehåller ett ämne som ger permanenta cellskador på levern och ibland njurarna",
            b: "Det giftiga ämnet påverkar centrala nervsystemet vilket kan leda till förlamning av andningsmuskulaturen"
        },
        correctAnswer: "a"
    },
    {
        question: "Vilket ämne användes för att döda den bulgariske författaren och journalisten i paraplymordet i London 1978?",
        answers: {
            a: "Kinin",
            b: "Ricin"
        },
        correctAnswer: "b"
    },
    {
        question: "Poison ivy eller giftsumak är mest känt för att orsaka utslag på huden. Växten är även släkt med en frukt som är vanligt förekommande i våra affärer. Vilken?",
        answers: {
            a: "Mango",
            b: "Passionsfrukt"
        },
        correctAnswer: "a"
    },
    {
        question: "Är nikotin ett nervgift?",
        answers: {
            a: "Ja",
            b: "Nej"
        },
        correctAnswer: "a"
    }
]

//Peka på HTML-elementen
let quizContainer = document.querySelector("#quizContainer"); //div för quiz
let resultsContainer = document.querySelector("#results"); //div för resultat
let submitButton = document.querySelector("#submit"); //skicka in-knappen


//Kör bygg quiz direkt!
buildQuiz();

//När användaren klickar på Skicka in, visa resultat
submitButton.addEventListener("click", showResults); 

//DARKMODE
//använd bodyn i html som innehåller hela quizet. styla i css och ändra stylingen här mha knappen
let quizBody = document.querySelector("#body");

let changeModeButton = document.querySelector("#lightOrDark");
changeModeButton.addEventListener("click", ()=>{
    console.log("Användaren klickar på Utseende-knappen.")

    quizBody.style.background = "black";
    quizBody.style.color = "white";

    //OM användaren, klickar igen - byt tillbaka till vit

})

//REFRESH
let refreshButton = document.querySelector("#reset");
refreshButton.addEventListener("click", ()=>{
    location.reload();//laddar om sidan
})




//ATT GÖRA: 
//FIXA STYLING: RADBRYTNING, LÄGG SVARSALTERNATIV PÅ SEPARATA RADER
//FÄRGSTÄLLNING - LJUSGRÖN OCH MÖRKGRÖN PGA POISON
//FLYTTA UTSEENDE-KNAPP TILL HÖGRA HÖRNET
//utöka svarsalternativen till 3 st + gör om en fråga till flerval

