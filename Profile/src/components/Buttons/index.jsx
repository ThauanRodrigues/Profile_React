import styles from "./styles.module.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Button({ githubUrl, linkedinUrl, instaUrl }) {
  return (
    <div className={styles.links}>
      <a href={githubUrl} target="_blank">
        <FaGithub className={styles.icons} />
        GitHub
      </a>
      <a href={linkedinUrl} target="_blank">
        <FaLinkedin className={styles.icons} />
        Linkedin
      </a>
      <a href={instaUrl} target="_blank">
        <FaInstagram className={styles.icons} />
        Instagram
      </a>
    </div>
  );
}
