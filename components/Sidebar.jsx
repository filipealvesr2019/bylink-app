// components/Sidebar.js
import Link from "next/link";
import styles from "../pages/styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
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
  );
};

export default Sidebar;
