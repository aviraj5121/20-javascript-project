var questionContainer = document.getElementById("questions");
var questions = [
    {
        question: "Two pipes A and B can fill a tank in 20 minutes and 30 minutes respectively. If both pipes are opened together, the time taken to fill the tank is ?",
        option1: "50 minutes",
        option2: "12 minutes",
        answer: "12 minutes",
        option3: "25 minutes",
        option4: "15 minutes"
    },
    {
        question: "Two pipes A and B can fill a tank in 20 minutes and 30 minutes respectively. If both pipes are opened together, the time taken to fill the tank is ?",
        option1: "50 minutes",
        option2: "12 minutes",
        answer: "true",
        option3: "25 minutes",
        option4: "15 minutes"
    },
    {
        question: "Two pipes A and B can fill a tank in 20 minutes and 30 minutes respectively. If both pipes are opened together, the time taken to fill the tank is ?",
        option1: "50 minutes",
        option2: "12 minutes",
        answer: "true",
        option3: "25 minutes",
        option4: "15 minutes"
    },
];

function displayQuestions() {
    for (var i = 0; i < questions.length; i++) {
        var currentQuestion = questions[i];
        var questionText = currentQuestion.question;
        var options = [
            currentQuestion.option1,
            currentQuestion.option2,
            currentQuestion.option3,
            currentQuestion.option4
        ];

        // Create the question element
        var questionElement = document.createElement("div");
        questionElement.textContent = "Question " + (i+1) + ": " + questionText;

        // Create the options list element
        var optionsList = document.createElement("ul");
            for (var j = 0; j < options.length; j++) {
                var option = options[j];
                // Create option list item element
                var optionItem = document.createElement("li");
                // Create checkbox input element
                var checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                // Create label element for the option text
                var optionLabel = document.createElement("label");
                optionLabel.textContent = option;
                optionItem.appendChild(checkbox);
                optionItem.appendChild(optionLabel);
                optionsList.appendChild(optionItem);
        }
        
        questionElement.appendChild(optionsList);
        questionContainer.appendChild(questionElement);
    }
}
function calculateScore() {
    score = 0;
    var options = document.querySelectorAll('input[type="checkbox"]');
    var selectedOptions = [];
    if (options.checked) {
        selectedOptions.push(option.innerHTML);
    }

    console.log(selectedOptions);
}

var checkButton = document.getElementById("check-button");
checkButton.addEventListener("click", calculateScore);
// Call the function to display the questions
displayQuestions();
