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
      readme: "https://raw.githubusercontent.com/gokepelemo/mancala/main/README.md",
      description:
        "An online adaptation of Mancala, a tabletop game. I developed this for a General Assembly project. The objective is to collect the most stones by the end of the game. Two players, each with their own side, take turns playing. The game concludes when all the pits on one player's side are empty.",
      image: "https://raw.githubusercontent.com/gokepelemo/mancala/main/imgs/mancala-screencapture.gif",
      technologies: ["HTML", "CSS", "Javascript"],
    },
    {
      name: "Tic-Tac-Toe",
      link: "https://gokepelemo.github.io/tic-tac-toe/",
      repository: "https://github.com/gokepelemo/tic-tac-toe",
      readme: "https://raw.githubusercontent.com/gokepelemo/tic-tac-toe/main/README.md",
      description: "An online adaptation of the well-known X/O tabletop game, enjoyed in various cultures. It's a simple 2-player game created in Javascript, one of the early exercises in General Assembly's curriculum. I also have a Python-based CLI version on my Replit profile and a React-based version on Code Sandbox.",
      image: "https://i.imgur.com/gVPnYaG.gif",
      technologies: ["HTML", "CSS", "Javascript"],
    },
    {
      name: "Connect Four",
      link: "https://gokepelemo.github.io/connect-four/",
      repository: "https://github.com/gokepelemo/connect-four",
      readme: "https://raw.githubusercontent.com/gokepelemo/connect-four/main/README.md",
      description: "An online adaptation of the classic party game, Connect Four, primarily developed for practicing DOM manipulation in Javascript, with less emphasis on gameplay experience.",
      image: "https://i.imgur.com/734vJfl.gif",
      technologies: ["HTML", "CSS", "Javascript"],
    },
    {
      name: "Personal Portfolio",
      link: "https://portfolio.gokepelemo.com/",
      repository: "https://github.com/gokepelemo/portfolio",
      readme: "https://raw.githubusercontent.com/gokepelemo/portfolio/main/README.md",
      description: "This portfolio site is also a single-page application built using a MERN stack.",
      image: "https://i.imgur.com/anRgxel.png",
      technologies: ["HTML", "CSS", "Bootstrap", "React"],
    },
  ],
  "Full Stack": [
    {
      name: "Biensperience",
      link: "https://biensperience.onrender.com/",
      repository: "https://github.com/gokepelemo/biensperience",
      readme: "https://raw.githubusercontent.com/gokepelemo/biensperience/main/README.md",
      description: "An application that enables you to plan your experiences and share experience plans with other users. When you plan a trip, vacation, or adventure with your loved ones, you get to create a plan in that experience and mark items done as you finalize the plan. The same plan becomes available for others to plan similar experiences.",
      image: "https://raw.githubusercontent.com/gokepelemo/biensperience/main/screenshots/favorite-destinations.gif",
      technologies: ["HTML", "CSS", "Bootstrap", "React", "Express/Node.js", "MongoDB"],
    },
    {
      name: "Notes and Things",
      link: "https://notes-and-things.onrender.com/",
      repository: "https://github.com/gokepelemo/notes-and-things",
      readme: "https://raw.githubusercontent.com/gokepelemo/notes-and-things/main/README.md",
      description: "Notes and Things enables you to create a list of published books and track your progress reading those books with friends, communities and book clubs. You and any member can like and add notes to books, then share the book or reading list on social media.",
      image: "https://raw.githubusercontent.com/gokepelemo/notes-and-things/main/screenshots/add-to-reading-list.gif",
      technologies: ["HTML", "CSS", "Express/Node.js", "jQuery", "Bootstrap"],
    }
  ],
  Others: [
    {
      name: "Replit",
      link: "https://replit.com/@GokePelemo",
      otherlinks: [{name: "Py-Pac-Poe", link: "https://replit.com/@GokePelemo/Py-Pac-Poe"}, {name: "Rock Paper Scissors", link: "https://rock-paper-scissors.gokepelemo.repl.co/"}]
    },
    {
      name: "Codepen",
      link: "https://codepen.io/gokepelemo",
      otherlinks: [{name: "Markdown Previewer", link: "https://codepen.io/gokepelemo/full/zYMbMdQ"}, {name: "Random Quote Previewer", link: "https://codepen.io/gokepelemo/full/JjezopO"}]
    },
    {
      name: "Code Sandbox",
      link: "https://hc8fqx.csb.app/",
      otherlinks: [{name: "Tic-Tac-Toe", link: "https://68jrgg.csb.app/"}, {name: "React Movies", link: "https://53m58l.csb.app/"}, {name: "React To-Do", link: "https://fmknfr.csb.app/"}]
    },
  ],
};

const homeBlurb = [
  { text: "In a small world of many wonders." },
  {
    text: "A fresh code wrangler ready to build prototypes and create experimental products.",
  },
  {
    text: "I attended General Assembly's SEI program from August to November 2023.",
  },
  { text: "Here are a few projects that I've worked on." },
  {
    text: "❤️ →",
    deconstructed: true,
    classes: ["heart", "navFont"],
    link: { internal: true, url: "/frontend" },
  },
];

function App() {
  return (
    <>
      <NavBar portfolioData={portfolioData} />
      <main className="app container container-fluid">
        <Routes>
          <Route path="/" element={<AppHome homeBlurb={homeBlurb} />} />
          <Route
            path="/:portfolioCategory"
            element={<PortfolioCategory portfolio={portfolioData} />}
          />
          <Route
            path="/:portfolioCategory/:portfolioId"
            element={<PortfolioItem portfolio={portfolioData} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
