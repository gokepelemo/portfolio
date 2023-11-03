import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AppHome from "../../pages/AppHome/AppHome";
import NavBar from "../../components/NavBar/NavBar";
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import PortfolioCategory from "../PortfolioCategory/PortfolioCategory";

const portfolioData = {
  Frontend: [
    {
      name: "Mancala",
      link: "https://gokepelemo.github.io/mancala/",
      repository: "https://github.com/gokepelemo/mancala",
    },
    {
      name: "Tic-Tac-Toe",
      link: "https://gokepelemo.github.io/tic-tac-toe/",
      repository: "https://github.com/gokepelemo/tic-tac-toe",
    },
    {
      name: "Connect Four",
      link: "https://gokepelemo.github.io/connect-four/",
      repository: "https://github.com/gokepelemo/connect-four",
    },
  ],
  "Full Stack": [
    {
      name: "Biensperience",
      link: "https://biensperience.onrender.com/",
      repository: "https://github.com/gokepelemo/biensperience",
    },
    {
      name: "Notes and Things",
      link: "https://notes-and-things.onrender.com/",
      repository: "https://github.com/gokepelemo/notes-and-things",
    },
    {
      name: "Personal Portfolio",
      link: "https://portfolio.gokepelemo.com/",
      repository: "https://github.com/gokepelemo/portfolio",
    },
  ],
  Others: [
    {
      name: "Replit",
      link: "https://replit.com/@GokePelemo",
    },
    {
      name: "Codepen",
      link: "https://codepen.io/gokepelemo",
    },
    {
      name: "Code Sandbox",
      link: "https://hc8fqx.csb.app/",
    },
  ],
};

function App() {
  return (
    <>
      <NavBar portfolioData={portfolioData} />
      <main className="app container container-fluid">
        <Routes>
          <Route path="/" element={<AppHome />} />
          <Route path="/:portfolioCategory" element={<PortfolioCategory portfolio={portfolioData} />} />
          <Route path="/:portfolioCategory/:portfolioId" element={<PortfolioItem portfolio={portfolioData} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
