import { useQuizStore } from "../store/useQuizStore";

const Question = () => {
  const {
    questions,
    currentQuestion,
    selectAnswer,
    answers,
    nextQuestion,
    prevQuestion,
    showScore,
    score,
    resetQuiz,
  } = useQuizStore();

  if (showScore) {
    return (
      <div className="w-3/4 p-6">
        <h2>Your Scror</h2>
        <p>
          You scroe {score} out of {questions.length}{" "}
        </p>

        <button onClick={resetQuiz} className="p-2 border">
          Restart Quiz
        </button>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const answer = answers[currentQuestion];

  const handleSelect = (optionIndex: number) => {
    selectAnswer(optionIndex);
  };

  const handleSubmit = () => {
    nextQuestion();
  };

  return (
    <div className="w-3/4 p-6">
      <h3>{question.question}</h3>
      <div>
        {question.options.map((option, index) => (
          <div key={index} className="my-2">
            <label className="flex items-center">
              <input
                type="radio"
                name={`question-${currentQuestion}`}
                checked={answer === index}
                onChange={() => handleSelect(index)}
                className="mr-2"
              />
              {option}
            </label>
          </div>
        ))}
      </div>
      <div className="mt-6">
        {currentQuestion > 0 && (
          <button onClick={prevQuestion} className="p-2 border">
            Previous
          </button>
        )}

        {currentQuestion < questions.length - 1 ? (
          <button onClick={nextQuestion} className="p-2 border">
            Next
          </button>
        ) : (
          <button onClick={handleSubmit} className="p-2 border">
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Question;
