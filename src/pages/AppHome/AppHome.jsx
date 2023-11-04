import "./AppHome.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function AppHome({ homeBlurb }) {
  document.title = "Portfolio - Goke Pelemo";
  const [blurb, setBlurb] = useState([]);
  async function updateText() {
    let tmpArr = [...blurb];
    function updateArr(arr, index) {
      tmpArr.push(arr[index]);
      setBlurb([...tmpArr]);
    }
    homeBlurb.forEach((text, index, arr) => {
      updateArr(arr, index);
    });
  }
  useEffect(() => {
    updateText();
  }, []);
  return (
    <>
      <div className="row mx-2 mb-5">
        <div className="col-md-12 p-5">
          {blurb.map((text, index) => {
            let textArr = text.deconstructed ? text.text.split(" ") : [];
            textArr = textArr.map((textDeconstruct, index, arr) => {
              return index + 1 === arr.length ? (
                text.link.internal ? (
                  <Link to={text.link.url} key={index}>
                    <span className={text.classes[index]}>
                      {textDeconstruct}
                    </span>
                  </Link>
                ) : (
                  <a
                    href={text.link.url}
                    target="portfolio"
                    rel="noreferrer"
                    title={textDeconstruct}
                    key={index}
                  >
                    <span className={text.classes[index]}>
                      {textDeconstruct}
                    </span>
                  </a>
                )
              ) : (
                <span className={text.classes[index]} key={index}>{textDeconstruct}</span>
              );
            });
            return !text.deconstructed ? (
              <p className="portfolioIntro h1" key={index}>{text.text}</p>
            ) : (
              <p className="portfolioIntro portfolioStart h1" key={index}>{textArr}</p>
            );
          })}
        </div>
      </div>
    </>
  );
}
