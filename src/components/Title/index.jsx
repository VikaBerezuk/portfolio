import React, {useEffect, useState} from 'react';
import AnimatedLetters from "./AnimatedLetters";

const Title = ({strArray}) => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    return (
        <div className="container title">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={strArray}
                        idx={16}
                    />
                </h1>
            </div>
        </div>
    );
};

export default Title;