import './infoBlocks.css'
import React from 'react'

// eslint-disable-next-line react/prop-types
const InformationBlock = ({ img, title, text, link, text2 }) => {
  return (
    <div className="info_Blocks">
      <img src={img} height="75px" />
      <br></br>
      <h3
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '15px',
          fontSize: '19px',
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: '16px', lineHeight: '1.50', marginTop: '-8px' }}>
        {text}
        <a href={link}> {text2}</a>
      </p>
    </div>
  )
}

export default InformationBlock
