"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./MobileMenu.module.css";
import Link from "next/link";
import { SignedOut, UserButton, useUser } from "@clerk/nextjs";
export default function MobileMenu() {
    const { user } = useUser();

  const menuRef = useRef(null); // Referência para o menu
  const [openMobileModal, setOpenMobileModal] = useState(false);

  const handleClickOpenModal = () => {
    setOpenMobileModal(true);
  };

  const handleClickCloseModal = () => {
    setOpenMobileModal(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        openMobileModal
      ) {
        setOpenMobileModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMobileModal]);

  return (
    <>
      {" "}
      <div onClick={handleClickOpenModal}>
        <img
          src="https://i.imgur.com/5z8eaTD.png"
          alt=""
          className={styles.menuIcon}
        />
      </div>
      {openMobileModal && (
        <div className={styles.MobileModal}>
          <div ref={menuRef} className={styles.MobileModalContent}>
            <span
              className={styles.CloseMobileModal}
              onClick={handleClickCloseModal}
            >
              X
            </span>
            <nav>
            {user ? (
          <div  className={styles.top}>

            <UserButton />

            <SignedOut></SignedOut>
            <span>Logo</span>
          </div>
        ) : null}
        <ul  className={styles.ul}>
      
         
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
            <Link href="/MinhasPaginas" className={styles.link}>
              <span className={styles.icon}>⚙️</span> Configurações
            </Link>
          </li>
        </ul>
      </nav>
          </div>
        </div>
      )}
    </>
  );
}
