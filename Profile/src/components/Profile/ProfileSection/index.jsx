import styles from "./styles.module.css";

const ProfileSection = (props) => (
  <div className={styles.wrapper}>{props.children}</div>
);

export default ProfileSection;
