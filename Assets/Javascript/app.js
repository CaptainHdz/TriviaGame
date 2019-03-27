const timer = setInterval(newQuest, 1000 * 30 ) ;
const question = $("#question");
const choices = $("#choices");
const button = $("#button");
const answeredCrct = 0;
const answeredWrg = 0;
let quizQuestions =  [ {
    question: "Which came first, Ferarri or Lamborghini?",
    answers: ['Ferrari', 'Lamborghnini', 0]
},
{
    question: "Hyundai is the parent company of which company?",
    answers: ['Acura', 'Camry', 'Genesis', 'Jaguar', 2]
},
{
    question: "Which of these companies is in the top 2 most expensive to maintain?",
    answer: ['BMW', 'Dodge', 'Toyota', 'Volkswagen', 0]
},
{
    question: "Kia is a company based in which country?",
    answer: ['Saudi Arabia', 'South Korea', 'Norway', 'Japan', 1]
},
{
    question: "What company is the biggest company in the world based on market cap?",
    answers: ['Toyota', 'Ford', 'Tesla', 'Daimler', 0]
}]

function newQuest() {
// Resets the timer and changes the question, also marks the question that wasn't answered as wrong



}