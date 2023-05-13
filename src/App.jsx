import React from 'react'
import './App.css'
import Buscador from './components/Buscador/Buscador.jsx'
import MainInfoBlocks from './components/info_blocks/main_infoBlocks.jsx'
import LastImage from './components/LastImage/LastImage.jsx'
import Onboarding from './components/Onboarding/Onboarding.jsx'
import FAQ from './components/FAQ/FAQ.jsx'
import DropDownMenu from './components/DropDownMenu/DropDownMenu.jsx'
import SocialMedia from './components/SocialMedia/SocialMedia.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SocialMedia />
        <DropDownMenu />
      </header>
      <div>
        <Buscador></Buscador>
      </div>
      <div>
        <div className="fondo">
          <svg
            className="content-info__curve"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1438 134"
          >
            <path
              d="M1438 1442H0V31.001S438.105 0 719 .001c280.896 0 719 31 719 31V1442z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div>
          {' '}
          <MainInfoBlocks className="mainInfo"></MainInfoBlocks>
        </div>
      </div>
      <div>
        <Onboarding></Onboarding>
      </div>
      <div>
        <LastImage></LastImage>
      </div>
      <div>
        <FAQ></FAQ>
      </div>
    </div>
  )
}

export default App
