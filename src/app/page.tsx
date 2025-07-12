"use client";
import Banner from "./components/banner";
import Card from "./components/card";

export default function Home() {
  return (
    <>

        <Banner />

        <div className="single-blog">
          <img className="single-blog-img" src="/images/ai1.png" alt="" />
          <div className="single-blog-desc">
            <div className="tag-date">
              <p className="tag">Travel</p>
              <p className="date">13 March 2023</p>
            </div>
            <h1 className="heading">How AI will Change the Future</h1>
            <p className="desc">
              our blogs are written from very research research and well known
              writers writers so that we can provide you the best blogs and
              articles articles for you to read them all along
            </p>
            <a href="/" className="rd-mr-btn">
              Read more
            </a>
          </div>
        </div>

        <div className="popular-blogs">
          <div className="pop-blogs-top">
            <h4 className="ttl">Our Recent Post</h4>
            <a href="/blogs" className="view-all">
              View All
            </a>
          </div>
          <div className="recent-top">
            <div className="recent-right">
              <img
                className="feature-img"
                src="/images/featured-img.png"
                alt=""
              />
            </div>
            <div className="recent-left">
              <div className="tag-date">
                <p className="tag">Travel</p>
                <p className="date">13 March 2023</p>
              </div>
              <h1 className="heading">How AI will Change the Future</h1>
              <p className="desc">
                our blogs are written from very research research and well known
                writers writers so that we can provide you the best blogs and
                articles articles for you to read them all along
              </p>
              <a href="/" className="rd-mr-btn">
                Read more
              </a>
            </div>
          </div>
          <div className="pop-list">
            <Card url="/" />
            <Card url="/" />
            <Card url="/" />
            <Card url="/" />
          </div>
        </div>

        <div className="popular-blogs">
          <div className="pop-blogs-top">
            <h4 className="ttl">Popular Post</h4>
            <a href="/blogs" className="view-all">
              View All
            </a>
          </div>
          <div className="pop-list">
            <Card url="/" />
            <Card url="/" />
            <Card url="/" />
            <Card url="/" />
            <Card url="/" />
            <Card url="/" />
            <Card url="/" />
            <Card url="/" />
          </div>
        </div>
      <style jsx>{`
        .single-blog {
          width: 50%;
          height: auto;
          margin: 24px auto;
          position: relative;
        }
        .single-blog .single-blog-img {
          width: 100%;
          height: 360px;
        }
        .single-blog-desc {
          content: "";
          position: absolute;
          width: 75%;
          border-radius: 12px;
          padding: 10px;
          background: #f3f3f3;
          bottom: -90px;
          right: 0;
        }

        .tag-date {
          display: flex;
          justify-content: flex-start;
          gap: 8px;
        }
        .tag {
          font-weight: bold;
          font-size: 18px;
        }
        .date {
          font-weight: 500;
          font-size: 18px;
        }
        .popular-blogs {
          width: 80%;
          margin: 0 auto;
        }

        .heading {
          font-weight: bold;
          font-size: 28px;
          margin-bottom: 5px;
        }

        .desc {
          color: #000;
          font-size: 18px;
          margin-bottom: 5px;
        }
        .rd-mr-btn {
          font-size: 14px;
          background: #f3f3f3;
          color: #7c4ee4;
          border: 1px solid #7c4ee4;
          font-size: 18px;
          padding: 5px 10px;
          display: inline-block;
          border-radius: 8px;
        }
        .rd-mr-btn:hover {
          color: #f3f3f3;
          background: #7c4ee4;
        }

        .recent-top {
          display: flex;
          width: 100%;
          margin: 12px auto;
          gap: 18px;
        }
        .recent-left {
          width: 49%;
          padding: 12px 36px;
        }
        .recent-right {
          width: 49%;
          flex-shrink: 0;
        }
        .recent-right img {
          width: 100%;
          height: 360px;
        }

        .pop-blogs-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 116px 0 18px 0;
        }
        .ttl {
          color: #000;
          font-weight: bold;
          font-size: 24px;
        }
        .view-all {
          display: inline-block;
          padding: 5px 18px;
          background: #7c4ee4;
          border-radius: 8px;
          color: #fff;
        }
        .view-all:hover {
          background: #6329e7;
        }
        .pop-list {
          display: flex;
          justify-content: flex-start;
          gap: 16px;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .pop-list {
            flex-direction: column;
          }
        }
      `}</style>
      <style jsx>{`
        @media (max-width: 768px) {
          .single-blog {
            width: 100%;
          }
          .single-blog .single-blog-img {
            height: auto;
          }
          .single-blog-desc {
            position: relative;
            bottom: 0;
            width: 100%;
          }
          .popular-blogs {
            width: 100%;
            padding: 5px;
          }
          .recent-top {
            flex-direction: column;
          }
          .recent-right,
          .recent-left {
            width: 100%;
          }
          .recent-left {
            padding: 5px;
          }
        }
      `}</style>
    </>
  );
}
