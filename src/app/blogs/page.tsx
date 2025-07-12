'use client';

import Card from "@/app/components/card";
import styles from "./Blogs.module.css";

export default function Home() {
  return (
    <section className={styles.blogListingContainer}>
      <div className={styles.blogsTop}>
        <h4 className={styles.ttl}>OUR BLOGS</h4>
        <h1 className={styles.heading}>Find our all blogs from here</h1>
        <p className={styles.desc}>
          our blogs are written from very research research and well known writers writers so that we can provide you the best blogs and articles articles for you to read them all along
        </p>
      </div>
      <div className={styles.blogsBottom}>
        <Card url="1" />
        <Card url="2" />
        <Card url="3" />
        <Card url="4" />
        <Card url="5" />
        <Card url="6" />
        <Card url="7" />
        <Card url="8" />
        <Card url="9" />
        <Card url="10" />
      </div>
    </section>
  );
}