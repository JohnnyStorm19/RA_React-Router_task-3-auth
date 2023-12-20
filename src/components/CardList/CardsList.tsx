import { INews } from "../../models";
import classes from "./CardsList.module.css";
import ContentCard from "../Card/ContentCard";

const CardsList = ({ cards }: { cards: INews[] }) => {
  return (
    <div className={classes.cardsList}>
      {cards.map((card) => {
        return <ContentCard key={card.id} data={card} />;
      })}
    </div>
  );
};

export default CardsList;
