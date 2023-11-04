import slugify from "slugify";
import "./PortfolioCategory.css";
import Stack from "react-bootstrap/Stack";
import ListGroup from "react-bootstrap/ListGroup";
import { useParams, Link } from "react-router-dom";

export default function PortfolioCategory({ portfolio }) {
  const { portfolioCategory } = useParams();
  const portfolioIdx = Object.keys(portfolio)
    .map((item, index) => [slugify(item.toLowerCase().replace(" ", "")), index])
    .filter((item) => portfolioCategory === item[0])[0][1];
  const portfolioData = Object.values(portfolio)[portfolioIdx];
  document.title = `${Object.keys(portfolio)[portfolioIdx]} | Portfolio - Goke Pelemo`
  return (
    <div>
      <div className="row mx-2 mb-5">
        <div className="col-md-12 p-5">
          <h2 className="mb-5">{Object.keys(portfolio)[portfolioIdx]}</h2>
          <ListGroup as="ul">
            {portfolioData.map((item, index) => {
              return (
                <ListGroup.Item
                  key={index}
                  className="list-group-item d-flex p-3"
                >
                  {portfolioCategory !== "others" && (
                    <div className="col-md-5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="portfolioImg img-fluid "
                      />
                    </div>
                  )}
                  <div className="col-md-7">
                    <Link
                      to={
                        portfolioCategory !== "others"
                          ? `/${portfolioCategory
                              .replace(" ", "")
                              .toLowerCase()}/${slugify(
                              item.name.toLowerCase()
                            )}`
                          : `${item.link}`
                      }
                      className="link-underline link-underline-opacity-25-hover link-underline-opacity-0"
                    >
                      <span className="display-6 fw-medium">{item.name}</span>
                    </Link>
                    <p className="my-3">{item.description}</p>
                    {item.technologies && (
                      <p className="my-3">
                        <strong>Technologies Used</strong>:{" "}
                        {item.technologies.join(", ")}
                      </p>
                    )}
                    {portfolioCategory !== "others" && (
                      <Stack direction="horizontal" gap={3}>
                        <Link
                          to={item.repository}
                          target="_blank"
                          rel="noreferrer"
                          className="nav-link lead fw-normal link-underline link-underline-opacity-25-hover link-underline-opacity-0"
                        >
                          Git Repository
                        </Link>
                        <Link
                          to={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="nav-link lead fw-normal link-underline link-underline-opacity-25-hover link-underline-opacity-0"
                        >
                          Application
                        </Link>
                      </Stack>
                    )}
                    {item.otherlinks && (
                      <Stack direction="horizontal" gap={3}>
                        {item.otherlinks.map((link, index) => {
                          return (
                            <Link
                              to={link.link}
                              target="_blank"
                              rel="noreferrer"
                              className="nav-link lead fw-normal link-underline link-underline-opacity-25-hover link-underline-opacity-0 p-3"
                              key={index}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-box-arrow-up-right me-1"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                                />
                                <path
                                  fillRule="evenodd"
                                  d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                                />
                              </svg>
                              {"  "}
                              {link.name}
                            </Link>
                          );
                        })}
                      </Stack>
                    )}
                  </div>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
      </div>
    </div>
  );
}
