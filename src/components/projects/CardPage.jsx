import Card from "./Cart";
import styles from "./CardPage.module.css";
const CardPage = () => {
  // Sample data for the cards
  const cards = [
    {
     
      title: "Ui Clone",
      content: "",
      description: "",
     
    },
    {
      title: "Ecommerce site",
      content: "",
      description: "",
    },
    {
      title: "GYM site",
      content: "",
      description: "",
    },
  ];

  return (
    <div className={styles.cardPage} id="projects">
      
      {cards.map((card, index) => (
        
        <Card
          key={index}
          title={card.title}
          content={card.content}
          description={card.description}
        />
      ))}
      
    </div>
  );
};

export default CardPage;
