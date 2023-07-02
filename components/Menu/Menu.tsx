import React, { useRef, useState } from "react";
import Slide from "@mui/material/Slide";
import classes from "../Header/header.module.css";
import Image from "next/image";
import { SlideProps } from "../../interfaces/slideProps";
import { Col, Container, Row } from "reactstrap";
import closeMenuIcon from "../../public/close.svg";
import aboutMe from "../../public/images/aboutMe.jpg";
import services from "../../public/images/services.jpg";
import contact from "../../public/images/contact.jpg";

const Menu = ({ showSlide, toggleSlide }: SlideProps) => {
  const [hide, setHide] = useState(false);
  const [menuImage, setMenuImage] = useState("");
  const [showServices, setShowServices] = useState(false);
  const clearTimerRef: { current: NodeJS.Timeout | null } = useRef(null);

  const showedHandler = () => {
    toggleSlide(false);
    setMenuImage("");
    setShowServices(false);
  };

  const hideHandler = () => {
    if (showServices) return;
    setHide(true);
    clearTimerRef.current = setTimeout(() => setMenuImage(""), 500);
  };

  const showHandler = (imageName: string) => {
    if (clearTimerRef.current != null) {
      clearTimeout(clearTimerRef.current as NodeJS.Timeout);
    }
    setHide(false);
    setMenuImage(imageName);
    if (imageName != "services") {
      setShowServices(false);
    }
  };

  return (
    <Slide direction="left" in={showSlide} mountOnEnter unmountOnExit>
      <div className={`${classes.navigation__menu}`}>
        <header className={`${classes.header}`}>
          <Container>
            <div className={`${classes.menu__wrapper}`}>
              <div className={`${classes.name}`}>
                <p>Устина Скрипець</p>
                <p style={{ color: "#D39C50" }}>персональний стиліст</p>
              </div>
              <div className={`${classes.nav__menu}`}>
                <div className={`${classes.menu}`}>
                  <Image
                    onClick={showedHandler}
                    priority
                    src={closeMenuIcon}
                    alt="Follow me on Telegram"
                  />
                </div>
              </div>
            </div>
          </Container>
        </header>
        <section>
          <Container>
            <Row>
              <Col lg="6" md="6" className={`${classes.navigation}`}>
                <p
                  onMouseEnter={() => showHandler("aboutMe")}
                  onMouseLeave={() => hideHandler()}
                >
                  ПРО МЕНЕ
                </p>
                <p
                  onMouseEnter={() => showHandler("services")}
                  onMouseLeave={() => hideHandler()}
                  onClick={() => {
                    setShowServices(true);
                    setHide(false);
                  }}
                >
                  ПОСЛУГИ
                </p>
                <p
                  onMouseEnter={() => showHandler("contact")}
                  onMouseLeave={() => hideHandler()}
                >
                  КОНТАКТИ
                </p>
              </Col>
              {!showServices && (
                <Col
                  lg="6"
                  md="6"
                  className={`${classes.menu__image} ${
                    hide ? classes.hide : classes.show
                  }`}
                >
                  {menuImage === "aboutMe" && (
                    <Image
                      className={`${classes.image}`}
                      priority
                      src={aboutMe}
                      alt="About me"
                    />
                  )}
                  {menuImage === "services" && (
                    <Image
                      className={`${classes.image}`}
                      priority
                      src={services}
                      alt="Services"
                    />
                  )}
                  {menuImage === "contact" && (
                    <Image
                      className={`${classes.image}`}
                      priority
                      src={contact}
                      alt="Contact"
                    />
                  )}
                </Col>
              )}
              {showServices && (
                <Col
                  lg="6"
                  md="6"
                  className={`${classes.menu__services} ${
                    hide ? classes.hide : classes.show
                  }`}
                >
                  <p>розбір гардеробу</p>
                  <p>карта стилю</p>
                  <p>капсульний гардероб</p>
                  <p>стилізація на зйомку</p>
                  <p>абонемент на місяць</p>
                </Col>
              )}
            </Row>
          </Container>
        </section>
      </div>
    </Slide>
  );
};

export default Menu;