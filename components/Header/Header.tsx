import type { NextComponentType } from "next";
import classes from "./header.module.css";
import { Col, Container, Row } from "reactstrap";
import Image from "next/image";
import telegramIcon from "../../public/telegram.svg";
import tikTokIcon from "../../public/tiktok.svg";
import instagramIcon from "../../public/instagram.svg";
import menuIcon from "../../public/menu.svg";
import closeMenuIcon from "../../public/close.svg";
import Slide from "@mui/material/Slide";
import { Fragment, useState } from "react";

const Header: NextComponentType = () => {
  const [showed, setShowed] = useState(false);

  const showedHandler = () => {
    setShowed((prev) => !prev);
  };

  return (
    <Fragment>
      <Slide direction="left" in={showed} mountOnEnter unmountOnExit>
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
          <Container>
            <Row>
              <Col lg="6" md="6" className="text-center">
                <p>ПРО МЕНЕ</p>
                <p>ПОСЛУГИ</p>
                <p>КОНТАКТИ</p>
              </Col>
              <Col lg="6" md="6" className="text-center">
                <h1>ПРО МЕНЕ</h1>
                <h1>ПОСЛУГИ</h1>
                <h1>КОНТАКТИ</h1>
              </Col>
            </Row>
          </Container>
        </div>
      </Slide>
      <header className={`${classes.header}`}>
        <Container>
          <div className={`${classes.nav__wrapper}`}>
            <div className={`${classes.name}`}>
              <p>Устина Скрипець</p>
              <p style={{ color: "#D39C50" }}>персональний стиліст</p>
            </div>
            <div className={`${classes.nav__menu}`}>
              <div className="d-flex alin-items-center gap-3 mb-0">
                <Image
                  priority
                  src={telegramIcon}
                  alt="Follow me on Telegram"
                />
                <Image priority src={tikTokIcon} alt="Follow me on TikTok" />
                <Image
                  priority
                  src={instagramIcon}
                  alt="Follow me on Instagram"
                />
              </div>
              <div className={`${classes.menu}`}>
                <Image
                  onClick={showedHandler}
                  priority
                  src={menuIcon}
                  alt="Follow me on Telegram"
                />
              </div>
            </div>
          </div>
        </Container>
      </header>
    </Fragment>
  );
};

export default Header;
