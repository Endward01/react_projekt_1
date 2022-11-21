import style from "../CSS/OfferElem.module.css";
const OfferElem = ({ elem }) => {
  return <li className={style.listElem}>{elem.name}</li>;
};

export default OfferElem;
