import React from "react";
import { Chat, Ellipse, Globe } from "@/constants/svg";
import Button from "../Button/Button";
import styles from "./navitems.module.css";

const NavItems = () => {
  return (
    <>
      <Button variant="normalBtn" buttonName={"Sign in"} url={"/dashboard/login"} />
      <Button
        buttonName={"Sign up"}
        variant="primaryBtn"
        url={"/dashboard/register"}
      />
      <div className={styles.chatWrapper}>
        <Chat />
        <span className={styles.ellipse}>
          <Ellipse />
        </span>
      </div>
      <Globe />
      <span className={styles.verticalLine}></span>
      <span>ENG</span>
    </>
  );
};

export default NavItems;
