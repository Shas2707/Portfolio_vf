const form = document.getElementById('quiz-form');
const btnCorrection = document.getElementById('btn-correction');
const btnEffacer = document.getElementById('btn-effacer');

function calculerScore() {
    let score = 0;
    const questions = form.querySelectorAll('.question');

    questions.forEach((question, index) => {
        const selectedOption = question.querySelector('input[type="radio"]:checked');
        if (selectedOption && selectedOption.value === '1') {
            score++;
        }
    });

    alert(`Ton score est : ${score}/${questions.length}`);
}

function reinitialiserQuiz() {
    form.reset();
}

btnCorrection.addEventListener('click', () => {
    calculerScore();
});
btnEffacer.addEventListener('click', () => {
    reinitialiserQuiz();
});
