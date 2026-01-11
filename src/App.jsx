import Header from "./Header";
import Home from "./Home"
import Footer from "./Footer"
import { useState } from "react";
import ThemeContext from "./ThemeContext";
import Login from "./Login";
const App = () => {
  const [theme,setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme ((prev) => (prev === "light"? "dark" : "light"));
  };
  return (
    <>
    <ThemeContext.Provider value = {{ theme, toggleTheme}}>
    <Header/>
    <Login/>
    <Home/>
    <Footer/>
    </ThemeContext.Provider>
    </>

  )
}

export default App