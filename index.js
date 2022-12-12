let counter = document.querySelector(".counter-text");
counter.textContent = 1;
let textQuestion = document.querySelector(".text");
let textAnswer = document.querySelectorAll(".answer-text");
const answerBoxes = document.querySelector(".answers-boxes");
let answer = document.querySelectorAll(".answer");
const contentQuestion = document.querySelector('.content-question')
let sum = 0;
let trueAnswer = 0;
const questionOne = () => {
  counter.textContent = 2;
  sum=sum+1
  textQuestion.textContent = "За какое время написали JavaScript?";
  textAnswer[0].textContent = "47 дней";
  textAnswer[1].textContent = "6 месяцев и 1 день";
  textAnswer[2].textContent = "10 дней";
  textAnswer[3].textContent = "2 месяца";
  for (let i = 0; i < answer.length; i++) {
    answer[i].classList.remove("false");
    answer[i].classList.remove("true");
  }
};
const questionTwo = () => {
  sum=sum+1
  textQuestion.textContent = "На этом пока всё!";
  textAnswer[0].textContent = "просто";
  textAnswer[1].textContent = "дико";
  textAnswer[2].textContent = "лень";
  textAnswer[3].textContent = "делать";
  for (let i = 0; i < answer.length; i++) {
    answer[i].classList.remove("false");
    answer[i].classList.remove("true");
  }
};
const deductionFunc = () => {
  counter.textContent = '000';
  contentQuestion.classList.add('deduction')
  answerBoxes.classList.add('remove')
  textQuestion.textContent = "На этом пока что всё!";
}
answerBoxes.addEventListener("click", (event) => {
  const { target } = event;
  // 1 вопрос
  if (Number(target.id) === 1 && sum === 0) {
    answer[0].classList.toggle("true");
    setTimeout(questionOne, 1500);
    trueAnswer = trueAnswer+1
  } else if (sum === 0){
    answer[0].classList.toggle("true");
    answer[target.id - 1].classList.toggle("false");
    setTimeout(questionOne, 1500);
  }
  // 2 вопрос
  if (Number(target.id) === 3 && sum === 1) {
    answer[2].classList.toggle("true");
    setTimeout(deductionFunc, 1700);
    trueAnswer = trueAnswer+1
  } else if (sum === 1) {
    answer[2].classList.toggle("true");
    answer[target.id - 1].classList.toggle("false");
    setTimeout(deductionFunc, 1700);
  }
});
