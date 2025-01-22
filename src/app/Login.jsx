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
      
      <div className={styles.login}  style={{
        display:"flex",
        justifyContent: !user ? "space-between": "flex-end"
      }}>
        
      {!user ? (
          <>
           <img
          src="https://i.imgur.com/kSvw0pC.png"
          alt=""
      style={{
        width:"10vw"
      }}
        />
          </>
        ) : null}
      
        <SignedOut>
          <div>
            <Link href={"/login"}>
              <button className={styles.button} style={{
                width:"15vw"
              }}>Entrar</button>
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

      {user ? (
          <>

            <aside className={styles.menu}>
      <nav>
        <ul>
        <li>
            <Link href="/dashboard" className={styles.link}>
              Logo
            </Link>
          </li>
         
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
            <Link href="/temas" className={styles.link}>
              <span className={styles.icon}>👤</span> Temas
            </Link>
          </li>
          <li>
            <Link href="/settings" className={styles.link}>
              <span className={styles.icon}>⚙️</span> Configurações
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
          </>
        ) : null}
     
    </>
  );
}
