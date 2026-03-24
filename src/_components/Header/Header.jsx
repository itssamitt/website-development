"use client";
import style from "./header.module.css";
import Link from "next/link";

const Header = () => {
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
          onClick={() => {
            if (typeof window !== "undefined" && typeof window.gtag === "function") {
              window.gtag("event", "call_click", {
                event_category: "contact",
                event_label: "header_call_button",
              });
            }
          }}
        >
          CALL US
        </Link>
      </nav>
      <i className={`fa-light fa-bars ${style.bars}`}></i>
    </div>
  );
};

export default Header;
