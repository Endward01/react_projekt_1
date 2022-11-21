import ContactList from "./ContactList";
import style from "../CSS/Contact.module.css";

const Contact = () => {
  return (
    <article className={style.bg} id="contact">
      <div className={style.container}>
        <h2 className={style.header}>Nasi specjaliści</h2>
        <ContactList />
      </div>
    </article>
  );
};
export default Contact;
