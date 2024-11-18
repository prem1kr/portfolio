import { getImageUrl } from "../../utils"
import styles from "./About.module.css"
const About = () => {
  return (
    <section className={styles.container} id="about">
        <h className={styles.title} >About</h>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")}
            alt="Me sitting with a laptop"/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>
                            I am a Frontend Developer with experience in building responsive and optimized sites
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="server icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>
                            I have experience developing fast and optimized back-end and Api.
                        </p>
                    </div >
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>UI Developer</h3>
                        <p>
                            I have designed multiple landing pages and have created designed system.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  );
}

export default About
