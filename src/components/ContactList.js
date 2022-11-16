import ContactListArr from "../data/ContactListArr";
import style from "./ContactList.module.css";

const ContactList = () => {
  const list = ContactListArr.map((elem) => (
    <li key={elem.id} className={style.list}>
      <p className={style.photo}></p>
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
