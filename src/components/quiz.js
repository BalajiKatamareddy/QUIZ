import React, { useState } from "react";
import { data } from "./data";

function Quiz() {
    const [index, setIndex] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);

    const question = data[index];

    const checkAnswer = (ans) => {
        if (!answered) {
            console.log("Checking answer:", ans);
            setSelectedOption((prevSelectedOption) =>
                prevSelectedOption === ans ? null : ans
            );

            if (question.answer === ans) {
                // Increment the score for correct answers
                setScore((prevScore) => prevScore + 1);
            }

            setAnswered(true);
        }
    };

    const handleNext = () => {
        setAnswered(false);
        setSelectedOption(null);

        // Use the updated index value after the state has been updated
        setIndex((prevIndex) => {
            if (prevIndex < data.length - 1) {
                return prevIndex + 1;
            } else {
                alert("Quiz completed! Your score: " + score);
                return prevIndex;
            }
        });
    };

    return (
        <div className="container">
            <h1>Quiz App</h1>
            <hr />
            <h2>{index + 1}.{question.question}</h2>
            <ul>
                {[1,2,3,4].map((option) => (
                    <li
                        key={option}
                        onClick={() => checkAnswer(option)}
                        className={selectedOption === option ? "selected" : ""}
                    >
                       {question[`option${option}`]}
                    </li>
                ))}
            </ul>
            <button className="button" onClick={handleNext}>
                Next
            </button>
            <div className="index">
                {index + 1} out of {data.length}
            </div>
            <div className="score">
                Score: {score}
            </div>
        </div>
    );
}

export default Quiz;