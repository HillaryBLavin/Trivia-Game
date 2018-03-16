// Add on-click function that removes Start button 
$('#start').on('click', function() {
    $('#start').remove();
    game.loadQuestion();
})

// Create an array of multiple-choice questions with associated images
var questions = [{
    question: "In <i>Star Wars: A New Hope</i>, where is the hidden rebel base?",
    answers: ["Tatooine", "Dantooine", "Yavin IV", "Dagobah"],
    correctAnswer: "Yavin IV",
    image: "assets/images/yavin4.gif"
}, {
    question: "In how many forms of communication is C-3PO fluent?",
    answers: ["Twelve", "Three", "Over 2 million", "Over 6 million"],
    correctAnswer: "Over 6 million",
    image: "assets/images/c3po.gif"
}, {
    question: "Who were Princess Leia's adoptive parents?",
    answers: ["Owen and Beru Lars", "Bail and Breha Organa", "Corran Horn and Mirax Terrik", "Padmé Amidala and Anakin Skywalker"],
    correctAnswer: "Bail and Breha Organa",
    image: "assets/images/organa.gif"
}, {
    question: '"Many ______ died to bring us this information."',
    answers: ["Bothans", "Rebels", "Hutts", "Jawas"],
    correctAnswer: "Bothans",
    image: "assets/images/mothma.gif"
}, {
    question: "Where does Luke Skywalker buy his power converters?",
    answers: ["Mos Eisley", "Mos Espa", "Theed", "Tosche Station"],
    correctAnswer: "Tosche Station",
    image: "assets/images/tosche.gif"
}, {
    question: "What type of animal did Luke used to bullseye in his T-16 back home?",
    answers: ["Womp Rat", "Wampa", "Sarlacc", "Porg"],
    correctAnswer: "Womp Rat",
    image: "assets/images/womprats.gif"
}];

// Create Game Object including all game properties and methods
var game = {
    // Pulls questions from questions array
    questions: questions,
    // Indicates index of current question from array
    currentQuestion: 0,
    // Counter (countdown for questions) starts at 20 seconds
    counter: 20,
    // Counter for correct answers
    correct: 0,
    // Counter for wrong answers
    wrong: 0,
    // Create method to run countdown (counter) 
    countdown: function() {
        // Decrement counter
        game.counter --; 
        // Display counter
        $('#counter').html(game.counter);
        // When time runs out, run the timeUp method
        if(game.counter <= 0){
            console.log("TIMES UP!");
            game.timeUp();
        }
    },
    // Create method to load question to the page
    loadQuestion: function() {
        // Create timer - this sets countdown to decrement every second
        timer = setInterval(game.countdown, 1000);
        // Write HTML to display current question
        $('#subwrapper').html('<h2>' + questions[game.currentQuestion].question + '</h2>');
        // Loop through array of possible answers
        for(var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
            // Create a button for each answer 
            $('#subwrapper').append('<button class="answer-button" id="button-'+ i +' " data-name="' + questions[game.currentQuestion].answers[i] + '">' + questions[game.currentQuestion].answers[i] + '</button>');
        }
    },
    nextQuestion: function() {

    },
    timeUp: function() {

    },
    results: function () {

    },
    clicked: function () {

    },
    answeredCorrectly: function () {

    },
    answeredWrong: function () {

    },
    reset: function() {

    }
}

