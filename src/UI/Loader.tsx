import React from "react";
import style from "../styles/loader.module.css";

export default function Loader() {
  return (
    <div className={style.container}>
      <div className={`${style.cloud} ${style.front}`}>
        <span className="style.left-front"></span>
        <span className="style.right-front"></span>
      </div>
      <span className={`${style.sun} ${style.sunshine}`}></span>
      <span className={style.sun}></span>
      <div className={`${style.cloud} ${style.back}`}>
        <span className={style.leftBack}></span>
        <span className={style.rightBack}></span>
      </div>
    </div>
  );
}
