import ContactListArr from "../data/ContactListArr";
import style from "../CSS/ContactList.module.css";


const ContactList = () => {
  const list = ContactListArr.map((elem) => (
    <li key={elem.id} className={style.list}>
      <div
        style={{ backgroundImage: `url(${elem.photoOfEmployee})` }}
        className={style.photo}
      ></div>
      <p className={style.name}>
        {elem.nameOfEmployee} {elem.lastNameOfEmployee} {"["}
        {elem.positionOfEmployee}
        {"]"}
      </p>
      <p className={style.desc}>{elem.descOfEmployee}</p>
    </li>
  ));

  return <ul>{list}</ul>;
};

export default ContactList;
