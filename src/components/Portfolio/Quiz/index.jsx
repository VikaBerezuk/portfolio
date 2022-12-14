import React, {useEffect, useState} from 'react';
import Game from "./Game";
import './index.scss';
import Loader from "react-loaders";
import Result from "./Result";
import Title from "../../Title";
import {useGetQuizQuery} from "../../../store/quizApi";

const Index = () => {
   const [questions, setQuestions] = useState( []);
    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0);
    const question = questions[step];

   const {data , isLoading} = useGetQuizQuery(questions);

    useEffect(() => {
        if (data) {
            setQuestions(data)
        }
    }, [data]);

    const onClickVariant = (index) => {
        setStep(step + 1);
        if(index === question.correct) {
            setCorrect(correct +1);
        }
    }
    return (
        <>
            {isLoading ? '' : (
                <>
                    <Title strArray={['Q', 'u', 'i', 'z']}/>
                    <div className="section">
                        <div className='quiz'>
                            {
                                step !== questions?.length ?
                                    <Game step={step} question={question} onClickVariant={onClickVariant}
                                          questions={questions}/> :
                                    <Result correct={correct} questions={questions}/>
                            }
                        </div>
                    </div>
                </>
            )}
            <Loader type="pacman" active/>
        </>
    );
};

export default Index;