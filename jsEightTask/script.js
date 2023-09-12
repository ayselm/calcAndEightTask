let minValue = parseInt(prompt('Минимальное знание числа для игры','0')) || 0;
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100')) || 100;
if (minValue < -999) {
    minValue = -999;
}
if (maxValue > 999) {
    maxValue = 999;
}
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
// if (answerNumber.length < 20){
//     answerNumber 
// }
let orderNumber = 1;
let gameRun = true;



const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');


orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${ answerNumber }?`;

const questionPhrases = [
    "Да это легко! Ты загадал ...",
    "Наверное, это число ...",
    "Может быть, это число ..."
];
  
const winPhrases = [
    "Я так и знал  \n\u{1F914}",
    "Это было легко",
    "А когда не угадывали?"
];
  
const losePhrases = [
    "Вы загадали неправильное число! \n\u{1F914}",
    "Я сдаюсь.. \n\u{1F92F}",
    "Мне плохо"
];

function getRandomPhrase(phrases) {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
}
  
  

document.getElementById('btnOver').addEventListener('click', function () {
        if (minValue === maxValue){
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число! \n\u{1F914}` :
                `Я сдаюсь.. \n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const questionPhrase = getRandomPhrase(questionPhrases).replace("...", answerNumber);
            answerField.innerText = questionPhrase;      
        }
})

document.getElementById('btnLess').addEventListener('click', function () {
        if (minValue === maxValue){
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число! \n\u{1F914}` :
                `Я сдаюсь.. \n\u{1F92F}`;
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.floor((minValue + maxValue) / 2)
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const questionPhrase = getRandomPhrase(questionPhrases).replace("...", answerNumber);
            answerField.innerText = questionPhrase;      
        }
}
)


document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const winPhrase = getRandomPhrase(winPhrases);
        answerField.innerText = winPhrase;
        gameRun = false;
    } 
})



document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное значение числа для игры', '0'));
    maxValue = parseInt(prompt('Максимальное значение числа для игры', '100'));
    if (minValue < -999) {
        minValue = -999;
    }
    if (maxValue > 999) {
        maxValue = 999;
    }
    orderNumber = 1;
    answerNumber = Math.floor((minValue + maxValue) / 2);
    gameRun = true;
    orderNumber++;
    orderNumberField.innerText = orderNumber;
    const questionPhrase = getRandomPhrase(questionPhrases).replace("...", answerNumber);
    answerField.innerText = questionPhrase; 
  });
  