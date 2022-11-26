import style from "./OfferElem.module.css";

const OfferElem = ({ elem, isNew }) => {
  return isNew ? (
    <li className={style.newListElem}>
      {elem.name}
      <br></br>
      {isNew}
    </li>
  ) : (
    <li className={style.listElem}>{elem.name}</li>
  );
};

export default OfferElem;
