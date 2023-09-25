import Image from "next/image";
import React from "react";

const Slider = () => {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.left}>
       
      </div>
      <div className={styles.right}>
        <Image src="/img/slider.svg" width={"325"} height={"350"} alt="man" />
      </div>
    </div>
  );
};

export default Slider;
