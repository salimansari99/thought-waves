'use client';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        Copyright Ideapeel Inc © 2023. All Right Reserved
      </p>
    </footer>
  );
}