import OfferList from "./OfferList";
import style from "./Offer.module.css";
const Offer = () => {
  return (
    <article className={style.bg} id="offer">
      <div className={style.container}>
        <h2 className={style.header}>Czym zajmuje się nasza firma?</h2>
        <OfferList />
      </div>
    </article>
  );
};
export default Offer;
