const question = "Create an int array called arr in Java that initializes an empty array of size 10.";
const answer = "int[] arr = new int[10];";

function checkAnswer(submittedAnswer) {
    return submittedAnswer.trim().toLowerCase() === answer.toLowerCase();
}

function displayQuestion() {
    document.getElementById('question').getElementsByTagName('h3')[0].textContent = question;
}

function checkCode(event) {
    event.preventDefault(); 

    const submittedAnswer = document.getElementById('code').value;
    const isCorrect = checkAnswer(submittedAnswer);
    const checkDisplay = document.getElementById('checkDisplay');

    if (isCorrect) {
        checkDisplay.textContent = 'Congratulations! Your answer is correct.';
        checkDisplay.style.color = 'green';
    } else {
        checkDisplay.textContent = 'Sorry, your answer is incorrect. Please try again.';
        checkDisplay.style.color = 'red';
    }

    checkDisplay.style.display = 'block'; 
}
