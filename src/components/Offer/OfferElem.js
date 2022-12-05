import style from "./OfferElem.module.css";

const OfferElem = ({ elem, isNew }) => {
  return isNew ? (
    <li className={style.newListElem}>
      <span>{elem.name}</span>
      <span>{"(Nowość)"}</span>
    </li>
  ) : (
    <li className={style.listElem}>
      <span>{elem.name}</span>
    </li>
  );
};

export default OfferElem;
