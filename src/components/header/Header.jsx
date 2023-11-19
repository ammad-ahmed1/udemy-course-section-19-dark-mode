import React, { useState } from "react";
import logo from "../../assets/imgs/vite.svg";
import { FaMoon, FaSun } from "react-icons/fa";
import "./Header.css";
const Header = ({ myTheme, onToggleTheme }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const handleToggleTheme = () => {
    console.log(myTheme, "In header");
    onToggleTheme();
  };
  return (
    <header data-theme={myTheme}>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="vite-logo" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
        {/* <div>
          <span className="toggle-btn">
            <div>
              <span className="toggle-btn">
                <FaMoon color="pink" size={10} />
                <FaSun color="pink" size={10} />
                <div className="ball"></div>
              </span>
            </div>
          </span>          
        </div> */}
        <div className="toggle-btn-div">
          <button className="toggle-btn" onClick={(e) => handleToggleTheme()}>
            {myTheme === "light" ? (
              <FaSun color="pink" size={16} />
            ) : (
              <FaMoon color="pink" size={16} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
