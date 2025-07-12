'use client';

import styles from './Card.module.css';

interface Props {
  url: string;
}

export default function Card({ url }: Props) {
  return (
    <a href={`blogs/${url}`}>
      <div className={styles.cardContainer}>
        <div className={styles.featureImg}>
          <img src="/images/travel1.png" alt="" />
        </div>
        <div className={styles.tagDate}>
          <p className={styles.tag}>Travel</p>
          <p className={styles.date}>13 March 2023</p>
        </div>
        <h4 className={styles.ttl}>
          8 Rules of Travelling In Sea You Need To Know
        </h4>
        <p className={styles.desc}>
          Travelling in sea has many advantages. Some of the advantages of
          transporting goods by sea include: you can ship large volumes at costs
        </p>
        <a href="" className={styles.rdMr}>
          Read More
        </a>
      </div>
    </a>
  );
}