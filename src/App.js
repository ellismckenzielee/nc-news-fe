import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Articles from "./components/Articles";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/articles" />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
