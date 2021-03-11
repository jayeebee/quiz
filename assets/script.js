//start button 
var startButton = document.getElementById('start-button')
//the answer field, starts hidden will be show on click
var questionContainerEl = document.getElementById('result')

startButton.addEventListener('click', startGame);

function startGame() {

    //remove class from start button and add hidden display, remove hidden display from questions(maybe?) and answers
    startButton.classList.remove('start')
    startButton.classList.add('hide')
    questionContainerEl.classList.remove('hide')

    //start timer
    var timeleft = 5;
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

}







/*
var questions = [
    new Question("_______ tag is an extension to HTML that can enclose any number of Javascript statements", ["<SCRIPT>", "<BODY>","<HEAD>", "<TITLE>"], "<SCRIPT>"),
    new Question("Which built-in method adds one or more elements to the end of an array and returns the new length of the array?", ["last()", "put()", "push()", "None of the above"], "push()"),
    new Question("Which built-in method returns the calling string value converted to upper case?", ["toUpperCase", "toUpper()","changeCase(case)", "None of the above"], "toUpperCase()"),
    new Question("Which of the following function of String object combines the text of two strings and returns a new string?", ["add()", "merge()", "concat()", "append()"], "concat()"),
    new Question("JavaScript is a ___ -side programming language.", ["Client", "Server", "Both", "Neither"], "Both")
];

*/