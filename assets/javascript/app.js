// Add on-click function that removes Start button 
$('#start').on('click', function() {
    $('#start').remove();
})

// Create an array of multiple-choice questions with associated images
var questions = [{}];

// Create Game Object including all game methods
var game = {
    questsions: questions,
    currentQuestion: 0,
    counter: 20,
    correct: 0,
    wrong: 0,
    countdown: function() {

    },
    loadQuestion: function() {

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

