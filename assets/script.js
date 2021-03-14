//start button 
var startButton = document.getElementById('start-button')
//the answer field, starts hidden will be show on click
var questionContainerEl = document.getElementById('result')
var questionEl = document.getElementById('quiz-container')
var answerEl = document.getElementById('choice')
var buttonEl = document.getElementById('button0')



let numCorrect = 0;
    
startButton.addEventListener('click', startGame);

function startGame() {

    //remove class from start button and add hidden display, remove hidden display from question and answers
    startButton.classList.remove('start')
    startButton.classList.add('hide')
    questionContainerEl.classList.remove('hide')
    questionEl.classList.remove('hide')
 
    //populate question field and answer buttons
    document.querySelector("#choice0").textContent=questions[0].answers[0].text;
    document.querySelector("#choice1").textContent=questions[0].answers[1].text;
    document.querySelector("#choice2").textContent=questions[0].answers[2].text;
    document.querySelector("#choice3").textContent=questions[0].answers[3].text;
    document.querySelector("#question-ask").textContent=questions[0].question;

    //start timer
    var timeLeft = 60;
    var quizTimer = setInterval(function(){
        if(timeLeft <= 0){
        clearInterval(quizTimer);
        document.getElementById("time").innerHTML = "0 sec";
        window.alert("Times Up! Game Over!")
        } else {
        document.getElementById("time").innerHTML = timeLeft + " sec";
        }
        timeLeft -= 1;
    }, 1000);

    let i = 0;

    button0.addEventListener('click', function(){
        if(questions[i].answers[0].correct){
        window.alert('Correct')
        i++;
        numCorrect++;
        console.log(numCorrect);
        } else  {timeLeft -= 5;
        window.alert('Incorrect') 
        i++
        }   
        document.querySelector("#choice0").textContent=questions[i].answers[0].text;
        document.querySelector("#choice1").textContent=questions[i].answers[1].text;
        document.querySelector("#choice2").textContent=questions[i].answers[2].text;
        document.querySelector("#choice3").textContent=questions[i].answers[3].text;
        document.querySelector("#question-ask").textContent=questions[i].question;

        if(i === 5){
            window.alert('Quiz complete. Your score is ' + numCorrect)
            username = prompt('Please enter your name for high score');
            localStorage.setItem("username", username);
            localStorage.setItem("score", numCorrect);
    }
    } 
)

    button1.addEventListener('click', function(){
        if(questions[i].answers[1].correct){
        window.alert('Correct')
        i++
        numCorrect++;
        } else  {timeLeft -= 5;
        window.alert('Incorrect') 
        i++
        }
        document.querySelector("#choice0").textContent=questions[i].answers[0].text;
        document.querySelector("#choice1").textContent=questions[i].answers[1].text;
        document.querySelector("#choice2").textContent=questions[i].answers[2].text;
        document.querySelector("#choice3").textContent=questions[i].answers[3].text;
        document.querySelector("#question-ask").textContent=questions[i].question;   

        if(i === 5){
            window.alert('Quiz complete. Your score is ' + numCorrect)
            window.prompt ('Please enter your name for high score')
    }
    } 
)
        button2.addEventListener('click', function(){
        if(questions[i].answers[2].correct){
        window.alert('Correct')
        i++
        numCorrect++;
        } else  {timeLeft -= 5;
        window.alert('Incorrect') 
        i++
        }   
        document.querySelector("#choice0").textContent=questions[i].answers[0].text;
        document.querySelector("#choice1").textContent=questions[i].answers[1].text;
        document.querySelector("#choice2").textContent=questions[i].answers[2].text;
        document.querySelector("#choice3").textContent=questions[i].answers[3].text;
        document.querySelector("#question-ask").textContent=questions[i].question;
     
        if(i === 5){
            window.alert('Quiz complete. Your score is ' + numCorrect)
            window.prompt ('Please enter your name for high score')
    }
        } 
     
    )
        button3.addEventListener('click', function(){
        if(questions[i].answers[3].correct){
        window.alert('Correct')
        i++
        numCorrect++;
        } else  {timeLeft -= 5;
        window.alert('Incorrect') 
        i++
        }   
        document.querySelector("#choice0").textContent=questions[i].answers[0].text;
        document.querySelector("#choice1").textContent=questions[i].answers[1].text;
        document.querySelector("#choice2").textContent=questions[i].answers[2].text;
        document.querySelector("#choice3").textContent=questions[i].answers[3].text;
        document.querySelector("#question-ask").textContent=questions[i].question;
 
        if(i === 5){
            window.alert('Quiz complete. Your score is ' + numCorrect)
            window.prompt ('Please enter your name for high score')
    }
 })
        

        
             
    

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
    },
    {
        question: '  ', 
        answers: [
            { text : ' ',  correct: false},
            { text : ' ',  correct: false},
            { text : ' ',  correct: true},
            { text : ' ', correct: false}]
        }
    

]
