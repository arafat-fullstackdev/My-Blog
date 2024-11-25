import { BrowserRouter, Routes, Route } from "react-router-dom"; // Make sure BrowserRouter is imported
import "./App.css";
import NavBar from "./component/NavBar/NavBar";
import HomePage from "./component/Template/HomePage";
import Post from "./component/Template/Post";
import About from "./component/Template/About";
import Contact from "./component/Template/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/post" element={<Post />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
