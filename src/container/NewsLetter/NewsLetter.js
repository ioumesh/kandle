import React from "react";
import styles from "./newsletter.module.css";
import Image from "next/image";
import Subscription from "@/components/Subscription/Subscription";

const NewsLetter = () => {
  const socialIcon = [
    {
      src: "/img/twit.svg",
    },
    {
      src: "/img/tele.svg",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h2>Join Our Vibrant Community</h2>
          <div className={styles.socialIcon}>
            {socialIcon.map((item, index) => {
              return (
                <div key={`${index}`}>
                  <Image
                    src={item.src}
                    width={32}
                    height={32}
                    alt="social-icon"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div class={styles.verticalLine}></div>
        <div className={styles.right}>
          <Subscription />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
