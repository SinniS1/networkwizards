import ContentPage from "./components/ContentPage/ContentPage";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    <div className="App">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <ContentPage darkMode={darkMode} />
    </div>
  );
}

export default App;
