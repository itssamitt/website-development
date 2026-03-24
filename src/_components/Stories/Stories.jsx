import Image from "next/image";
import style from "./Stories.module.css";

const Stories = () => {
  return (
    <>
      <div className={style.storiesmain}>
        <p className={style.storiesmaintitle}>Success Stories</p>
        <div className={style.storiesmainbox}>
          <img className={style.statsimage} src="/successtats.webp" />
          <div className={style.statsside}>
            <p className={style.statssidetitle}>1cr in sales in less than 3 months</p>
            <div className={style.statsmainboxes}>
              <div className={style.statseachboxes}>
                <p className={style.statnumber}>1.03CR</p>
                <p className={style.statname}>Sales generated</p>
              </div>
              <div className={style.statseachboxes}>
                <p  className={style.statnumber}>34L</p>
                <p className={style.statname}>Meta ads</p>
              </div>
              <div className={style.statseachboxes}>
                <p  className={style.statnumber}>30L</p>
                <p className={style.statname}>Google ads</p>
              </div>
              <div className={style.statseachboxes}>
                <p  className={style.statnumber}>5.3L</p>
                <p className={style.statname}>Whatsapp ads</p>
              </div>
            </div>
            <p className={style.laststatpara}>Case Study Coming Soon</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stories;
