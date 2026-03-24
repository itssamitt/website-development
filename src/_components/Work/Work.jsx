"use client";

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

import style from "./Work.module.css";

const Work = () => {
  return (
    <div id="work" className={style.work}>
      <p className={style.worktitle}>Our Work</p>

      <Splide
        options={{
          type: "loop",
          perPage: 3,
          perMove: 1,
          autoplay: true,
          gap: "1rem",
          arrows: true,
          pagination: false,
          breakpoints: {
            1024: { perPage: 2 },
            640: { perPage: 1, padding: "5rem" },
          },
        }}
        aria-label="Our Work"
        className={style.splidemain}
      >
        <SplideSlide>
          <div className={style.imagebox}>
            <Image
              src="https://res.cloudinary.com/dpla4nem3/image/upload/v1773561518/crouselfour_yjigph.png"
              alt="Project 3"
              width={400}
              height={300}
              className={style.image}
            />
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className={style.imagebox}>
            <Image
              src="https://res.cloudinary.com/dpla4nem3/image/upload/v1773561521/crouselfive_ytvbu0.png"
              alt="Project 3"
              width={400}
              height={300}
              className={style.image}
            />
          </div>
        </SplideSlide>
        
        <SplideSlide>
          <div className={style.imagebox}>
            <Image
              src="https://res.cloudinary.com/dpla4nem3/image/upload/v1773561496/crouselone_qyx2dd.jpg"
              alt="Project 1"
              width={400}
              height={300}
              className={style.image}
            />
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className={style.imagebox}>
            <Image
              src="https://res.cloudinary.com/dpla4nem3/image/upload/v1773561490/crouseltwo_hccrkp.jpg"
              alt="Project 2"
              width={400}
              height={300}
              className={style.image}
            />
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className={style.imagebox}>
            <Image
              src="https://res.cloudinary.com/dpla4nem3/image/upload/v1773561489/crouselthree_e94ps2.jpg"
              alt="Project 3"
              width={400}
              height={300}
              className={style.image}
            />
          </div>
        </SplideSlide>
        
      </Splide>
    </div>
  );
};

export default Work;
