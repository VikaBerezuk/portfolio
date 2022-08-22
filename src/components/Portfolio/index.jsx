import React from 'react';
import {NavLink} from "react-router-dom";
import './index.scss';
import Loader from "react-loaders";
import TagCloud from "../TagCloud";
import Title from "../Title";

const Portfolio = () => {
    return (
        <>
            <Title strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}/>
            <div className='container portfolio-page'>
                <div className="text-zone">
                    <div className='portfolio'>
                        <NavLink className="portfolio-link" to="/convector">
                            Currency convertor
                        </NavLink>
                        {/*<NavLink className="portfolio-link" to="/whether">
                            Whether
                        </NavLink>*/}
                        {/*<NavLink className="portfolio-link" to="/photo">
                            Photo
                        </NavLink>*/}
                        <NavLink className="portfolio-link" to="/user">
                            User
                        </NavLink>
                        <NavLink className="portfolio-link" to="/slider">
                            Slider
                        </NavLink>
                        <NavLink className="portfolio-link" to="/quiz">
                            Quiz
                        </NavLink>
                    </div>
                </div>
                <div className="map-wrap">
                    <TagCloud />
                </div>
            </div>
            <Loader type="pacman" active/>
        </>
    );
};

export default Portfolio;