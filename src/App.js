import { BrowserRouter, Routes, Route } from "react-router-dom"; // Make sure BrowserRouter is imported
import "./App.css";
import NavBar from "./component/NavBar/NavBar";
import HomePage from "./component/Template/HomePage";
import Post from "./component/Template/Post";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
