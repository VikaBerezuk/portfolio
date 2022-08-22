import './index.scss';
import Logo from '../../assets/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faSkype, faTelegram } from '@fortawesome/free-brands-svg-icons';
import {faHome, faUser, faEnvelope, faClone, faBars, faClose} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import {useState} from "react";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={Logo} alt="Logo"/>
          <div className="sub-logo">Bereziuk</div>
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
          <NavLink
              onClick={() => setShowNav(false)}
              exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
          </NavLink>
          <NavLink
              onClick={() => setShowNav(false)}
              activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
          </NavLink>
          <NavLink
              onClick={() => setShowNav(false)}
              activeclassname="active" className="portfolio-link" to="/portfolio">
            <FontAwesomeIcon icon={faClone} color="#4d4d4e"/>
          </NavLink>
          <NavLink
              onClick={() => setShowNav(false)}
              activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
          </NavLink>
          <FontAwesomeIcon
              onClick={() => setShowNav(false)}
              className="close-icon" size="3x" icon={faClose} color='#fff'/>
        </nav>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/viktoria-bereziuk-6633a719a/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
            </a>
          </li>
          <li>
            <a href="https://github.com/VikaBerezuk" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
            </a>
          </li>
          <li>
            <a href="https://t.me/ll_vi_ll" rel="noreferrer" target="_blank">
              <FontAwesomeIcon icon={faTelegram} color="#4d4d4e"/>
            </a>
          </li>
          <li>
            <a href="https://join.skype.com/invite/pHMm7SVKREiC" rel="noreferrer" target="_blank">
              <FontAwesomeIcon icon={faSkype} color="#4d4d4e"/>
            </a>
          </li>
        </ul>
        <FontAwesomeIcon onClick={() => setShowNav(true)} icon={faBars} color='#fff' size="3x" className="hamburger-icon"/>
      </div>
  );
}

export default Sidebar;
