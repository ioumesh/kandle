import LoginTab from "@/components/LoginTab/LoginTab";
import styles from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <div style={{ height: "362px", background: "#1A1C20;" }}>
      <div className={styles.heroWrapper}>
        <div className={styles.left}>
          <LoginTab />
        </div>
        <div className={styles.right}>
          <Image src="/img/man.svg" width={"325"} height={"350"} alt="man" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
