import Heading from "@/components/Heading/Heading";
import React from "react";
import styles from "./games.module.css";
import GameCard from "@/components/GameCard/GameCard";
import { gameData } from "@/constants/data";

const Games = () => {
  return (
    <div className={styles.container}>
      <Heading title={"Games on Kandle"} />
      <div className={styles.cardWrapper}>
        {gameData.map((item, index) => {
          return (
            <GameCard
              key={`game-${index}`}
              title={item.title}
              src={item.src}
              btnName={item.btnText}
              desc={item.desc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Games;
