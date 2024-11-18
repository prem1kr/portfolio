import PropTypes from "prop-types";
import styles from "./Card.module.css";

const Card = ({ title, content, description }) => (
  <div className={styles.card1}>
    <a href="">
        <button className={styles.button1}></button>
      </a>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.content}>{content}</p>
    <p className={styles.description}>{description}</p>
  </div>,


<div className={styles.card2}>
<a href="https://croma-home.netlify.app">
    <button className={styles.button2}/> </a>
  
<h2 className={styles.title}>{title}</h2>
<p className={styles.content}>{content}</p>
<p className={styles.description}>{description}</p>

</div> ,


<div className={styles.card3}>
<a href="https://consistencyservices.netlify.app/">
    <button className={styles.button3}></button>
  </a>
<h2 className={styles.title}>{title}</h2>
<p className={styles.content}>{content}</p>
<p className={styles.description}>{description}</p>
</div>
);
Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
