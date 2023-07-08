import React from "react";
import { Col, Container, Row } from "reactstrap";
import classes from "./footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <Container>
        <Row>
          <Col lg="12" className={classes.footer__top}>
            <div className={classes.footer__copyright}>
              <p>&copy; Copyright {year} - developed by Jakub Gryzio</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
