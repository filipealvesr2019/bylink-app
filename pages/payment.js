import Login from "@/app/Login";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import styles from "./payment.module.css";
export default function payment() {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div className={styles.container__a}>teste</div>
        <div className={styles.container__b}>
          <h1>Valor Total </h1>
          <button className={styles.button}>Atualizar Assinatura</button>
        </div>
      </div>
    </div>
  );
}
