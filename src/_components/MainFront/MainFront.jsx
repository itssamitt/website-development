import React from "react";
import Marquee from "react-fast-marquee";
import style from "./MainFront.module.css";
import Link from "next/link";

const MainFront = () => {
  return (
    <>
      <div className={style.mainfont}>
        <Marquee speed={80}>
          <img className={style.autoimage} src="https://res.cloudinary.com/dpla4nem3/image/upload/v1773561496/crouselone_qyx2dd.jpg" loading="lazy" decoding="async" />
          <img className={style.autoimage} src="https://res.cloudinary.com/dpla4nem3/image/upload/v1773561490/crouseltwo_hccrkp.jpg" loading="lazy" decoding="async" />
          <img className={style.autoimage} src="https://res.cloudinary.com/dpla4nem3/image/upload/v1773561489/crouselthree_e94ps2.jpg" loading="lazy" decoding="async" />
          <img className={style.autoimage} src="https://res.cloudinary.com/dpla4nem3/image/upload/v1773561518/crouselfour_yjigph.png" loading="lazy" decoding="async" />
          <img className={style.autoimage} src="https://res.cloudinary.com/dpla4nem3/image/upload/v1773561521/crouselfive_ytvbu0.png" loading="lazy" decoding="async" />
        </Marquee>
        <div className={style.popupmain}>
          <div className={style.popupmainmiddle}>
            <h1 className={style.popupmainmiddletitle}>we design and develop conversion-focused websites</h1>
            <div className={style.popupmainmiddlebox}>
              <img className={style.popupmainmiddleboximg} src="./profilesman.png" />
              <p>500+ Happy Clients</p>
            </div>
            <Link
              className={style.link}
              href="https://wa.link/twyj06"
              data-whatsapp-track
              data-whatsapp-label="main_whatsapp_1"
            >
              <p className={style.popupmainmiddlecta}>Chat On WhatsApp</p>
            </Link>
          </div>
        </div>
        <Marquee className={style.companiesmorq} speed={90}>
          <img className={style.autocompanies} src="/companieslogo/companyone.jpg" loading="lazy" decoding="async" />
          <img className={style.autocompanies} src="/companieslogo/companytwo.jpeg" loading="lazy" decoding="async" />
          <img className={style.autocompanies} src="/companieslogo/companythree.png" loading="lazy" decoding="async" />
          <img className={style.autocompanies} src="/companieslogo/companyfour.jpg" loading="lazy" decoding="async" />
          <img className={style.autocompanies} src="/companieslogo/companyfive.jpg" loading="lazy" decoding="async"  />
          <img className={style.autocompanies} src="/companieslogo/companysix.png" loading="lazy" decoding="async" />
          <img className={style.autocompanies} src="/companieslogo/companyseven.png" loading="lazy" decoding="async" />
          <img className={style.autocompanies} src="/companieslogo/companyeight.png" loading="lazy" decoding="async" />
          <img className={style.autocompanies} src="/companieslogo/companynine.png" loading="lazy" decoding="async" />
          <img className={style.autocompanies} src="/companieslogo/companyten.png" loading="lazy" decoding="async" />
        </Marquee>
      </div>
    </>
  );
};

export default MainFront;
