import "./App.css";
import Landingpage from "./components/landing/landing";
import Inicio from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/Inicio" element={<Inicio />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
