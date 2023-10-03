"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavItems from "./NavItems";
import { Logo } from "@/constants/svg";

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header className="header">
      <nav className={`nav`}>
        <Link href={"/"}>
          <Logo />
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          <NavItems />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
