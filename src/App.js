import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Course from "./pages/Course";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Accounting from "./pages/Accounting.js";
import ColorTheory from "./pages/ColorTheory.js";
import Capstone from "./pages/Capstone.js";
import MolloyStudentTour from "./pages/MolloyStudentTour.js";
import TattooHistory from "./pages/TattooHistory.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" exact element={<Home />} />
          <Route path="/" exact element={<Login />} />
          <Route path="/course" exact element={<Course />} />
          <Route path="/accounting" exact element={<Accounting />} />
          <Route path="/color" exact element={<ColorTheory />} />
          <Route path="/capstone" exact element={<Capstone />} />
          <Route path="/mst" exact element={<MolloyStudentTour />} />
          <Route path="/tattoo" exact element={<TattooHistory />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
