import React, { Component } from "react";
import i18n from "../locales/i18n";
import { Navbar, Nav, Image, Row, Col, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ReactCountryFlag from "react-country-flag";
import ScrollToTop from "./ScrollTotop";
import { FaChevronRight } from "react-icons/fa";
const StylesPop = styled.div`
  .text-nav-pop {
    textdecoration: none;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
  }

  .navbar-toggler {
    border: 1px solid white;
  }

  .text-country-selected-pop {
    color: #fff;
    fontWeight: 100,
    fontSize: 14,
    padding-left: 10px;
    padding-right: 5px;
  }

  .text-country {
    fontWeight: 100,
    fontSize: 14,
    padding-left: 10px;
    padding-right: 5px;
  }

  .dropdown-toggle {
    border: none;
    outline: none;
    text-decoration: none;
  }

  .navbar-light-pop .navbar-toggler-icon-pop {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(0, 0, 0, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }
`;

export default class NavBarPopup extends Component {
  async componentDidMount() {
    var flag = await localStorage.getItem("@LANGUAGE_ICON");
    var lang = await localStorage.getItem("@LANGUAGE_TEXT");
    var lable = await localStorage.getItem("@LANGUAGE_LABLE");
    await this.setState({
      iconLanguage: flag,
      textLanguage: lang,
      lableLanguage: lable,
    });
  }

  state = {
    iconLanguage: "",
    textLanguage: "",
    lableLanguage: "",
  };

  changeLanguageLabel = async (lang, flag, lable) => {
    await i18n.changeLanguage(lang);
    await localStorage.setItem("@LANGUAGE_ICON", flag);
    await localStorage.setItem("@LANGUAGE_TEXT", lang);
    await localStorage.setItem("@LANGUAGE_LABLE", lable);
    await this.setState({
      iconLanguage: flag,
      textLanguage: lang,
      lableLanguage: lable,
    });
    this.props.changeLanguageLabel(lang, flag, lable);
  };

  render() {
    return (
      <StylesPop>
        <div
          key={1}
          style={{
            backgroundColor: "rgba(0,0,0,1)",
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: 100,
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(70,70,70,1)",
              width: "100%",
              paddingLeft: "5px",
              paddingRight: "5px",
            }}
          >
            <Row>
              {/* <h2 style={{ position: 'fixed', top: 0 ,color:'white'}}>Scroll {this.state.isTop ? 'down' : 'up'}!</h2> */}
              <Col style={{ left: 20, color: "#fff" }}>
                <div
                  style={{
                    backgroundColor: "rgba(0,0,0,.2)",
                    display: "inline-flex",
                    padding: 10,
                  }}
                >
                  <Link
                    to="/postJob"
                    className="text-nav-pop"
                    style={{
                      fontWeight: 100,
                      fontSize: 14,
                    }}
                  >
                    ประกาศหาแรงงาน <FaChevronRight />
                  </Link>
                </div>
              </Col>
              <Col style={{ textAlign: "right", right: 20 }}>
                <Dropdown>
                  <Dropdown.Toggle variant="link" id="dropdown-basic">
                    <ReactCountryFlag
                      countryCode={this.state.iconLanguage}
                      svg
                    />
                    <span
                      className="text-country-selected"
                      style={{
                        fontWeight: 100,
                        fontSize: 14,
                      }}
                    >
                      {this.state.lableLanguage}
                    </span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => {
                        this.changeLanguageLabel("th", "TH", "ไทย");
                      }}
                    >
                      <ReactCountryFlag countryCode="TH" svg />
                      <span className="text-country">ไทย</span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        this.changeLanguageLabel("en", "US", "English");
                      }}
                    >
                      <ReactCountryFlag countryCode="US" svg />
                      <span className="text-country">English</span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        this.changeLanguageLabel("la", "LA", "ລາວ");
                      }}
                    >
                      <ReactCountryFlag countryCode="LA" svg />
                      <span className="text-country">ລາວ</span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        this.changeLanguageLabel("mm", "MM", "မြန်မာဘာသာ");
                      }}
                    >
                      <ReactCountryFlag countryCode="MM" svg />
                      <span className="text-country">မြန်မာဘာသာ</span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        this.changeLanguageLabel("kh", "KH", "ភាសាខ្មែរ");
                      }}
                    >
                      <ReactCountryFlag countryCode="KH" svg />
                      <span className="text-country">ភាសាខ្មែរ</span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </div>

          <Navbar
            className="navbar-dark"
            expand="lg"
            style={{ paddingLeft: "11%", paddingRight: "11%" }}
            // fixed="top"
            // className="navbar navbar-default navbar-fixed-top"
          >
            <Navbar.Brand>
              <Link to="/home">
                <Image
                  src="images/logo6.png"
                  rounded
                  style={{ height: "30px" }}
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle
              className="navbar-toggler-icon-pop"
              aria-controls="basic-navbar-nav"
            />

            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav>
                <Nav.Link>
                  <Link to="/jobs" className="text-nav-pop">
                    หางาน
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={`/postJob`} className="text-nav-pop">
                    ลงประกาศงาน
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={`/editPost/0001`} className="text-nav-pop">
                    ลงประกาศ (BETA)
                  </Link>
                </Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </StylesPop>
    );
  }
}
