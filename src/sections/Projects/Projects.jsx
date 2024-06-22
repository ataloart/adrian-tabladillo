import styles from "./ProjectStyles.module.css";
import lgDragAndDrop from "../../assets/lg_DragAndDrop.jpg";
import lgAbatonChipre from "../../assets/lg_AbatonChipre.jpg";
import lgikeaKitchen from "../../assets/lg_ikeaKitchen.jpg";

import ProjectCard from "../../common/ProjectCard";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={lgDragAndDrop}
          link="https://adrian-tabladillo-drag-drop.netlify.app/"
          h3="Drag and Drop"
          p="Streaming App"
        />
        <ProjectCard src={lgAbatonChipre} h3="Ábaton Chipre" p="Architecture" />
        <ProjectCard
          src={lgikeaKitchen}
          h3="Ikea Kitchen"
          p="Interior Design"
        />
      </div>
    </section>
  );
}

export default Projects;
