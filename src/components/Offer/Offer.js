import offersListArr from "../../data/offersListArr";
import style from "./Offer.module.css";
import OfferElem from "./OfferElem";

const Offer = () => {
  const list = offersListArr.map((elem, key) =>
    elem.new ? (
      <OfferElem isNew={true} elem={elem} key={key} />
    ) : (
      <OfferElem elem={elem} key={key} />
    )
  );
  return (
    <article className={style.bg} id="offer">
      <div className={style.container}>
        <h2 className={style.header}>Czym zajmuje się nasza firma?</h2>
        <ul className={style.list}>{list}</ul>
      </div>
    </article>
  );
};

export default Offer;
