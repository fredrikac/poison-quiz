//QUIZ




//FUNKTION bygg quiz
function buildQuiz(){

    //en tom array för att hantera utskriften på sidan
    let displayQuiz = [];

    //för varje fråga...
    questionBattery.forEach((currentQuestion, questionNumber) => {

        //en tom array för att lagra möjliga svar
        let answers = [];

        //för varje möjligt svar...
        //skapa en label 
        //lägg till en radio-knappar för svarsalternativen 
        // br för att göra det luftigare och mer läsbart
        for(letter in currentQuestion.answers){
            answers.push(
                `<label>
                <input type="radio" name="question${questionNumber}"value="${letter}"> 
                ${currentQuestion.answers[letter]}<br>
                </label>`
            );}

        //Lägg till frågan med tillhörande svar till utskriften
        displayQuiz.push(
            `<br><br><div class="question"> ${currentQuestion.question}</div><br>
            <div class="answers"> ${answers.join(" ")}</div>`
        );
    });
    
    //Lägg in utskriften i vår div quizContainer
    quizContainer.innerHTML = displayQuiz.join('');
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
        //Justera detta så endast rätt svar visas i grönt och endast fel svar visas i rött!
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

    //OM användaren har 4 rätt eller mindre, blir texten röd.
    if(numCorrect <= 4){
        resultsContainer.style.color = "red";
    }else if(numCorrect <= 7)//OM användaren har mer än 4 men mindre än eller lika med 7 rätt blir texten orange
    {
        resultsContainer.style.color = "orange";
    }else{//ANNARS, om användaren har 8-10 rätt blir texten grön. 
        resultsContainer.style.color = "green";
    };
    resultsContainer.innerHTML = `Du fick ${numCorrect} av ${questionBattery.length}rätt! Testa igen?`;
}

//FUNKTION för darkmode
function darkMode(){
    let body = document.body;
    body.classList.toggle("dark-mode");
}

//VARIABLER
//En array av objekt att lagra frågorna i
const questionBattery = [
    {
        question: "Under 1700-1800-tal användes arsenik som en bärande ingrediens i ett färgämne som användes bl.a. i tapeter och tyger. Vilken färg?",
        answers: {
            a: "Blå",
            b: "Grön",
            c: "Rosa"
        },
        correctAnswer: "b"
    },
    {
        question: "Välj den sjukdom som ger dig högst sannolikhet att överleva i en modern kontext:",
        answers: {
            a: "Pest",
            b: "Kolera",
            c: "Ebola"
        },
        correctAnswer: "b"
    },
    {
        question: "Vilket är världens giftigaste toxin?",
        answers: {
            a: "Botulinumtoxin",
            b: "Digitoxin",
            c: "Tetrodotoxin"
        },
        correctAnswer: "a"
    },
    {
        question: "Den ryske KBG-agenten Aleksandr Litvinenko lönnmördades 2006 med vilket ämne?",
        answers: {
            a: "Plutonium",
            b: "Radium-223",
            c: "Polonium-210"
        },
        correctAnswer: "c"
    },
    {
        question: "Vilket giftigt ämne har du fått i dig om du behandlas med ämnet berlinerblått?",
        answers: {
            a: "Tallium",
            b: "Kvicksilver",
            c: "Bly"
        },
        correctAnswer: "a"
    },
    {
        question: "En annan ryss som utsatts för mordförsök är Aleksej Navalnyj. Vad kallas den typ av nervgift han utsattes för?",
        answers: {
            a: "Klorgas",
            b: "Novitjok",
            c: "Saringas"
        },
        correctAnswer: "b"
    },
    {
        question: "Giftiga svampar känner de flesta till, men varför är svampar som t.ex. vit flugsvamp så dödliga?",
        answers: {
            a: "De innehåller ett ämne som ger permanenta cellskador på levern och ibland njurarna",
            b: "Det giftiga ämnet påverkar centrala nervsystemet vilket kan leda till förlamning av andningsmuskulaturen",
            c: "De innehåller ämnen som leder till att tarmväggarna upplöses vilket orsakar sepsis"
        },
        correctAnswer: "a"
    },
    {
        question: "Vilket ämne användes för att döda den bulgariske författaren och journalisten i paraplymordet i London 1978?",
        answers: {
            a: "Kinin",
            b: "Ricin",
            c: "Anilin"
        },
        correctAnswer: "b"
    },
    {
        question: "Poison ivy eller giftsumak är mest känt för att orsaka utslag på huden. Växten är även släkt med en frukt som är vanligt förekommande i våra affärer. Vilken?",
        answers: {
            a: "Persimon",
            b: "Passionsfrukt",
            c: "Mango"
        },
        correctAnswer: "c"
    },
    {
        question: "Hur stor dos nikotin bedöms vara dödlig för en vuxen människa?",
        answers: {
            a: "20mg",
            b: "30mg",
            c: "40mg"
        },
        correctAnswer: "c"
    }
];

//Peka på HTML-elementen
let quizContainer = document.querySelector("#quizContainer"); //div för quiz
let resultsContainer = document.querySelector("#results"); //div för resultat
let submitButton = document.querySelector("#submit"); //skicka in-knappen
let changeModeButton = document.querySelector("#lightOrDark");//utseende-knappen
let refreshButton = document.querySelector("#reset");//börja om-knappen

//Kör bygg quiz direkt!
buildQuiz();

//När användaren klickar på Skicka in, visa resultat
submitButton.addEventListener("click", showResults); 

//När användaren klickar på Utseende, ändra till darkmode
changeModeButton.addEventListener("click", darkMode);

//REFRESHA SIDAN
refreshButton.addEventListener("click", ()=>{
    location.reload();
});




//ATT GÖRA: 
//FIXA STYLING: RADBRYTNING, LÄGG SVARSALTERNATIV PÅ SEPARATA RADER - check
//FÄRGSTÄLLNING - LJUSGRÖN OCH MÖRKGRÖN PGA POISON
//FLYTTA UTSEENDE-KNAPP TILL HÖGRA HÖRNET - check 
//Lägg till en fråga med flerval
//Fixa färgning av resultaten - orange för 50% och grön för över 80% - check!


//Testa om jag kan färga enbart det rätta/felaktiga svarsalternativet - eller ta bort




