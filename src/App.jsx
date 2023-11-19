import { useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import useLocalStorage from "use-local-storage";
import "./App.css";
import Grid from "./components/grid/Grid";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    console.log(theme);
  };
  return (
    <div className="main">
      <Header myTheme={theme} onToggleTheme={toggleTheme} />
      <hr />
      <Hero myTheme={theme} />
      <Grid myTheme={theme} />
      <hr />
      <Footer myTheme={theme} />
      <p
        style={{ textAlign: "center", backgroundColor: "grey", color: "#fff" }}
        myTheme={theme}
      >
        Just a space
      </p>
    </div>
  );
}

export default App;
