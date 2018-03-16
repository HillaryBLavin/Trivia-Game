// Add on-click function that removes Start button 
$('#start').on('click', function() {
    $('#start').remove();
    game.loadQuestion();
})

// Add on-click function for answer button
$(document).on('click', '.answer-button', function(e) {
    game.clicked(e);
})

// Add on-click function for Try Again? button
$(document).on('click', '#reset', function() {
    game.reset();
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
}, {
    question: "What race is Jabba the Hutt's majordomo, Bib Fortuna?",
    answers: ["Wookie", "Gungan", "Twi'lek", "Rodian"],
    correctAnswer: "Twi'lek",
    image: "assets/images/bib.gif"
}, {
    question: "What planet is Boba Fett from?",
    answers: ["Mustafar", "Corellia", "Coruscant", "Kamino"],
    correctAnswer: "Kamino",
    image: "assets/images/boba.gif"
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
    // Counter for unanswered questions
    unanswered: 0,
    // Create method to run countdown (counter) 
    countdown: function() {
        // Decrement counter
        game.counter --; 
        // Display counter
        $('#counter').html(game.counter);
        // When time runs out, run the timeUp method
        if(game.counter <= 0){
            game.timeUp();
        }
    },
    // Create method to load question to the page
    loadQuestion: function() {
        // Create timer - this sets countdown to decrement every second
        timer = setInterval(game.countdown, 1000);
        // Display timer
        $('#subwrapper').html("<h3>Time Remaining: <span id='counter'>20</span> seconds</h3>");
        // Display current questions
        $('#subwrapper').append('<h2>' + questions[game.currentQuestion].question + '</h2>');
        // Loop through array of possible answers
        for(var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
            // Create a button for each answer 
            $('#subwrapper').append('<button class="answer-button" id="button-'+ i +' " data-name="' + questions[game.currentQuestion].answers[i] + '">' + questions[game.currentQuestion].answers[i] + '</button>');
        }
    },
    nextQuestion: function() {
        // Reset timer
        game.counter = 20;
        // Reset display timer
        $('#counter').html(game.counter);
        // Increment current question "counter" and load next question
        game.currentQuestion ++;
        game.loadQuestion();
    },
    timeUp: function() {
        // Stop timer
        clearInterval(timer);
        // Incremenet unanswered counter
        game.unanswered ++;
        // Display message that they have run out of time
        $('#subwrapper').html('<h2>I find your lack of answer disturbing...</h2>');
        // Display correct answer
        $('#subwrapper').append('<h3>The Correct Answer Was: ' + questions[game.currentQuestion].correctAnswer + '</h3>');
        // Display gif
        $('#subwrapper').append('<img src = "'+ questions[game.currentQuestion].image +'">');
        // If this is the last question, take the user to the results screen after 3 seconds
        if(game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 3*1000);
        // If this is not the last question, load the next question after 3 seconds
        } else {
            setTimeout(game.nextQuestion, 3*1000);
        }
    },
    results: function () {
        // Stop timer
        clearInterval(timer);
        $('#subwrapper').html("<h2>Quiz Complete!</h2><br><h3>May the Force Be With You...Always</h3>");
        $('#subwrapper').append("<h4>Correct: " + game.correct + "</h4>");
        $('#subwrapper').append("<h4>Incorrect: " + game.wrong + "</h4>");
        $('#subwrapper').append("<h4>Unanswered: " + game.unanswered + "</h4>");
        $('#subwrapper').append("<button id='reset'>Try Again?</button>");
        $('#subwrapper').append("<h5>Do...or do not. There is no try.</h5>");
    },
    clicked: function (e) {
        // Stop timer
        clearInterval(timer);
        // If the answer is correct, run the answeredCorrectly method
        if($(e.target).data("name") == questions[game.currentQuestion].correctAnswer) {
            game.answeredCorrectly();
        // If the answer is wrong, run the answeredWrong method
        } else {
            game.answeredWrong();
        }
    },
    answeredCorrectly: function () {
        // Stop timer
        clearInterval(timer);
        // Increment correct answer counter
        game.correct ++;
        // Display header 
        $('#subwrapper').html('<h2>The Force is strong with you!</h2>');
        // Display gif
        $('#subwrapper').append('<img src = "'+ questions[game.currentQuestion].image +'">');
        // If this is the last question, take the user to the results screen after 3 seconds
        if(game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 5*1000);
        // If this is not the last question, load the next question after 3 seconds
        } else {
            setTimeout(game.nextQuestion, 5*1000);
        }
    },
    answeredWrong: function () {
        // Stop timer and reset
        clearInterval(timer);
        // Increment wrong answer counter
        game.wrong ++;
        // Display header 
        $('#subwrapper').html('<h2>Search your feelings...</h2>');
        // Display correct answer
        $('#subwrapper').append('<h3>The Correct Answer Was: ' + questions[game.currentQuestion].correctAnswer + '</h3>');
        // Display gif
        $('#subwrapper').append('<img src = "'+ questions[game.currentQuestion].image +'">');
        // If this is the last question, take the user to the results screen after 3 seconds
        if(game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 5*1000);
        // If this is not the last question, load the next question after 3 seconds
        } else {
            setTimeout(game.nextQuestion, 5*1000);
        }
    },
    reset: function() {
        game.currentQuestion = 0;
        game.counter = 20;
        game.correct = 0;
        game.wrong = 0;
        game.unanswered = 0;
        game.loadQuestion();

    }
}

