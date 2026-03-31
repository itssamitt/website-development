"use client";
import style from "./header.module.css";
import Link from "next/link";

const Header = () => {
  const handleCallClick = () => {
    if (typeof window !== "undefined" && window.trackAdsmanConversion) {
      window.trackAdsmanConversion("call_click");
    }
  };

  return (
    <div className={style.header}>
      <p className={style.logo}>ADSMAN</p>
      <nav className={style.navs}>
        <Link className={style.navlink} href="#services">
          Services
        </Link>
        <Link className={style.navlink} href="#work">
          Portfolio
        </Link>
        <Link
          className={`${style.navlink} ${style.contact}`}
          href="tel:6299188118"
          onClick={handleCallClick}
        >
          CALL US
        </Link>
      </nav>
      <i className={`fa-light fa-bars ${style.bars}`}></i>
    </div>
  );
};

export default Header;
