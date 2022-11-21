import style from "../CSS/OfferElem.module.css";
const OfferNewElem = ({ isNew, elem }) => {
  return (
    <li className={style.newListElem}>
      {elem.name}
      <br></br>
      {isNew}
    </li>
  );
};

export default OfferNewElem;
