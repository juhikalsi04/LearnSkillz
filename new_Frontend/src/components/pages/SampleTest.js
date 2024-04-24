import React, { useState } from 'react';
import CountdownTimer from './Timer';
import { useNavigate } from 'react-router-dom';
const SampleTest = () => {
  const tests = [
    {
      "question": "What is the capital of France?",
      "options": ["Berlin", "Madrid", "Paris", "Rome"],
      "correctAnswer": "Paris"
    },
    {
      "question": "Which planet is known as the Red Planet?",
      "options": ["Venus", "Mars", "Jupiter", "Saturn"],
      "correctAnswer": "Mars"
    },
    {
      "question": "Who wrote 'Romeo and Juliet'?",
      "options": ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
      "correctAnswer": "William Shakespeare"
    },
    {
      "question": "In what year did World War II end?",
      "options": ["1943", "1945", "1947", "1950"],
      "correctAnswer": "1945"
    },
    {
      "question": "Which country is known as the Land of the Rising Sun?",
      "options": ["China", "Japan", "South Korea", "Vietnam"],
      "correctAnswer": "Japan"
    },
    {
      "question": "Who painted the Mona Lisa?",
      "options": ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
      "correctAnswer": "Leonardo da Vinci"
    },
    {
      "question": "What is the largest mammal in the world?",
      "options": ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      "correctAnswer": "Blue Whale"
    },
    {
      "question": "Which gas do plants absorb from the atmosphere?",
      "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      "correctAnswer": "Carbon Dioxide"
    },
    {
      "question": "What is the currency of Japan?",
      "options": ["Yen", "Won", "Ringgit", "Baht"],
      "correctAnswer": "Yen"
    },
    {
      "question": "Who was the first President of the United States?",
      "options": ["Thomas Jefferson", "George Washington", "John Adams", "James Madison"],
      "correctAnswer": "George Washington"
    }
  ]


  const countdownLimit = 600
  const navigate = useNavigate()
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);



  const handlePreviousQuestion = () => {
    setCurrentQuestion((prev) => Math.max(0, prev - 1));
    setSelectedOption(null); // Clear selection when moving to the previous question
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => Math.min(tests.length - 1, prev + 1));
    setSelectedOption(null); // Clear selection when moving to the next question
  };

  const handleClearSelection = () => {
    setSelectedOption(null); // Clear the selected option for the current question
  };

  const handleSaveAndNext = () => {
    // Implement saving logic here
    console.log('Answer saved for question:', currentQuestion, 'Selected option:', selectedOption);
    handleNextQuestion();
  };
  const handleAlertSubmit = () => {
    setIsSubmitted(true);
    setShowAlert(false);
    navigate('/sampletest/result');
    // Handle submitting the test here
  };




  const [remainingTime, setRemainingTime] = useState(countdownLimit);
  const currentTest = tests[currentQuestion];
  const isLastQuestion = currentQuestion === tests.length - 1;


  return (
    <>
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        {/* Countdown Timer positioned in the top-right corner */}
        <div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 1 }}>
          <CountdownTimer limit={countdownLimit} onTimeUpdate={(time) => setRemainingTime(time)} />
        </div>
        {/* Alert box for submitting test */}
        {showAlert && (
          <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', zIndex: 2, backgroundColor: 'rgba(0, 0, 0, 0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '8px', boxShadow: '0px 0px 20px rgba(0,0,0,0.3)', textAlign: 'center' }}>
              <p style={{ marginBottom: '20px' }}>Are you sure you want to submit the test?</p>

              <p>Remaining Time: {Math.floor(remainingTime / 60)} minutes {remainingTime % 60} seconds</p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <button onClick={handleAlertSubmit} style={{ marginRight: '10px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>Yes</button>
                <button onClick={() => setShowAlert(false)} style={{ padding: '10px 20px', backgroundColor: '#dc3545', color: '#fff', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>No</button>
              </div>
            </div>
          </div>
        )}

        {/* Other content of the TestComponent */}
        {!isSubmitted && (
          <div style={{ padding: '20px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
              <thead>
                <tr>
                  <th scope="col" style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>
                    {currentTest.question}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                      {currentTest.options.map((option, index) => (
                        <li key={index} style={{ marginBottom: '8px' }}>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              id={`option-${index}`}
                              name={`question-${currentQuestion}`}
                              checked={selectedOption === index}
                              onChange={() => setSelectedOption(index)}
                            />
                            <label className="form-check-label" htmlFor={`option-${index}`}>
                              {option}
                            </label>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="container my-5 d-flex justify-content-between">
              <button type="button" className="btn btn-danger" onClick={handlePreviousQuestion} disabled={currentQuestion === 0}>
                Previous Question
              </button>
              <button type="button" className="btn btn-danger mx-2" style={{ marginLeft: '8px' }} onClick={handleClearSelection}>
                Clear Selection
              </button>
              {isLastQuestion ? (
                <button type="button" className="btn btn-primary" onClick={() => setShowAlert(true)}>
                  Submit Test
                </button>
              ) : (
                <button type="button" className="btn btn-success mx-2" style={{ marginLeft: '8px', marginRight: '8px' }} onClick={handleSaveAndNext}>
                  Save and Next Question
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SampleTest;
