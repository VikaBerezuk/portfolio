import LogoS from '../../assets/images/logo.svg';
import './index.scss';
import {useOnScreen} from "../../hooks/useOnScreen";

const Logo = () => {
    const [refTitle, visibleTitle] = useOnScreen({threshold: 0.5});

    return (
        <div className="logo-container" ref={refTitle}>
            <img style={{opacity: visibleTitle ? 1 : 0, transitionDelay: visibleTitle ? '1.5s' : '0s'}}
                 className="solid-logo" src={LogoS} alt="JavaScript,  Developer"/>
            <svg style={{opacity: visibleTitle ? 1 : 0, transitionDelay: visibleTitle ? '2.5s' : '0s'}}
                 width="700px" height="700px" version="1.0" viewBox="0 0 559 897" xmlns="http://www.w3.org/2000/svg">
                <g className="svg-container" transform="translate(0 457) scale(.3 -.3)" fill="none">
                    <path d="M582 1444 c51 -84 356 -614 362 -629 7 -18 9 -17 23 11 l16 32 -138 238 c-76 132 -144 249
                        -151 261 -8 12 -14 26 -14 30 0 4 39 6 87 5 l88 -4 180 -314 c99 -173 181 -321 183 -329 3 -11 -56
                        -131 -75 -155 -5 -5 -12 6 -59 91 l-32 57 24 43 c23 39 24 45 11 71 l-14 29 -41 -71 -41 -70 70
                        -121 c38 -67 69 -125 69 -130 0 -5 5 -9 10 -9 6 0 10 5 10 11 0 6 31 64 69 129 l69 119 -34 57
                        c-19 31 -34 58 -34 59 0 2 -23 43 -51 92 -28 48 -60 103 -70 121 -11 18 -26
                        43 -33 55 -15 23 -20 31 -121 211 l-60 106 -115 0 c-63 0 -133 3 -154 7 -23 3
                        -37 2 -34 -3z M1358 1376 c-22 -39 -72 -124 -109 -189 -38 -65 -69 -124 -69 -130 0
                        -7 7 -20 14 -30 13 -16 25 0 122 172 l109 191 88 0 c48 0 87 -2 87 -5 0 -3
                        -13 -26 -29 -52 -16 -27 -85 -145 -153 -263 -122 -211 -124 -216 -109 -241 16
                        -26 17 -25 190 278 96 167 178 306 183 309 4 3 8 11 8 17 0 9 -40 12 -146 13 l-145 1 -41 -71z"/>
                </g>
            </svg>
        </div>
    );
}

export default Logo;