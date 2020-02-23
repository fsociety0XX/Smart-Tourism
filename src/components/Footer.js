import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../App.css";
import { ReactComponent as Facebook } from "../assets/svg/facebook.svg";
import { ReactComponent as Twitter } from "../assets/svg/twitter.svg";
import { ReactComponent as Linkedin } from "../assets/svg/linkedin.svg";
import { ReactComponent as Instagram } from "../assets/svg/instagram.svg";

class Footer extends Component {
  render() {
    return (
      <div className="subComponent-lg" id="footerBody">
        <Container>
          <header className="headerTitle text-center">
            <p>
              <b>CONNECT WITH US NOW</b>
            </p>
          </header>
          <footer className="svg-group text-center">
            <Row>
              <Col md="3" xs="6">
                <div className="svg-card-3">
                  <a href="https://www.facebook.com/gujtourism/">
                    <Facebook width="50" height="55" strokeWidth="1" />
                  </a>
                </div>
              </Col>
              <Col md="3" xs="6">
                <div className="svg-card-3">
                  <a href="https://twitter.com/GujaratTourism">
                    <Twitter width="55" height="55" strokeWidth="1" />
                  </a>
                </div>
              </Col>
              <Col md="3" xs="6">
                <div className="svg-card-3">
                  <a href="https://www.linkedin.com/in/kushagra-garg-36417517b/">
                    <Linkedin width="55" height="55" strokeWidth="1" />
                  </a>
                </div>
              </Col>
              <Col md="3" xs="6">
                <div className="svg-card-3">
                  <a href="https://www.instagram.com/gujarattourism/">
                    <Instagram width="55" height="55" strokeWidth="1" />
                  </a>
                </div>
              </Col>
            </Row>
            <hr />
            <br />
            <p>copyright 2020 | PARUL UNIVERSITY</p>
          </footer>
        </Container>
      </div>
    );
  }
}

export default Footer;
