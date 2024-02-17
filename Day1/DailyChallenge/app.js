import express from "express";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT || 3000, () => {
  console.log(`Running on ${process.env.PORT || 3000}`);
});

const triviaQuestions = [
  {
    id: 1,
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    id: 3,
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

let currentQuestionIndex = 0;
let userScore = 0;
const userAnswers = [];

// Get to get the current question
app.get("/quiz", (req, res) => {
  if (currentQuestionIndex >= triviaQuestions.length) {
    res.send("Quiz completed. Please check your score");
  } else {
    const currentQuestion = triviaQuestions[currentQuestionIndex].question;
    res.json({ Question: currentQuestion });
  }
});

// Post to submit an answer to the current question
app.post("/quiz", (req, res) => {
  const answer = req.body.answer;
  const currentQuestion = triviaQuestions[currentQuestionIndex];

  if (!currentQuestion) {
    res.send("Quiz is completed. Cannot accept more answers");
    return;
  }

  if (answer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
    userScore++;
    userAnswers.push({ question: currentQuestion.question, answer: "Correct" });

    res.send("Congragulation!! Moving to next question");
  } else {
    userAnswers.push({
      question: currentQuestion.question,
      answer: "Incorrect",
    });
    res.send(
      `Incorrect ! The correct answer is ${currentQuestion.answer}. Moving to the next question`
    );
  }

  currentQuestionIndex++;
});

// Get Displaying the final score
app.get("/quiz/score", (req, res) => {
  res.json({ score: userScore });
});