function checkQuestions() {
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.value;

    var correct = 0;
    var incorrect = 0;

    if (question1 === "Back") {
        correct ++;
    }
    if (question2 === "Leg") {
        correct ++;
    }
    if (question3 === "Hinge") {
        correct ++;
    }
    if (question4 === "Quadriceps") {
        correct ++;
    }
    if (question5 === "Atlas") {
        correct ++;
    }
    if (question6 === "Talus") {
        correct ++;
    }
    if (question7 === "Pulmonary Artery") {
        correct ++;
    }
    if (question8 === "Connective Tissue") {
        correct ++;
    }
    if (question9 === "Cephalic") {
        correct ++;
    }
    if (question10 === "Chewing") {
        correct ++;
    }

var scoreMessage = [
    "Excellent score! :D", 
    "Good score. Keep up the good work :)", 
    "Awwww ... Hit the books to improve your score!"
];

var images = [
    "assets/images/excellent.jpg",
    "assets/images/goodjob.jpg",
    "assets/images/awwww.jpg"
]

var scoreTallyUp;
    
    if (correct <=4) {
        scoreTallyUp = 2;
    }
    if (correct >4 && correct <=7) {
        scoreTallyUp = 1;
    }
    if (correct >7) {
        scoreTallyUp = 0;
    }

document.getElementById("submit-area").style.visibility = "visible";
document.getElementById("score-tally").innerHTML = "Your score is " + correct +" correct out of 10.";
document.getElementById("score-message").innerHTML = scoreMessage[scoreTallyUp];
document.getElementById("result-image").src = images[scoreTallyUp];

}