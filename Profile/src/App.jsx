import Profile from "./components/Profile";
import Avatar from "./assets/img/foto2.png";

export default function () {
  return (
    <>
      <Profile
        avatar={Avatar}
        name="Thauan Rodrigues"
        bio="Front End"
        phone="+55 83 9 9945-3996"
        email="thauandevbr@gmail.com"
        githubUrl="https://github.com/ThauanRodrigues"
        linkedinUrl="https://www.linkedin.com/in/thauan-rodrigues-85438717b/"
        instaUrl="https://www.instagram.com/thauanrodriguees/"
      />
    </>
  );
}
