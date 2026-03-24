import style from "./Services.module.css";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div id="services" className={style.services}>
        <p className={style.servicestitle}>OUR SERVICES</p>
        <div className={style.servicesbox}>

          <div className={style.servicesboxeach}>
            <p className={style.servicesboxtitle}>Informative Websites</p>
            <p className={style.servicesboxpara}>
              Best for company website, portfolio, informative website or
              landing pages. Free 30 mins consultancy if paid now.
            </p>
            <div className={`${style.servicespoints} ${style.firsttop}`}>
              <i className="fa-sharp fa-solid fa-circle-arrow-right" />
              <p>Mobile Responsive</p>
            </div>
            <div className={style.servicespoints}>
              <i className="fa-sharp fa-solid fa-circle-arrow-right" />
              <p>Dynamic with Admin panel</p>
            </div>
            <div className={style.servicespoints}>
              <i className="fa-sharp fa-solid fa-circle-arrow-right" />
              <p>1 year warranty</p>
            </div>
            <div className={style.servicespoints}>
              <i className="fa-sharp fa-solid fa-circle-arrow-right" />
              <p>On-Page SEO</p>
            </div>
            <div className={style.servicespoints}>
              <i className="fa-sharp fa-solid fa-circle-arrow-right" />
              <p>Payment plan 33% x 3</p>
            </div>
            <Link
              className={style.link}
              href="https://wa.link/twyj06"
              data-whatsapp-track
              data-whatsapp-label="services_whatsapp_1"
            >
              <div className={style.servicebtndiv}>
                <p className={style.servicecontactbtn}>CONTACT US</p>
              </div>
            </Link>
          </div>

          <div className={style.servicesboxeach}>
            <p className={style.servicesboxtitle}>E-COMMERCE</p>
            <p className={style.servicesboxpara}>
              Sell anything online, Shopify, Wordpress, PHP and custom. Grocery,
              food delivery, Sell anything online. Free 30 mins consultancy if
              paid now.
            </p>
            <div className={`${style.servicespoints} ${style.firsttop}`}>
              <i className="fa-sharp fa-solid fa-circle-arrow-right" />
              <p>Responsive, Dynamic eCom</p>
            </div>
            <div className={style.servicespoints}>
              <i className="fa-sharp fa-solid fa-circle-arrow-right" />
              <p>Shopify, Custom With Admin.</p>
            </div>
            <div className={style.servicespoints}>
              <i className="fa-sharp fa-solid fa-circle-arrow-right" />
              <p>Categories, sub cat, Filters, Search</p>
            </div>
            <div className={style.servicespoints}>
              <i className="fa-sharp fa-solid fa-circle-arrow-right" />
              <p>Add to cart, Payment, Shipping etc</p>
            </div>
            <Link
              className={style.link}
              href="https://wa.link/twyj06"
              data-whatsapp-track
              data-whatsapp-label="services_whatsapp_2"
            >
              <div className={style.servicebtndiv}>
                <p className={style.servicecontactbtn}>CONTACT US</p>
              </div>
            </Link>
          </div>

          <div className={style.servicesboxeach}>
            <p className={style.servicesboxtitle}>Custom</p>
            <p className={style.servicesboxpara}>
              Special APPs, websites with new ideas and build something great.
              Startup ideas. Free 30 mins consultancy if paid now.
            </p>
            <div className={`${style.servicespoints} ${style.firsttop}`}>
              <i className="fa-sharp fa-solid fa-circle-arrow-right" />
              <p>Brain Storming</p>
            </div>
            <div className={style.servicespoints}>
              <i className="fa-sharp fa-solid fa-circle-arrow-right" />
              <p>Responsive, Dynamic UI</p>
            </div>
            <div className={style.servicespoints}>
              <i className="fa-sharp fa-solid fa-circle-arrow-right" />
              <p>Admin + Payments + OTPs</p>
            </div>
            <div className={style.servicespoints}>
              <i className="fa-sharp fa-solid fa-circle-arrow-right" />
              <p>Logic based Algorithms</p>
            </div>
            <Link
              className={style.link}
              href="https://wa.link/twyj06"
              data-whatsapp-track
              data-whatsapp-label="services_whatsapp_3"
            >
              <div className={style.servicebtndiv}>
                <p className={style.servicecontactbtn}>CONTACT US</p>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default Services;
