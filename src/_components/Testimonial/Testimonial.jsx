import React from "react";
import Marquee from "react-fast-marquee";
import style from "./Testimonial.module.css";

const Testimonial = () => {
  return (
    <>
      <div className={style.testimonialsection}>
        <p className={style.testimonialtitle}>Customer Testimonials</p>
        <Marquee className={style.morquee} speed={80}>
          <div className={style.pertestibox}>
            <div className={style.pertestiupper}>
              <img src="/testimonial/rahulsharma.jpg" />
              <div className={style.testidetails}>
                <p className={style.testiname}>Rahul Sharma</p>
                <p className={style.testiposition}>Electronics Store Owner</p>
              </div>
            </div>
            <p className={style.realtesti}>
              Working with this team was amazing. They built our website professionally and helped us generate online leads. Our business visibility increased a lot. Highly recommended for anyone serious about business growth.
            </p>
          </div>
          <div className={style.pertestibox}>
            <div className={style.pertestiupper}>
              <img src="/testimonial/priyaverma.jpeg" />
              <div className={style.testidetails}>
                <p className={style.testiname}>Priya Verma</p>
                <p className={style.testiposition}>Fashion Boutique Owner</p>
              </div>
            </div>
            <p className={style.realtesti}>
              They created a beautiful and fast website for our brand. The design, support, and marketing guidance were excellent. We started getting more customers online within a few weeks.
            </p>
          </div>
          <div className={style.pertestibox}>
            <div className={style.pertestiupper}>
              <img src="/testimonial/arjunpatel.jpg" />
              <div className={style.testidetails}>
                <p className={style.testiname}>Arjun Patel</p>
                <p className={style.testiposition}>Automobile Parts Dealer</p>
              </div>
            </div>
            <p className={style.realtesti}>
              Very professional service. They understood our business needs and delivered a perfect website with modern design. Our online presence improved and customers can easily find our products now.
            </p>
          </div>
          <div className={style.pertestibox}>
            <div className={style.pertestiupper}>
              <img src="/testimonial/nehagupta.jpg" />
              <div className={style.testidetails}>
                <p className={style.testiname}>Neha Gupta</p>
                <p className={style.testiposition}>Eye Clinic Owner</p>
              </div>
            </div>
            <p className={style.realtesti}>
              Their team developed our clinic website and helped with online visibility. The process was smooth and communication was great. We now receive regular appointment inquiries from the website.
            </p>
          </div>
          <div className={style.pertestibox}>
            <div className={style.pertestiupper}>
              <img src="/testimonial/vikramsingh.jpg" />
              <div className={style.testidetails}>
                <p className={style.testiname}>Vikram Singh</p>
                <p className={style.testiposition}>Logistics Company Owner</p>
              </div>
            </div>
            <p className={style.realtesti}>
              Excellent experience from start to finish. They built a powerful website for our logistics company and guided us on digital growth. Truly reliable partners for business development.
            </p>
          </div>
          <div className={style.pertestibox}>
            <div className={style.pertestiupper}>
              <img src="/testimonial/ankitagrawal.jpeg" />
              <div className={style.testidetails}>
                <p className={style.testiname}>Ankit Agarwal</p>
                <p className={style.testiposition}>Wholesale Trader</p>
              </div>
            </div>
            <p className={style.realtesti}>
              Professional team with great understanding of business needs. Our website looks premium and loads fast. It helped us attract new clients and build trust with customers online.
            </p>
          </div>
          <div className={style.pertestibox}>
            <div className={style.pertestiupper}>
              <img src="/testimonial/rohitmehta.jpeg" />
              <div className={style.testidetails}>
                <p className={style.testiname}>Rohit Mehta</p>
                <p className={style.testiposition}>Digital Business Consultant</p>
              </div>
            </div>
            <p className={style.realtesti}>
              Great experience working with this team. They designed a modern website for our company and guided us on digital growth. Their professionalism and support made the whole process smooth
            </p>
          </div>
          <div className={style.pertestibox}>
            <div className={style.pertestiupper}>
              <img src="/testimonial/snehaiyer.jpeg" />
              <div className={style.testidetails}>
                <p className={style.testiname}>Sneha Iyer</p>
                <p className={style.testiposition}>Home Decor Store Owner</p>
              </div>
            </div>
            <p className={style.realtesti}>
              The website they created for our brand looks premium and works perfectly on mobile. Their team understood our vision and delivered beyond expectations. Truly helpful for growing our online presence.
            </p>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Testimonial;
