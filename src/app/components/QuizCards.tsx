"use client";

import { useState } from "react";

const initialQuestions = [
  {
    question: "What reading technique involves quickly scanning text to find specific information?",
    options: ["Deep reading", "Skimming", "Analytical reading", "Close reading"],
    correct: "Skimming",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correct: "Mars",
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: "Paris",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Silver", "Hydrogen"],
    correct: "Oxygen",
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "8", "10", "12"],
    correct: "8",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Mark Twain"],
    correct: "William Shakespeare",
  },
  {
    question: "What is the chemical formula of water?",
    options: ["H2O", "CO2", "O2", "NaCl"],
    correct: "H2O",
  }
];

export default function QuizCard() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer: string) => {
    if (selectedAnswer) return; // Prevent multiple selections
    setSelectedAnswer(answer);
    if (answer === initialQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < initialQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      alert(`Quiz completed! Your final score is ${score}/${initialQuestions.length}`);
      setCurrentQuestion(0);
      setScore(0);
      setSelectedAnswer(null);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <h2 className="text-xl font-semibold text-center">Quiz</h2>
      <p className="text-lg text-center my-4">{initialQuestions[currentQuestion].question}</p>
      <div className="grid grid-cols-2 gap-4">
        {initialQuestions[currentQuestion].options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            disabled={selectedAnswer !== null}
            className={`p-3 rounded border text-lg ${
              selectedAnswer === option
                ? option === initialQuestions[currentQuestion].correct
                  ? "bg-green-200 border-green-500 text-green-700"
                  : "bg-red-200 border-red-500 text-red-700"
                : "bg-gray-100 border-gray-300"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="flex justify-between items-center mt-6">
        <p className="text-sm">Score: {score}</p>
        <button
          onClick={handleNext}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={!selectedAnswer}
        >
          Next →
        </button>
      </div>
      <p className="text-sm text-gray-500 text-center mt-2">
        {currentQuestion + 1} of {initialQuestions.length}
      </p>
    </div>
  );
}

