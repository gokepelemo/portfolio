import "./PortfolioItem.css";
import { useParams, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import slugify from "slugify";
import { ListGroup, Stack } from "react-bootstrap";

export default function PortfolioItem({ portfolio }) {
  const { portfolioCategory, portfolioId } = useParams();
  const portfolioIdx = Object.keys(portfolio)
    .map((item, index) => [slugify(item.toLowerCase().replace(" ", "")), index])
    .filter((item) => portfolioCategory === item[0])[0][1];
  const portfolioData = Object.values(portfolio)[portfolioIdx].filter(
    (item) => slugify(item.name.toString().toLowerCase()) === portfolioId
  )[0];
  document.title = `${portfolioData.name} (${Object.keys(portfolio)[portfolioIdx]}) | Portfolio - Goke Pelemo`
  return (
    <div>
      <div className="row mx-2 mb-5">
        <div className="col-md-6 p-5">
          <h2>{portfolioData.name}</h2>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <Nav variant="pills" activeKey="1">
            <Nav.Item>
              <Nav.Link eventKey="1" href="#/home">
                screenshot
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>
      <div className="row mx-2 mb-5">
        <img
          src={portfolioData.image}
          className="align-items-center justify-content-center img-fluid d-flex"
          alt={portfolioData.name}
        />
      </div>
      <div className="row mx-2 mb-5 d-flex">
        <div className="col-md-6 p-5">
          <h3 className="mb-3">Technologies Used</h3>
          <ListGroup>
          {portfolioData.technologies.map(technology => <ListGroup.Item>{technology}</ListGroup.Item>)}
          </ListGroup>
          </div>
        <div className="col-md-6 p-5">
          <h3 className="mb-3">Description</h3>
          <Stack gap={3}>
            <p>{portfolioData.description}</p>
            {portfolioData.link && <Link to={portfolioData.link}>Application</Link>}
            {portfolioData.repository && <Link to={portfolioData.repository}>Git Repository</Link>}
          </Stack>
          </div>
      </div>
    </div>
  );
}
