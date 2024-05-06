import styles from "./styles.module.css";

const ProfileSection = (props) => (
  <div
    {...props}
    className={`${styles.wrapper} 
  ${props.className}`}
  >
    {props.children}
  </div>
);

export default ProfileSection;
