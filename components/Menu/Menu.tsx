import React, { SyntheticEvent, useRef, useState } from "react";
import Slide from "@mui/material/Slide";
import classes from "../Header/header.module.css";
import Image from "next/image";
import { SlideProps } from "../../interfaces/slideProps";
import { Col, Container, Row } from "reactstrap";
import closeMenuIcon from "../../public/close.svg";
import aboutMe from "../../public/images/aboutMe.jpg";
import services from "../../public/images/services.jpg";
import contact from "../../public/images/contact.jpg";
import Link from "next/link";

const Menu = ({ showSlide, toggleSlide }: SlideProps) => {
  const [hide, setHide] = useState(false);
  const [menuImage, setMenuImage] = useState("");
  const [showServices, setShowServices] = useState(false);
  const clearTimerRef: { current: NodeJS.Timeout | null } = useRef(null);

  const sliderHandler = () => {
    toggleSlide(false);
    setMenuImage("");
    setShowServices(false);
  };

  const hideHandler = () => {
    if (showServices) return;
    setHide(true);
    clearTimerRef.current = setTimeout(() => setMenuImage(""), 500);
  };

  const showImageHandler = (imageName: string) => {
    if (clearTimerRef.current != null) {
      clearTimeout(clearTimerRef.current as NodeJS.Timeout);
    }
    setHide(false);
    setMenuImage(imageName);
    if (imageName != "services") {
      setShowServices(false);
    }
  };

  const servicesNavigationHandler = (e: SyntheticEvent) => {
    var width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    const target = e.target as HTMLDivElement;
    if (
      !showServices ||
      !target.className.includes("navigation") ||
      width > 768
    )
      return;
    setHide(true);
    clearTimerRef.current = setTimeout(() => setShowServices(false), 400);
    setMenuImage("");
  };

  return (
    <Slide direction="left" in={showSlide} mountOnEnter unmountOnExit>
      <div className={`${classes.navigation__menu}`}>
        <header className={`${classes.header}`}>
          <Container>
            <div className={`${classes.menu__wrapper}`}>
              <div className={`${classes.name}`}>
                <Link onClick={sliderHandler} href="/">
                  <p>Устина Скрипець</p>
                  <p style={{ color: "#D39C50" }}>персональний стиліст</p>
                </Link>
              </div>
              <div className={`${classes.nav__menu}`}>
                <div className={`${classes.menu}`}>
                  <Image
                    onClick={sliderHandler}
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
              <Col
                onClick={(e: SyntheticEvent) => servicesNavigationHandler(e)}
                lg="6"
                md="6"
                className={`${classes.navigation}`}
              >
                <Link href="/#about_me">
                  <p
                    onMouseEnter={() => showImageHandler("aboutMe")}
                    onMouseLeave={() => hideHandler()}
                    onClick={sliderHandler}
                  >
                    ПРО МЕНЕ
                  </p>
                </Link>
                <p
                  onMouseEnter={() => showImageHandler("services")}
                  onMouseLeave={() => hideHandler()}
                  onClick={() => {
                    setShowServices(true);
                    setHide(false);
                  }}
                >
                  ПОСЛУГИ
                </p>
                {showServices && (
                  <div
                    className={`${classes.menu__services__sm} ${
                      hide ? classes.hide : classes.show
                    }`}
                  >
                    <Link href="/#wardrobe_analysis">
                      <p onClick={sliderHandler}>розбір гардеробу</p>
                    </Link>
                    <Link href="/#style_card">
                      <p onClick={sliderHandler}>карта стилю</p>
                    </Link>
                    <Link href="/#capsule_wardrobe">
                      <p onClick={sliderHandler}>капсульний гардероб</p>
                    </Link>
                    <Link href="/#stylization_of_shooting">
                      <p onClick={sliderHandler}>стилізація на зйомку</p>
                    </Link>
                    <Link href="/#subscription">
                      <p onClick={sliderHandler}>абонемент на місяць</p>
                    </Link>
                  </div>
                )}
                <Link href="/#contacts">
                  <p
                    onMouseEnter={() => showImageHandler("contact")}
                    onMouseLeave={() => hideHandler()}
                    onClick={sliderHandler}
                  >
                    КОНТАКТИ
                  </p>
                </Link>
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
                  <Link href="/#wardrobe_analysis">
                    <p onClick={sliderHandler}>розбір гардеробу</p>
                  </Link>
                  <Link href="/#style_card">
                    <p onClick={sliderHandler}>карта стилю</p>
                  </Link>
                  <Link href="/#capsule_wardrobe">
                    <p onClick={sliderHandler}>капсульний гардероб</p>
                  </Link>
                  <Link href="/#stylization_of_shooting">
                    <p onClick={sliderHandler}>стилізація на зйомку</p>
                  </Link>
                  <Link href="/#subscription">
                    <p onClick={sliderHandler}>абонемент на місяць</p>
                  </Link>
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
