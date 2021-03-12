//start button 
var startButton = document.getElementById('start-button')
//the answer field, starts hidden will be show on click
var questionContainerEl = document.getElementById('result')
var questionEl = document.getElementById('quiz-container')
var answerEl = document.getElementById('choice')

startButton.addEventListener('click', startGame);

function startGame() {

    //remove class from start button and add hidden display, remove hidden display from questions(maybe?) and answers
    startButton.classList.remove('start')
    startButton.classList.add('hide')
    questionContainerEl.classList.remove('hide')
    questionEl.classList.remove('hide')
 

    document.querySelector("#choice0").textContent=questions[0].answers[0].text;
    document.querySelector("#choice1").textContent=questions[0].answers[1].text;
    document.querySelector("#choice2").textContent=questions[0].answers[2].text;
    document.querySelector("#choice3").textContent=questions[0].answers[3].text;
    document.querySelector("#question-ask").textContent=questions[0].question;

   


    //start timer
    var timeleft = 60;
    var downloadTimer = setInterval(function(){
        if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("time").innerHTML = "0 sec";
        window.alert("Times Up! Game Over!")
        } else {
        document.getElementById("time").innerHTML = timeleft + " sec";
        }
        timeleft -= 1;
    }, 1000);

    console.log('started')

};


var questions = [
    {
    question: ' Which tag is an extension to HTML that can enclose any number of Javascript statements' ,
    answers: [
        { text: '<SCRIPT>', correct: true }, 
        { text: '<BODY>', correct: false },
        { text: '<HEAD>', correct: false },
        { text: '<TITLE>', correct: false}],
    },
    {
    question: ' Which built-in method adds one or more elements to the end of an array and returns the new length of the array?', 
    answers: [
        { text : 'last()', correct: false}, 
        { text : 'put()', correct: false}, 
        { text : 'push()', correct: true}, 
        { text : 'None of the above', correct: false}], 
    },
    {
    question: ' Which built-in method returns the calling string value converted to upper case?',
    answers: [
        { text : 'toUpperCase', correct: true},
        { text : 'toUpper()', correct: false},
        { text : 'changeCase(case)', correct: false},
        { text : 'None of the above', correct: false}], 
    },
    {
    question: ' Which of the following function of String object combines the text of two strings and returns a new string?', 
    answers: [
        { text : 'add()', correct: false},
        { text : 'merge()', correct: false},
        { text : 'concat()', correct: true},
        { text : 'append()', correct: false}],
    },
    {
    question: ' JavaScript is a ___ -side programming language.', 
    answers: [
        { text : 'Client',  correct: false},
        { text : 'Server',  correct: false},
        { text : 'Both',  correct: true},
        { text : 'Neither', correct: false}]
    }
]
