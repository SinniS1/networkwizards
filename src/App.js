import ContentPage from "./components/ContentPage/ContentPage";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Coding from "./Pages/Coding"
import Hacking from "./Pages/Hacking"
import Networking from "./Pages/Networking"
import Error from "./Pages/Error"

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    <Routes>
      <Route path="/" element={<Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} >
        <Route index element={<ContentPage darkMode={darkMode} />} />
        <Route path="/Coding" element={<Coding darkMode={darkMode} />} />
        <Route path="/Hacking" element={<Hacking darkMode={darkMode} />} />
        <Route path="/Networking" element={<Networking darkMode={darkMode} />} />
        <Route path="/*" element={<Error />} />
      </Route>
      {/* <ContentPage darkMode={darkMode} /> */}
    </Routes>
  );
}

export default App;
