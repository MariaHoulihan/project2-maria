/* Reference to use of https://www.youtube.com/watch?v=C7NsIRhoWuE&list=LL&index=3 Kevin Briggs' code */
function checkQuestions() {
    const question1 = document.quiz.question1.value;
    const question2 = document.quiz.question2.value;
    const question3 = document.quiz.question3.value;
    const question4 = document.quiz.question4.value;
    const question5 = document.quiz.question5.value;
    const question6 = document.quiz.question6.value;
    const question7 = document.quiz.question7.value;
    const question8 = document.quiz.question8.value;
    const question9 = document.quiz.question9.value;
    const question10 = document.quiz.question10.value;

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
    "Excellent score! Way to go!! :D", 
    "Good score. Keep up the good work :)", 
    "Awwww ... Hit the books to improve your score! You can do it :)"
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