import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ErrorPage from "./pages/ErrorPage";
import HomePageWithNavigate from "./pages/HomePageWithNavigate";
import projectsData from "./projects-data.json";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/*   Add <Route /> components between <Routes> and </Routes>   */}
      <Routes>
        // <Route path="/" element={<HomePage />} />
        <Route path="/" element={<HomePageWithNavigate />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/projects"
          element={<ProjectsPage projects={projectsData} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
