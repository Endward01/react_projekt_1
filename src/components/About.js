import style from "../CSS/About.module.css";

const About = () => {
  return (
    <article className={style.mainArticleAboutStyle} id="about">
      <div className={style.container}>
        <h2 className={style.marginBottom}>
          Nasza firma oferuje najwyższej jakości produkty.
        </h2>
        <p className={style.marginBottom}>Nie wierz nam na słowo - sprawdź</p>
        <a className={style.btn} href="#offer">
          Oferta
        </a>
        <div className={style.shadow}></div>
      </div>
    </article>
  );
};

export default About;
