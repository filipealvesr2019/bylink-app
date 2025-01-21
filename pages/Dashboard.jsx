
import Link from "next/link";
import styles from "./Dashboard.module.css";


export default function Dashboard() {
  

  return (
    <div >
  <aside className={styles.Dashboard}>
      <nav>
        <ul>
          <li>
            <Link href="/dashboard" className={styles.link}>
              <span className={styles.icon}>🏠</span> Dashboard
            </Link>
          </li>
         
          <li>
            <Link href="/appearance" className={styles.link}>
              <span className={styles.icon}>✏️</span> Aparência
            </Link>
          </li>
          <li>
            <Link href="/settings" className={styles.link}>
              <span className={styles.icon}>⚙️</span> Configurações
            </Link>
          </li>
          <li>
            <Link href="/profile" className={styles.link}>
              <span className={styles.icon}>👤</span> Perfil
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
    </div>
  );
}
