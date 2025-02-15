import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Menu from "./components/Menu";  // Assure-toi que le chemin est correct
import Gallery from "./components/Gallery/Gallery";

import TimerPage from "./components/Timer/TimerPage";  // Import de la page Timer

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/timer" element={<TimerPage />} />  {/* Ajout de la route Timer */}
      <Route path="/gallery" element={<Gallery />} />


    </Routes>
  );
}

export default App;
