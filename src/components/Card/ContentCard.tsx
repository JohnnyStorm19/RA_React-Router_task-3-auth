import classes from './ContentCard.module.css';
import { INews } from "../../models";
import { useNavigate } from 'react-router-dom';

const ContentCard = ({ data }: { data: INews }) => {
  const navigate = useNavigate();
  const onCardClick = () => {
      navigate(`/news/${data.id}`);
  }
  return (
    <div className={classes.card} onClick={onCardClick}>
      <div className={classes.imgContainer}>
        <img src={data.image} alt="" />
      </div>
      <h2>{data.title}</h2>
      <p className={classes.cardContent}>{data.content}</p>
    </div>
  );
};

export default ContentCard;
