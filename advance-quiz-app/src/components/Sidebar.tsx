import { FaCircleCheck } from "react-icons/fa6";
import { useQuizStore } from "../store/useQuizStore";

const Sidebar = () => {
  const { questions, currentQuestion } = useQuizStore();

  return (
    <div className="w-1/4 bg-gray-100 p-4">
      <h2>Quiz Progress</h2>
      <ul>
        {questions.map((_, index) => (
          <li key={index} className="mb-2 flex items-center">
            <FaCircleCheck
              className={`mr-2 ${
                index <= currentQuestion ? "text-green-500" : "text-gray-400"
              } `}
            />
            <span>question{index + 1}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
