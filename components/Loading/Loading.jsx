// components/Loading.js
import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>;
    </div>
  );
}
