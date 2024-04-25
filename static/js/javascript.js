const question = "Create an int array called arr that initializes an empty array of size 10.";
const java_answer = "int[] arr = new int[10];";
const python_answer = "arr = [0] * 10";
const c_answer = "int arr[10] = {0};";

let currentAnswer = c_answer;

function highlightSection(section) {
    document.querySelectorAll('#language-selector button').forEach(btn => {
      btn.style.backgroundColor = 'lightcyan';
    });

    const selectedBtn = document.querySelector(`#language-selector button:nth-child(${section})`);
    selectedBtn.style.backgroundColor = 'lightblue';

    switch (section) {
        case 1:
            currentAnswer = java_answer;
            break;
        case 2:
            currentAnswer = python_answer;
            break;
        case 3:
            currentAnswer = c_answer;
            break;
        default:
            currentAnswer = c_answer; 
            break;
    }

  }

function checkAnswer(submittedAnswer) {
    return submittedAnswer.trim().toLowerCase() === currentAnswer.toLowerCase();

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
