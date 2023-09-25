"use client";
import React from "react";
import styles from "./button.module.css";
import { useRouter } from "next/navigation";

const Button = ({ handler, buttonName, variant = "btn", url }) => {
  const router = useRouter();
  const handleRoute = () => {
    router.push(url);
  };
  return (
    <div onClick={url ? handleRoute : handler} className={styles[variant]}>
      {buttonName}
    </div>
  );
};

export default Button;
