import React from "react";
import styles from "./footer.module.css";
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

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
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
        <div>
          <span>Join our Community</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
