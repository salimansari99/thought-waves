'use client';
import React, { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.hmbgr} onClick={toggleNav}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
      <ul
        className={`${styles.navList} ${isOpen ? styles.open : ''}`}
        onClick={toggleNav}
      >
        <li className={styles.navItem}>
          <a className={styles.closeBtn}>X</a>
        </li>
        <li className={styles.navItem}>
          <a href="/" className={styles.navLink}>Home</a>
        </li>
        <li className={styles.navItem}>
          <a href="/blogs" className={styles.navLink}>Blog</a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>About</a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}