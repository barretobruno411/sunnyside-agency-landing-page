import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <main>
      <article className="article-container reverse">
        <div className="image egg"></div>
        <div className="text">
          <h2>Transform your brand</h2>
          <p>
            We are full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <h3>Learn more</h3>
        </div>
      </article>
      <article className="article-container">
        <div className="image stand"></div>
        <div className="text">
          <h2>Stand out to the right audience</h2>
          <p>
            We are full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <h3>Learn more</h3>
        </div>
      </article>
    </main>
  );
};

export default Main;
