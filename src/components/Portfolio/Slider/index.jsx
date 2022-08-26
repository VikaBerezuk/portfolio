import React, {useEffect, useState} from 'react';
import './index.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAnglesLeft, faAnglesRight, faQuoteRight} from "@fortawesome/free-solid-svg-icons";
import Title from "../../Title";
import { useGetSliderQuery } from "../../../store/sliderApi";
import Loader from "react-loaders";

const Slider = () => {
    const [people, setPeople] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const {data} = useGetSliderQuery();

    useEffect(() => {
        if (data) {
            setPeople(data)
        }
    }, [data]);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (currentIndex < 0) {
            setCurrentIndex(lastIndex)
        }
        if (currentIndex > lastIndex) {
            setCurrentIndex(0);
        }
    }, [currentIndex, people]);

    useEffect(() => {
        let slider = setInterval(() => setCurrentIndex(prevState => prevState + 1), 5000);
        return () => {
            clearInterval(slider);
        }
    }, [currentIndex]);

    return (
        <>
            <Title strArray={['S', 'l', 'i', 'd', 'e', 'r']}/>
            <section className='section'>
                <div className='title'>
                    <h2>
                        <span>/</span>reviews
                    </h2>
                </div>
                <div className='section-center'>
                    {people.map((person, personIndex) => {
                        const {id, image, name, title, quote} = person;

                        let position = 'nextSlide';
                        if (personIndex === currentIndex) {
                            position = 'activeSlide';
                        }

                        if (personIndex === currentIndex - 1 || (currentIndex === 0 && personIndex === people.length - 1)) {
                            position = 'lastSlide';
                        }

                        return (
                            <article className={position} key={id}>
                                <img src={image} alt={name} className='person-img'/>
                                <h4>{name}</h4>
                                <p className='title'>{title}</p>
                                <p className='text'>{quote}</p>
                                <FontAwesomeIcon icon={faQuoteRight} color='#fff' size='2x'/>
                            </article>
                        )
                    })}

                    <button className='prev' onClick={() => setCurrentIndex(prevState => prevState - 1)}>
                        <FontAwesomeIcon icon={faAnglesLeft} color='#fff' size='2x'/>
                    </button>

                    <button className='next' onClick={() => setCurrentIndex(prevState => prevState + 1)}>
                        <FontAwesomeIcon icon={faAnglesRight} color='#fff' size='2x'/>
                    </button>
                </div>
            </section>
            <Loader type="pacman" active/>
        </>

    );
};

export default Slider;