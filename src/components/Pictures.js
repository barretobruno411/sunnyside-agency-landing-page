import React from "react";
import Media from "react-media";
import "./Pictures.css";
import milk from "../images/mobile/image-gallery-milkbottles.jpg";
import orange from "../images/mobile/image-gallery-orange.jpg";
import cone from "../images/mobile/image-gallery-cone.jpg";
import sugar from "../images/mobile/image-gallery-sugar-cubes.jpg";
import milkDesktop from "../images/desktop/image-gallery-milkbottles.jpg";
import orangeDesktop from "../images/desktop/image-gallery-orange.jpg";
import coneDesktop from "../images/desktop/image-gallery-cone.jpg";
import sugarDesktop from "../images/desktop/image-gallery-sugarcubes.jpg";

const Pictures = () => {
  return (
    <Media
      queries={{
        small: "(max-width: 599px)",
        large: "(min-width: 600px) and (max-width: 1920px)",
      }}
    >
      {(matches) => (
        <>
          {matches.small && (
            <aside className="pictures-section">
              <img src={milk} alt="milk bottles" />
              <img src={orange} alt="orange" />
              <img src={cone} alt="ice cream cone" />
              <img src={sugar} alt="sugar cubes" />
            </aside>
          )}
          {matches.large && (
            <aside className="pictures-section">
              <img src={milkDesktop} alt="milk bottles" />
              <img src={orangeDesktop} alt="orange" />
              <img src={coneDesktop} alt="ice cream cone" />
              <img src={sugarDesktop} alt="sugar cubes" />
            </aside>
          )}
        </>
      )}
    </Media>
  );
};

export default Pictures;
