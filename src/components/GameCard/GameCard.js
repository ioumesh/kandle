"use client";
import React from "react";
import styles from "./gamecard.module.css";
import Image from "next/image";
import Button from "../Button/Button";
import useMobile from "@/hooks/useMobile";

const GameCard = ({ src, title, desc, btnName }) => {
  const [isMobile] = useMobile();
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <Image
          src={src}
          alt="banner"
          priority
          fill
          objectFit={isMobile ? "contain" : "cover"}
        />
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.desc}>{desc}</p>
      <Button buttonName={btnName} variant="secondaryBtn" />
    </div>
  );
};

export default GameCard;
