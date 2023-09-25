import React from "react";
import Button from "../Button/Button";
import styles from "./logintab.module.css";
const LoginTab = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Play Smarter</span>
      <Button buttonName={"Sign up with Google"} url={"/dashboard/register"} />
      <h2 className={styles.line}>
        <span className={styles.text}>or</span>
      </h2>

      <Button buttonName={"Sign in with Google"} url={"/dashboard/login"} />
    </div>
  );
};

export default LoginTab;
