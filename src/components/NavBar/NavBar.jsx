import "./NavBar.css";
import logo from "../../logo.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import slugify from "slugify";

export default function NavBar({ portfolioData }) {
  return (
    <header className="appHeader">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/" className="brand">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top logo"
            />{" "}
            Goke Pelemo <span className="purpose">portfolio</span>
          </Navbar.Brand>
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
                    {Object.values(portfolioData[portfolioCategory]).map(
                      (item, index) => {
                        return portfolioCategory !== "Others" ? (
                          <NavDropdown.Item
                            key={index}
                            href={`/${portfolioCategory
                              .replace(" ", "")
                              .toLowerCase()}/${slugify(
                              item.name.toLowerCase()
                            )}`}
                          >
                            {item.name}
                          </NavDropdown.Item>
                        ) : (
                          <NavDropdown.Item key={index} href={item.link}>
                            {item.name}
                          </NavDropdown.Item>
                        );
                      }
                    )}
                  </NavDropdown>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
