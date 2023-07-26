import React from "react";
import style from "../styles/card.module.css";
import Image from "next/image";

const CowCard = () => {
  return (
    <div className={`${style.card} ${style.wallet}`} >
    <div className={style.overlay}></div>
    <div>
    <Image src="https://img.freepik.com/free-vector/cute-black-cow-cartoon-animal-sticker_1308-69066.jpg" width={300} height={300} alt="drawing_image" />
    </div>
    <p>Wallet</p>
</div>

  );
};

export default CowCard;
