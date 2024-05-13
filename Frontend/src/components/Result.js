import React, { useState, useEffect } from 'react';

const Result = ({ selectedOptions, testNo }) => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch questions based on the test number
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/onlinetest/sampletest/${testNo}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch questions');
                }
                const data = await response.json();
                setQuestions(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchQuestions();
    }, [testNo]);

    if (loading) {
        return <div>Loading...</div>;
    }

    // Calculate total marks
    const totalMarks = questions.length;

    // Calculate marks obtained based on selected options and correct answers
    let marksObtained = 0;
    questions.forEach((question, index) => {
        const correctAnswer = question.correctAnswer; // Get correct answer from question object
        const selectedOption = selectedOptions[index]; // Get selected option for current question
        if (selectedOption !== undefined && selectedOption === correctAnswer) {
            marksObtained++;
        }
    });

    // Calculate percentage
    const percentage = ((marksObtained / totalMarks) * 100).toFixed(2);

    return (
        <div className="flex bg-white shadow-md rounded-lg p-6">
            {/* Left side with text information */}
            <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">Test Result</h2>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-lg">Total Marks:</span>
                    <span className="text-lg font-bold">{totalMarks}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-lg">Marks Obtained:</span>
                    <span className="text-lg font-bold">{marksObtained}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-lg">Percentage:</span>
                    <span className="text-lg font-bold">{percentage}%</span>
                </div>
            </div>

            {/* Right side with circular progress indicator */}
            <div className="flex-1 flex justify-center items-center">
                <svg className="w-20 h-20">
                    <circle
                        className="stroke-current text-green-500"
                        strokeWidth="8"
                        fill="transparent"
                        r="42"
                        cx="50"
                        cy="50"
                    />
                    <circle
                        className="stroke-current text-green-500"
                        strokeWidth="8"
                        fill="transparent"
                        r="42"
                        cx="50"
                        cy="50"
                        strokeDasharray={`${percentage} 100`}
                    />
                    <text x="50%" y="50%" textAnchor="middle" fill="#000" dy=".3em">
                        {`${percentage}%`}
                    </text>
                </svg>
            </div>
        </div>
    );
};

export default Result;
