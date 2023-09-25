"use client";
import React, { useState } from "react";
import Button from "../Button/Button";
import styles from "./subscription.module.css";

const Subscription = () => {
  const [email, setEmail] = useState("");
  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Subscribed with email: ${email}`);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="email"
          placeholder="Feedback makes a better product. Write yours here…"
          value={email}
          onChange={handleInputChange}
        />
        <div className={styles.btn}>
          <Button
            handler={handleSubmit}
            buttonName={"Submit"}
            variant="primaryBtn"
          />
        </div>
      </form>
    </div>
  );
};

export default Subscription;
