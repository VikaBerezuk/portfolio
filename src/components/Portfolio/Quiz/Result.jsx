import React from 'react';

const Result = ({correct, questions}) => {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt='result'/>
            <h2>You guessed it {correct} answer from {questions.length}</h2>
            <button onClick={() => window.location.reload()}>Try again</button>
        </div>
    );
};

export default Result;