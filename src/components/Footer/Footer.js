import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Footer.module.css";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <h3 className={style.Header}>
          Nazwa firmy - wszelkie prawa zastrzeżone, 2019
        </h3>

        <div>
          <FontAwesomeIcon icon={faInstagram} className={style.link} />
          <FontAwesomeIcon
            icon={faFacebookSquare}
            className={style.linkMargin}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
