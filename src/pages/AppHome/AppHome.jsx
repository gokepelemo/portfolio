import './AppHome.css';
import { Link } from 'react-router-dom'

export default function AppHome() {
    document.title = 'Portfolio - Goke Pelemo'
  return (
    <>
      <div className="row mx-2 mb-5">
        <div className="col-md-12 p-5">
            <p className="portfolioIntro h1">
                In a small world of many wonders.
            </p>
            <p className="portfolioIntro h1">
                A fresh code wrangler ready to build prototypes and create experimental products.
            </p>
            <p className="portfolioIntro h1">
                I attended General Assembly's SEI program from August to November 2023.
            </p>
            <p className="portfolioIntro h1">
                Here are a few projects that I've worked on.
            </p>
            <p className="portfolioIntro portfolioStart h1">
            <Link to="/">
                ❤️ <span className="navFont">→</span>
            </Link>
            </p>
        </div>
      </div>
    </>
  );
}
