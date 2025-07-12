'use client';

import Card from "@/app/components/card";
import Footer from "@/app/components/footer";
import styles from "./BlogDetail.module.css";

export default function BlogDetail() {
  return (
    <>
      <section className={styles.blogDetailContainer}>
        <div className={styles.tagDate}>
          <p className={styles.tag}>Travel</p>
          <p className={styles.date}>13 March 2023</p>
        </div>

        <h1 className={styles.heading}>
          How to make a Game look more attractive with New VR & AI Technology
        </h1>

        <div className={styles.featureImg1}>
          <img src="/images/ai1.png" alt="AI" />
        </div>

        <p className={styles.desc}>
          Google has been investing in AI for many years and bringing its
          benefits to individuals, businesses, and communities. Whether it’s
          publishing state-of-the-art research, building helpful products, or
          developing tools and resources that enable others, we’re committed to
          making AI accessible to everyone.
        </p>

        <p className={styles.desc}>
          We’re now at a pivotal moment in our AI journey. Breakthroughs in
          generative AI are fundamentally changing how people interact with
          technology — and at Google, we’ve been responsibly developing large
          language models so we can safely bring them to our products...
        </p>

        <div className={styles.quoteContainer}>
          <p className={styles.quote}>
            “People worry that computers will get too smart and take over the
            world, but the real problem is that they’re too stupid and they’ve
            already taken over the world.”
          </p>
          <p className={styles.quoteAuthor}>– Pedro Domingos</p>
        </div>

        <p className={styles.desc}>
          More than 3 billion people already benefit from AI-powered features in
          Google Workspace, whether it’s using Smart Compose in Gmail or
          auto-generated summaries in Google Docs. Now, we’re excited to take
          the next step and bring a limited set of trusted testers a new set of
          features that makes the process of writing even easier. In Gmail and
          Google Docs, you can simply type in a topic you’d like to write about,
          and a draft will be instantly generated for you...
        </p>

        <div className={styles.featureImg2}>
          <img src="/images/ai2.png" alt="AI 2" />
        </div>

        <p className={styles.desc}>
          We’re so excited by the potential of generative AI, and the
          opportunities it will unlock — from helping people express themselves
          creatively, to helping developers build brand new types of
          applications, to transforming how businesses and governments engage
          their customers and constituents.
        </p>

        <div className={styles.popularBlogs}>
          <div className={styles.popBlogsTop}>
            <h4 className={styles.ttl}>Popular Post</h4>
            <a href="/blogs" className={styles.viewAll}>
              View All
            </a>
          </div>
          <div className={styles.popList}>
            <Card url="/" />
            <Card url="/" />
            <Card url="/" />
          </div>
        </div>
      </section>
    </>
  );
}