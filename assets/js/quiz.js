// Questions for the coffee quiz
const quizData = [
    {
        question: "What is the main ingredient in a traditional cappuccino?",
        answers: ["Espresso", "Latte", "Hot Chocolate", "Tea"],
        correctAnswer: "Espresso",

    },
    {
        question: "Which country is the largest producer of coffee?",
        answers: ["Brazil", "Italy", "Vietnam", "Ethiopia"],
        correctAnswer: "Brazil"
    },
    {
        question: "What type of coffee bean is known for its smooth flavor?",
        answers: ["Arabica", "Robusta", "Liberica", "Excelsa"],
        correctAnswer: "Arabica"
    },
    {
        question: "What is the name of the drink made with espresso and steamed milk?",
        answers: ["Latte", "Cappuccino", "Macchiato", "Mocha"],
        correctAnswer: "Cappuccino"
    }
];
for (i = 0; i < quizData.length; i++) {
    //console.log(quizData[i].question);
    const questionText = document.querySelector('.question-text')
    const quizQuestion = document.createElement("div");

    quizQuestion.className += "quiz-question-info"
    quizQuestion.innerHTML =
        `
            <p><span class="questionNumber">Question ${i + 1}:</span> ${quizData[i].question}</p>
            <div class="checkbox">
                <label>
                    <input type="checkbox" id="question-1"><span>${quizData[i].answers[0]}</span>
                </label>
                 <label>
                    <input type="checkbox" id="question-2" required><span>${quizData[i].answers[1]}</span>
                </label>
                <label>
                    <input type="checkbox" id="question-3"><span>${quizData[i].answers[2]}</span>
                </label>
                <label>
                    <input type="checkbox" id="question-4"><span>${quizData[i].answers[3]}</span>
                </label>
            </div>
        `;
   
    questionText.appendChild(quizQuestion);
    document.querySelector('.quiz-container-question').addEventListener('submit',(e)=>{
        e.preventDefault();
        console.log("hello")
    })
}