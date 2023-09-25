import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
const footerData = [
  {
    menu: "Games",
    subMenu: [
      {
        listName: "Portfolio League",
      },
      {
        listName: "Mega League",
      },
      {
        listName: "Portfolio League",
      },
      {
        listName: "Mega League",
      },
    ],
  },
  {
    menu: "Support/Legal",
    subMenu: [
      {
        listName: "Help Center",
      },
      {
        listName: "Help Center",
      },
      {
        listName: "Help Center",
      },
      {
        listName: "Help Center",
      },
      {
        listName: "Mega League",
      },
    ],
  },
  {
    menu: "About us",
    subMenu: [
      {
        listName: "News",
      },
      {
        listName: "Help Desk",
      },
      {
        listName: "Portfolio League",
      },
      {
        listName: "Mega League",
      },
    ],
  },
  {
    menu: "About us",
    subMenu: [
      {
        listName: "News",
      },
      {
        listName: "Help Desk",
      },
      {
        listName: "Portfolio League",
      },
      {
        listName: "Mega League",
      },
    ],
  },
  {
    menu: "About us",
    subMenu: [
      {
        listName: "News",
      },
      {
        listName: "Help Desk",
      },
      {
        listName: "Mega League",
      },
    ],
  },
];

const socialIcon = [
  {
    src: "/img/twitter.svg",
  },
  {
    src: "img/telegram.svg",
  },
  {
    src: "/img/discord.svg",
  },
  {
    src: "/img/lang.svg",
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.left}>
          {footerData.map((item, index) => {
            return (
              <ul key={`footer-${index}`} className={styles.menus}>
                <span className={styles.menuHeading}>{item.menu}</span>
                {item.subMenu.map((item, index) => {
                  return (
                    <li className={styles.menusItem} key={`${index}`}>
                      {item.listName}
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
        <div className={styles.right}>
          <span className={styles.joinHeading}>Join our Community</span>
          <div className={styles.socialIcon}>
            {socialIcon.map((item, index) => {
              return (
                <div key={`${index}`}>
                  <Image
                    src={item.src}
                    width={22}
                    height={20}
                    alt="social-icon"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
