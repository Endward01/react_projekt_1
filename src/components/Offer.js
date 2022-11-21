import OffersListArr from "../data/OffersListArr";
import style from "../CSS/Offer.module.css";
import OfferElem from "./OfferElem";
import OfferNewElem from "./OfferNewElem";
const Offer = () => {
  const list = OffersListArr.map((elem,key) =>
    elem.new ? (
      <OfferNewElem isNew={"(Nowość)"} elem={elem} key={key} />
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
