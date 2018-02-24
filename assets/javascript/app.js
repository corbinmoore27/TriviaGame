var rightAnswer = 0
var wrongAnswer = 0
var unanswered = 0
var inputArray = []
var questionsBank = [
{ 
    question: "T’Challa has a PhD in physics from what institution of higher education?",
    answers: [
    "New York University",
    "Cambridge University",
    "Oxford University",
    "Harvard University"
    ],
	correctAnswer: "Oxford University"
},
{
    question: "Who killed T’Challa’s father King T’Chaka?",
    answers: [
    "Ulysses Klaw",
	"The Red Skull",
	"The White Wolf",
    "Hilter"
    ],
    correctAnswer: "Ulysses Klaw"
},
{
    question: "Only men of royal blood can serve in the role of The Black Panther?",
    answers: [
	    "True",
        "False"
    ],
    correctAnswer: "False"
},
{
    question: "T’Challa fell in love with and married what member of the Marvel Cinematic Universe?",
	answers: [
        "Angelica Jones",
	    "Jean Grey",
	    "Ororo Munroe",
        "Anna Marie"
    ],
    correctAnswer: "c"
},
{
    question: "What is T’Challa’s sister’s name?",
	answers: [
        "Orono",
	    "Ramonda",
	    "Y’Nami",
        "Shuri"
    ],
    correctAnswer: "d"
},
{
    question: "What precious mineral is mined exclusively in The Black Panther’s homeland?",
    answers: [   
        "Germainium",
	    "Gold",
	    "Vibranium",
        "Adamantium"
    ],
    correctAnswer: "c"
},
{
    question: "The Black Panther first appeared in the Marvel Cinematic Universe in what year?",
    answers: [
        "1966",
        "1972",
	    "1980",
        "1975"
    ],
    correctAnswer: "a"
},
{
    question: "What was the name given to the King’s personal guards?",
	answers: [
        "Dora Milaje",
	    "Handmaids",
	    "Hatut Zeraze",
        "The White Wolf"
    ],
    correctAnswer: "a"
},
{   
    question: "In what comic book did The Black Panther first appear?",
	answers: [
        "Black Panther #1",
	    "Jungle Action #23",
	    "Fantastic Four #32",
        "Daredevil #7"
    ],
    correctAnswer: "c"
},
{
    question: "Which of the following was NOT an enemy of T’Challa?",
	answers: [
        "Ulysess Klaw",
	    "Erik Killmonger",
	    "Reverend Achebe",
        "W’Kabi"
    ],
    correctAnswer: "d"
},
{
    question: "The Black Panther is ruler of what country?",
	answers: [
        "Wukanna",
	    "Wakanda",
	    "Wukanda",
        "Wakanna",
    ],
    correctAnswer: "b"
},
{
    question: "Which of these teams was The Black Panther NOT a member of?",
	answers: [
        "Fantastic Four",
	    "Illuminati",
	    "Avengers",
        "X-Men"
    ],
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
    
    for (let i = 0; i < questionsBank.answers.length; i++) {
        var choice = $("<input>");
        choice.attr("type", "radio");
        choice.attr("name", "1")
        choice.attr("value", questionsBank.answers[i])
        var par = $("<p>").text(questionsBank.answers[i]);
        form.append(choice);
        form.append(par);
    }
}

document.getElementById("startbtn").addEventListener("click", quizstart);
function quizstart(){
    var countdown = 76;
    var countId = setInterval(function(){
    countdown--;
    $("#countdown").html(countdown);
    if(countdown <= 0){
        clearInterval(countId);
        checkAnswers();
    }
    },1000 );
    
    $("#startscreen").css("display", "none");
    $("#timer").css("display", "block");
    $("#mainlayout").css("display", "block");
    $("#submitbtn").css("display", "block");
    renderQuestions();
    
}

function checkAnswers() {
    // if(questionsBank.correctAnswer === $("input:checked").val())
    //     rightAnswer++;
    //     console.log(rightAnswer);
    
    $.each(questionsBank, function(){;
        inputArray.push($("input:checked").val());
        console.log(inputArray);
    });
    
    // if(document.getElementById("Oxford").checked) {
    //     rightAnswer++;
    //     console.log(rightAnswer);
    // }
    // else if (document.getElementById("Wrong").checked) {
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
