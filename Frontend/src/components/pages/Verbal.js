import React, { useState, useEffect } from "react";

const Reasoning = () => {
    const [questionsData, setQuestionsData] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [showAnswer, setShowAnswer] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/verbal");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setQuestionsData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleOptionChange = (questionIndex, optionIndex) => {
        setSelectedOptions({
            ...selectedOptions,
            [questionIndex]: optionIndex,
        });
    };

    const handleShowAnswer = (questionIndex) => {
        setShowAnswer({
            ...showAnswer,
            [questionIndex]: true,
        });
    };

    const handleReset = () => {
        setSelectedOptions({});
        setShowAnswer({});
    };

    return (
        <>
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold ml-4 font-poppins">Reasoning Questions</h2>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 mt-5 mr-4"
                    onClick={handleReset}
                >
                    Reset
                </button>
            </div>
            <div className="container mx-auto font-poppins ml-4">
                <table
                    style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        marginTop: "20px",
                    }}
                >
                    <thead>
                        <tr>
                            <th
                                style={{
                                    borderBottom: "1px solid #ddd",
                                    padding: "8px",
                                    textAlign: "left",
                                }}
                            >
                                Question
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {questionsData.map((questionObj, index) => (
                            <React.Fragment key={index}>
                                <tr>
                                    <td
                                        style={{
                                            borderBottom: "1px solid #ddd",
                                            padding: "8px",
                                            textAlign: "left",
                                        }}
                                    >
                                        {questionObj.question}
                                    </td>
                                </tr>
                                {questionObj.options.map((option, optionIndex) => (
                                    <tr key={`${index}-${optionIndex}`}>
                                        <td
                                            style={{
                                                borderBottom: "1px solid #ddd",
                                                padding: "8px",
                                                textAlign: "left",
                                            }}
                                        >
                                            <input
                                                type="radio"
                                                id={`option-${index}-${optionIndex}`}
                                                name={`question-${index}`}
                                                checked={selectedOptions[index] === optionIndex}
                                                onChange={() => handleOptionChange(index, optionIndex)}
                                            />
                                            <label
                                                htmlFor={`option-${index}-${optionIndex}`}
                                                style={{ marginLeft: "8px" }}
                                            >
                                                {option}
                                            </label>
                                        </td>
                                    </tr>
                                ))}
                                <tr>
                                    <td
                                        style={{
                                            borderBottom: "1px solid #ddd",
                                            padding: "8px",
                                            textAlign: "left",
                                        }}
                                    >
                                        {!showAnswer[index] && (
                                            <button
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mr-4"
                                                onClick={() => handleShowAnswer(index)}
                                            >
                                                Show Answer
                                            </button>
                                        )}
                                        {showAnswer[index] && (
                                            <p className="text-xl font-semibold">
                                                Correct Answer: {questionObj.correctAnswer}
                                            </p>
                                        )}
                                    </td>
                                </tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Reasoning;
