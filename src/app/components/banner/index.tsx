'use client';

import styles from './Banner.module.css';

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.bnrLeft}>
        <h4 className={styles.ttl}>Featured Post</h4>
        <h1 className={styles.heading}>How AI will Change the Future</h1>
        <p className={styles.desc}>
          our blogs are written from very research research and well known writers writers so that we can provide you the best blogs and articles articles for you to read them all along
        </p>
        <a href="/" className={styles.rdMrBtn}>Read more</a>
      </div>
      <div className={styles.bnrRight}>
        <img src="/images/featured-img.png" alt="Featured" />
      </div>
    </section>
  );
}