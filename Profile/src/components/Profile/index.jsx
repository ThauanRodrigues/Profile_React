import Button from "../Buttons";
import styles from "./styles.module.css";
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
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={avatar} alt={name} />
      <h2 className={styles.name}>{name}</h2>
      <div>{bio}</div>
      <div>{phone}</div>
      <div>{email}</div>
      <Button
        githubUrl={githubUrl}
        linkedinUrl={linkedinUrl}
        instaUrl={instaUrl}
      />
    </div>
  );
}
