import type { NextComponentType } from "next";
import classes from "./header.module.css";
import { Container } from "reactstrap";

const Header: NextComponentType = () => {
  return (
    <header className={`${classes.header}`}>
      <Container>
        <div className={`${classes.nav__wrapper}`}>
          <div className={`${classes.name}`}>
            <p>
              Устина Скрипець <br />
              персональний стиліст
            </p>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
