import React from "react";
import style from "./Team.module.css";

const Team = () => {
  return (
    <>
      <div className={style.teammain}>
        <p className={style.teammaintitle}>Meet the Team</p>
        <div className={style.teamimagesbox}>
          <div className={style.teamperbox}>
            <img src="/team/teamone.jpg" />
            <div className={style.teamperimgdetail}>
              <p className={style.teampername}>Ruchika</p>
              <p className={style.teamperdetail}>Marketing & Lead Strategist</p>
            </div>
          </div>
          <div className={style.teamperbox}>
            <img src="/team/teamtwo.jpg" />
            <div className={style.teamperimgdetail}>
              <p className={style.teampername}>Nishant</p>
              <p className={style.teamperdetail}>Client Relationship Manager</p>
            </div>
          </div>
          <div className={style.teamperbox}>
            <img src="/team/teamthree.jpg" />
            <div className={style.teamperimgdetail}>
              <p className={style.teampername}>Amit</p>
              <p className={style.teamperdetail}>Full Stack Developer</p>
            </div>
          </div>
          <div className={style.teamperbox}>
            <img src="/team/teamfour.jpg" />
            <div className={style.teamperimgdetail}>
              <p className={style.teampername}>Shreya</p>
              <p className={style.teamperdetail}>Design & Branding</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
