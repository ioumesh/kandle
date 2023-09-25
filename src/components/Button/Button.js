'use client'
import React from "react";
import styles from "./button.module.css";
import { useRouter } from "next/navigation";

const Button = ({ buttonName, variant = "btn", url }) => {
  const router = useRouter();
  const handleRoute = () => {
    router.push(url);
  };
  return (
    <div onClick={handleRoute} className={styles[variant]}>
      {buttonName}
    </div>
  );
};

export default Button;
