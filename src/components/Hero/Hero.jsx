import { getImageUrl } from "../../utils"
import styles from "./Hero.module.css"
const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I am Prem Kumar</h1>
            <p className={styles.description}>I am a full stack developer with 1 years of experience using React with Node.js</p>
            <a href="premkm016@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image" className={styles.heroImg} />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero
