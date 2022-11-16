import OffersListArr from "../data/OffersListArr";
import style from "./OfferList.module.css";

const OfferList = () => {
  const list = OffersListArr.map((elem, index) =>
    index === 0 ? (
      <li key={elem.id} className={style.newListElem}>
        {elem.name}
        <br></br>
        {"(Nowosc)"}
      </li>
    ) : (
      <li key={elem.id} className={style.listElem}>
        {elem.name}
      </li>
    )
  );
  return <ul className={style.list}>{list}</ul>;
};

export default OfferList;
