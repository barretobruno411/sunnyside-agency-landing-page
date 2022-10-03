import React from "react";
import "./Testimonials.css";
import emily from "../images/image-emily.jpg";
import thomas from "../images/image-thomas.jpg";
import jennie from "../images/image-jennie.jpg";
const Testimonials = () => {
  return (
    <aside className="testimonials">
      <h1>Client testimonials</h1>
      <div className="testimonial-container">
        <div className="testimonial">
          <img src={emily} alt="emily" />
          <p>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <h3>Emily R.</h3>
          <h6>Marketing Director</h6>
        </div>
        <div className="testimonial">
          <img src={thomas} alt="thomas" />
          <p>
            Sunnyside's enthusiasm coupled with their keen interest in our
            brand's success made it a satisfying and enjoyable experience.
          </p>
          <h3>Thomas S.</h3>
          <h6>Chief Operating Officer</h6>
        </div>
        <div className="testimonial">
          <img src={jennie} alt="jennie" />
          <p>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <h3>Jennie F.</h3>
          <h6>Business Owner</h6>
        </div>
      </div>
    </aside>
  );
};

export default Testimonials;
