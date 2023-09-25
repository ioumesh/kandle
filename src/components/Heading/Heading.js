import styles from "./heading.module.css";
const Heading = ({ isMain, title }) => {
  return (
    <div>
      {isMain ? (
        <h1 className={styles.title}>{title}</h1>
      ) : (
        <h2 className={styles.subTitle}>{title}</h2>
      )}
    </div>
  );
};

export default Heading;
