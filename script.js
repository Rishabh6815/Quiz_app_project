const questions = [{
    'que': 'Which of the following is a markup language',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JavaScript',
    'd': 'PHP',
    'correct': 'a'
},
{
    'que': 'Which year was JavaScript launched',
    'a': '1996',
    'b': '1995',
    'c': '1994',
    'd': 'none of the above',
    'correct': 'b'
},
{
    'que': 'Which year does CSS launched',
    'a': '1994',
    'b': '1995',
    'c': '1996',
    'd': 'none of the above',
    'correct': 'c'
},
{
    'que': 'VScode stands for',
    'a': 'Virtual standard code',
    'b': 'virtual script code',
    'c': 'virtual supreme code',
    'd': 'virtual studio code',
    'correct': 'd'
}
]

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if(index === total){
        return endQuiz()
    }
    reset()
    const data = questions[index]
    console.log(data)
    quesBox.innerText = ` ${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index]
    const ans = getAnswer()
    if (ans === data.correct){
           right++;
    }else{
           wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
              if (input.checked) {
               answer =  input.value;
              } 
              
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false; 
}
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
       <h3> Thank you for playing the Quiz</h3>
       <h2> ${right} / ${total} are correct </h3>
       </div>
    `
}

loadQuestion();