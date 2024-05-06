import styles from "./styles.module.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const ButtonLinks = (props) => (
  <a className={styles.wrapper} href={props.href} target="_blank">
    {props.children}
  </a>
);
export default ButtonLinks;
