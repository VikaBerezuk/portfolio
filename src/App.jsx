import './App.scss';
import {Route, Routes} from "react-router-dom";
import Layout from './components/Layout'
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import CurrencyConvertor from "./components/Portfolio/CurrencyConvertor";
import Users from "./components/Portfolio/PortfolioUsers";
import Photo from "./components/Portfolio/Photo";
import Quiz from "./components/Portfolio/Quiz";
import Whether from "./components/Portfolio/Whether";
import Slider from "./components/Portfolio/Slider";
import {createContext, useState} from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
        localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div id={theme}>
                <div className='switch'>
                    <label>{theme === 'light' ? 'Light Mode' : "Dark Mode"}</label>
                    <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'}/>
                </div>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="about" element={<About/>}/>
                        <Route path="/portfolio" element={<Portfolio/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/convector" element={<CurrencyConvertor />}/>
                        <Route path="/photo" element={<Photo/>}/>
                        <Route path="/user" element={<Users/>}/>
                        <Route path="/quiz" element={<Quiz/>}/>
                        <Route path="/whether" element={<Whether/>}/>
                        <Route path="/slider" element={<Slider/>}/>
                    </Route>
                </Routes>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
