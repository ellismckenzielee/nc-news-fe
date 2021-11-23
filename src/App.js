import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Articles from "./components/Articles";
import ArticleDetail from "./components/ArticleDetail";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";

import "./App.css";
import { useContext, useState } from "react";
import { UserContext } from "./contexts/UserContext";

function App() {
  const user = useContext(UserContext);
  console.log("USER", user);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/articles" />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:article_id" element={<ArticleDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
