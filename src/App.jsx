import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import Footer from "./components/Footer";  // import footer

function App() {
  return (
    <div className="app">
      <header className="header">
        <Link to="/" className="logo">🍳 Recipe Finder</Link>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </main>

      <Footer /> 
    </div>
  );
}

export default App;
