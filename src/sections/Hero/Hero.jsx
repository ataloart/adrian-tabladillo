import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import instagramLight from "../../assets/instagram-light.png";
import instagramDark from "../../assets/instagram-dark.png";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from "../../assets/cv.jpg";
import { useTheme } from "../../common/ThemeContext";
function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const instagramIcon = theme === "light" ? instagramLight : instagramDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Adrián Tabladillo"
        />

        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Adrián <br />
          Tabladillo
        </h1>
        <h2> Architect | 3D Artist </h2>
        <span className={styles.socials}>
          <a
            href="https://www.linkedin.com/in/adriantabladillo"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
          <a href="https://www.instagram.com/atalo_art/" target="_blank">
            <img src={instagramIcon} alt="Instagram Icon" />
          </a>
          <a href="https://github.com/ataloart" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for architecture, 3D art, web design and development
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
