import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Articles from "./components/Articles";
import CreateUser from "./components/CreateUser";
import ArticleDetail from "./components/ArticleDetail";
import CreateArticle from "./components/CreateArticle";
import Users from "./components/Users";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import UserDetail from "./components/UserDetail";
import ResourceNotFound from "./components/ResourceNotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/articles" />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/create" element={<CreateArticle />} />
          <Route path="/articles/:article_id" element={<ArticleDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users/create" element={<CreateUser />} />
          <Route path="/users/:username" element={<UserDetail />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<ResourceNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
