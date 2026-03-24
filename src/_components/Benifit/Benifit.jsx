"use client";

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import style from "./Benifit.module.css";

const Benifit = () => {
  const splideOptions = {
    type: "loop",
  perPage: 1.4,
  perMove: 1,
  clones: 3,
  gap: "1rem",
  autoplay: true,
  arrows: true,
  pagination: false,
  focus: 0,
  trimSpace: false,
  breakpoints: {
    1024: {
      perPage: 1,
    },
    640: {
      perPage: 1,
      padding: "1rem",
      arrows: false,
      pagination: true,
    },
  },
  };

  return (
    <div className={style.benifit}>
      <p className={style.benifittitle}>How you benefit after hiring us</p>

      <Splide options={splideOptions} className={style.splidemain}>
        
        {/* Slide 1 */}
        <SplideSlide>
          <div className={style.perslide}>
            <Image
              src="/benifitone.webp"
              alt="benefit"
              width={500}
              height={400}
              className={style.slideimg}
            />

            <div className={style.perslidedetail}>
              <p className={style.perdetailmaintitle}>
                Your conversion rate increases
              </p>

              <p className={style.perdetailtopic}>
                - Implementing CRO Strategies
              </p>

              <p className={style.perdetailpara}>
                We analyze user behavior, test different designs and layouts,
                and optimize the checkout process to increase conversion rates.
              </p>

              <p className={style.perdetailtopic}>
                - Creating Urgency and Scarcity
              </p>

              <p className={style.perdetailpara}>
                We use tactics such as limited-time offers and low-stock
                notifications to encourage immediate action.
              </p>
            </div>
          </div>
        </SplideSlide>

        {/* Slide 2 */}
        <SplideSlide>
          <div className={style.perslide}>
            <Image
              src="/benifittwo.webp"
              alt="benefit"
              width={500}
              height={400}
              className={style.slideimg}
            />

            <div className={style.perslidedetail}>
              <p className={style.perdetailmaintitle}>
                Better user experience
              </p>

              <p className={style.perdetailtopic}>
                - UX Optimized Design
              </p>

              <p className={style.perdetailpara}>
                We design interfaces that are easy to navigate and engaging for
                users.
              </p>

              <p className={style.perdetailtopic}>
                - Faster Load Time
              </p>

              <p className={style.perdetailpara}>
                Optimized performance ensures faster loading pages and a smooth
                user experience.
              </p>
            </div>
          </div>
        </SplideSlide>

        {/* Slide 3 */}
        <SplideSlide>
          <div className={style.perslide}>
            <Image
              src="/benifitthree.webp"
              alt="benefit"
              width={500}
              height={400}
              className={style.slideimg}
            />

            <div className={style.perslidedetail}>
              <p className={style.perdetailmaintitle}>
                Higher customer retention
              </p>

              <p className={style.perdetailtopic}>
                - Personalized Experience
              </p>

              <p className={style.perdetailpara}>
                We create personalized journeys that keep users engaged.
              </p>

              <p className={style.perdetailtopic}>
                - Trust Building
              </p>

              <p className={style.perdetailpara}>
                Clear messaging and modern design help build trust with your
                customers.
              </p>
            </div>
          </div>
        </SplideSlide>

      </Splide>
    </div>
  );
};

export default Benifit;