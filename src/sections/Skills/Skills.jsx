/* eslint-disable no-unused-vars */
import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";
function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="AutoCAD" />
        <SkillList src={checkMarkIcon} skill="3DS MAX" />
        <SkillList src={checkMarkIcon} skill="Unreal Engine" />
        <SkillList src={checkMarkIcon} skill="Corona Renderer" />
        <SkillList src={checkMarkIcon} skill="Vray" />
        <SkillList src={checkMarkIcon} skill=" Photoshop" />
        <SkillList src={checkMarkIcon} skill="After Effects" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="React" />
      </div>
    </section>
  );
}

export default Skills;
