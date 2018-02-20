var rightAnswer = 0
var wrongAnswer = 0
var unanswered = 0
var questionsBank = [
{ 
    question: "T’Challa has a PhD in physics from what institution of higher education?",
    answers: {
	    a:"New York University",
	    b:"Cambridge University",
	    c:"Oxford University",
        d:"Harvard University"
    },
    correctAnswer: "c"
},
{
    question: "Who killed T’Challa’s father King T’Chaka?",
    answers: {
	    a: "Ulysses Klaw",
	    b: "The Red Skull",
	    c: "The White Wolf",
        d: "Hilter"
    },
    correctAnswer: "a"
},
{
    question: "Only men of royal blood can serve in the role of The Black Panther?",
    answers: {
	    a: "True",
        b: "False"
    },
    correctAnswer: "b"
},
{
    question: "T’Challa fell in love with and married what member of the Marvel Cinematic Universe?",
	answers: {
        a: "Angelica Jones",
	    b: "Jean Grey",
	    c: "Ororo Munroe",
        d: "Anna Marie"
    },
    correctAnswer: "c"
},
{
    question: "What is T’Challa’s sister’s name?",
	answers: {
        a: "Orono",
	    b: "Ramonda?",
	    c: "Y’Nami",
        d: "Shuri"
    },
    correctAnswer: "d"
},
{
    question: "What precious mineral is mined exclusively in The Black Panther’s homeland?",
    answers: {    
        a: "Germainium",
	    b: "Gold",
	    c: "Vibranium",
        d: "Adamantium"
    },
    correctAnswer: "c"
},
{
    question: "The Black Panther first appeared in the Marvel Cinematic Universe in what year?",
    answers: {
        a: "1966",
        b: "1972",
	    c: "1980",
        d: "1975"
    },
    correctAnswer: "a"
},
{
    question: "What was the name given to the King’s personal guards?",
	answers: {
        a: "Dora Milaje",
	    b: "Handmaids",
	    c: "Hatut Zeraze",
        d: "The White Wolf"
    },
    correctAnswer: "a"
},
{   
    question: "In what comic book did The Black Panther first appear?",
	answers: {
        a: "Black Panther #1",
	    b: "Jungle Action #23",
	    c: "Fantastic Four #32",
        d: "Daredevil #7"
    },
    correctAnswer: "c"
},
{
    question: "Which of the following was NOT an enemy of T’Challa?",
	answers: {
        a: "Ulysess Klaw",
	    b: "Erik Killmonger",
	    c: "Reverend Achebe",
        d: "W’Kabi"
    },
    correctAnswer: "d"
},
{
    question: "The Black Panther is ruler of what country?",
	answers: {
        a: "Wukanna",
	    b: "Wakanda",
	    c: "Wukanda",
        d: "Wakanna",
    },
    correctAnswer: "b"
},
{
    question: "Which of these teams was The Black Panther NOT a member of?",
	answers: {
        a: "Fantastic Four",
	    b: "Illuminati",
	    c: "Avengers",
        d: "X-Men"
    },
    correctAnswer: "d"
}
]

function renderQuestions(){
    for (let i = 0; i < questionsBank.length; i++) {
        renderSingleQ(questionsBank[i]);
    }
}

function renderSingleQ(questionsBank){
    var div = $("#mainlayout");
    var p = $("<h4>").text(questionsBank.question);
    div.append(p);
    var form = $("<form>")
    div.append(form);
    $.each(questionsBank.answers, function(){
        var choice = $("<input>").html(questionsBank.answers.a);
            choice.attr("type", "radio");
            choice.attr("name", "1")
            choice.attr("value", questionsBank.answers)
            form.append(choice);
    });
}

var countdown = 76;
    var countId = setInterval(function(){
    countdown--;
    $("#countdown").html(countdown);
    if(countdown <= 0){
        clearInterval(countId);
        checkAnswers();
    }
    },1000 );

document.getElementById("startbtn").addEventListener("click", quizstart);
function quizstart(){
    console.log("you did it");
    
    $("#startscreen").css("display", "none");
    $("#timer").css("display", "block");
    $("#mainlayout").css("display", "block");
    $("#submitbtn").css("display", "block");
    renderQuestions();
}

function checkAnswers() {
    // if(document.getElementById("Oxford").checked) {
    //     rightAnswer++;
    //     console.log(rightAnswer);
    // }
    // else if (document.getElementById("Wrong"||"Wrong1"||"Wrong2").checked) {
    //     wrongAnswer++;
    //     console.log(wrongAnswer);
    // }
    // else {
    //     unanswered++;
    //     console.log(unanswered);
    // }
    
    $("#R").html("Correct Answers: " + rightAnswer);
    $("#W").html("Incorrect Answers: " + wrongAnswer);
    $("#U").html("Unanswered Questions: " + unanswered);
    $("#timer").css("display", "none");
    $("#mainlayout").css("display", "none");
    $("#submitbtn").css("display", "none");
    
    
}
document.getElementById("submitbtn").addEventListener("click", checkAnswers);   
// for (let i = 0; i < questionsBank.length; i++) {
//     $("#answers").html(questionsBank[i].answers);
//     $("#questions").append(questionsBank[i].question + "<br><br>");
// }