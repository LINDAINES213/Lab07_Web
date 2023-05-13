import React from 'react'
import './Onboarding.css'

const Onboarding = () => {
  return (
    <div className="Onboarding">
      <h1 style={{ fontSize: '40px', marginTop: '20%' }}>
        We don’t store your
        <br></br>
        personal information. Ever.
      </h1>
      <p>
        Our privacy policy is simple: we don’t collect
        <br></br>
        or share any of your personal information.
      </p>
      <button
        style={{
          marginTop: '1%',
          background: '#336F56',
          color: 'white',
          padding: '12px 20px 10px',
        }}
      >
        Add DuckDuckGo
      </button>
    </div>
  )
}

export default Onboarding
