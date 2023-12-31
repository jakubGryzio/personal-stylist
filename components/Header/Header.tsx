import classes from "./header.module.css";
import { Container } from "reactstrap";
import Image from "next/image";
import telegramIcon from "../../public/telegram.svg";
import tikTokIcon from "../../public/tiktok.svg";
import instagramIcon from "../../public/instagram.svg";
import menuIcon from "../../public/menu.svg";
import { SlideProps } from "../../interfaces/slideProps";
import Link from "next/link";

const Header = ({ toggleSlide }: SlideProps) => {
  return (
    <header className={`${classes.header} ${classes.header__sticky}`}>
      <Container>
        <div className={`${classes.nav__wrapper}`}>
          <div className={`${classes.name}`}>
            <Link href="/">
              <p>Устина Скрипець</p>
              <p style={{ color: "#D39C50" }}>персональний стиліст</p>
            </Link>
          </div>
          <div className={`${classes.nav__menu}`}>
            <div className="d-flex alin-items-center bg-transparent gap-3 mb-0">
              <Link
                href="https://t.me/ustynaskrypets"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  className={`${classes.social}`}
                  priority
                  src={telegramIcon}
                  alt="Follow me on Telegram"
                />
              </Link>
              <Link
                href="https://www.tiktok.com/@ustyna.skrypets"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  className={`${classes.social}`}
                  priority
                  src={tikTokIcon}
                  alt="Follow me on TikTok"
                />
              </Link>
              <Link
                href="https://www.instagram.com/ustyna.skrypets?igshid=Y2IzZGU1MTFhOQ=="
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  className={`${classes.social}`}
                  priority
                  src={instagramIcon}
                  alt="Follow me on Instagram"
                />
              </Link>
            </div>
            <div className={`${classes.menu}`}>
              <Image
                onClick={() => toggleSlide(true)}
                priority
                src={menuIcon}
                alt="Follow me on Telegram"
              />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
