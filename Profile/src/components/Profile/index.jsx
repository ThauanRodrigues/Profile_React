import { useState } from "react";
import ButtonLinks from "../ButtonLinks";
import Title from "../Title";
import ProfileSection from "./ProfileSection";
import styles from "./styles.module.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Profile({
  avatar,
  name,
  bio,
  email,
  phone,
  githubUrl,
  linkedinUrl,
  instaUrl,
}) {
  const [seguirText, setSeguirText] = useState("Seguir");

  function handleClick(ev) {
    alert("Você agora está seguindo!");
    setSeguirText("Seguindo");
  }

  return (
    <div className={styles.container}>
      <div className={styles.buttonFollowHeader}>
        <button className={styles.followButton} onClick={handleClick}>
          {seguirText}
        </button>
      </div>

      <img className={styles.avatar} src={avatar} alt={name} />

      <Title>
        <span>{name}</span>
      </Title>

      <ProfileSection>{bio}</ProfileSection>
      <ProfileSection>{phone}</ProfileSection>
      <ProfileSection>{email}</ProfileSection>

      <ProfileSection
        className={styles.links}
        id="links-section"
        data-test="some value"
        aria-label="social links"
      >
        <ButtonLinks href={githubUrl}>
          <FaGithub className={styles.icons} />
          GitHub
        </ButtonLinks>

        <ButtonLinks href={linkedinUrl}>
          <FaLinkedin className={styles.icons} />
          Linkedin
        </ButtonLinks>

        <ButtonLinks href={instaUrl}>
          <FaInstagram className={styles.icons} />
          Instagram
        </ButtonLinks>
      </ProfileSection>
    </div>
  );
}
