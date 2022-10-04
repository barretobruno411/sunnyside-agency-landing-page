import React from 'react'
import "./Pictures.css"
import milk from "../images/mobile/image-gallery-milkbottles.jpg"
import orange from "../images/mobile/image-gallery-orange.jpg"
import cone from "../images/mobile/image-gallery-cone.jpg"
import sugar from "../images/mobile/image-gallery-sugar-cubes.jpg"

const Pictures = () => {
  return (
    <aside className='pictures-section'>
            <img src={milk} alt="milk bottles" />
            <img src={orange} alt="orange" />
            <img src={cone} alt="ice cream cone" />
            <img src={sugar} alt="sugar cubes" />
    </aside>
  )
}

export default Pictures