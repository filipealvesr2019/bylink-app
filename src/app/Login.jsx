"use client";

import styles from "./Login.module.css";
import { useState } from "react";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

export default function Login() {
  const [showSignIn, setShowSignIn] = useState(false);
  const { user } = useUser();

  return (
    <>
      <div className={styles.login} >

        <SignedOut>
          <div>
            <Link href={"/login"}>
              <button className={styles.button}>Entrar</button>
            </Link>
          </div>
        </SignedOut>

        {user ? (
          <>
            <UserButton />

            <SignedOut></SignedOut>
          </>
        ) : null}
      </div>

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
    </>
  );
}
