import "./NavBar.css";
import logo from "../../logo.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import slugify from "slugify";
import { NavLink } from "react-router-dom";

export default function NavBar({ portfolioData }) {
  return (
    <header className="appHeader">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <NavLink to="/" className="brand">
            <Navbar.Brand className="brand">
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top logo"
              />{" "}
              Goke Pelemo <span className="purpose">portfolio</span>
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {Object.keys(portfolioData).map((portfolioCategory, index) => {
                return (
                  <NavDropdown
                    title={portfolioCategory}
                    id="basic-nav-dropdown"
                    key={index}
                  >
                    <NavLink
                      to={`${portfolioCategory.replace(" ", "").toLowerCase()}`}
                      className="dropdown-item"
                      role="button"
                      tabIndex="0"
                      data-rr-ui-dropdown-item
                    >
                      {portfolioCategory}
                    </NavLink>
                    <NavDropdown.Divider />
                    {Object.values(portfolioData[portfolioCategory]).map(
                      (item, index) => {
                        return portfolioCategory !== "Others" ? (
                          <NavLink
                            data-rr-ui-dropdown-item
                            className="dropdown-item"
                            role="button"
                            tabIndex="0"
                            key={index}
                            to={`/${portfolioCategory
                              .replace(" ", "")
                              .toLowerCase()}/${slugify(
                              item.name.toLowerCase()
                            )}`}
                          >
                            {item.name}
                          </NavLink>
                        ) : (
                          <NavLink
                            data-rr-ui-dropdown-item
                            className="dropdown-item"
                            role="button"
                            tabIndex="0"
                            key={index}
                            to={item.link}
                            target="_blank"
                          >
                            {item.name}
                          </NavLink>
                        );
                      }
                    )}
                  </NavDropdown>
                );
              })}
              <div className="nav-item">
                <Nav.Link
                  href={`https://gokepelemo.com/`}
                  role="button"
                  tabIndex="0"
                >
                  Blog
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
