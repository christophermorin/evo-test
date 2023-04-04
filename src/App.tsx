import { useState, useEffect, useRef, ReactNode } from 'react'
import './App.css'
import TitleBar from './components/TitleBar/TitleBar'
import Header from './components/Header/Header'
import Tabs from './components/Tabs/Tabs'
import Orders from './components/Orders/Orders'
import NewOrderOverlay from './components/NewOrderOverlay/NewOrderOverlay'

interface OverlayProps {
  children: ReactNode
}
const Overlay: React.FC<OverlayProps> = ({ children }) => {
  return (
    <div className='overlay'>
      {children}
    </div>
  )
}

function App() {
  const [showOverlay, setShowOverlay] = useState<boolean>(false)

  const handleOverlay = () => {
    setShowOverlay(!showOverlay)
  }

  return (
    <div className="main-container">
      {showOverlay &&
        <Overlay>
          <NewOrderOverlay handleOverlay={handleOverlay} />
        </Overlay>}
      <TitleBar handleOverlay={handleOverlay} />
      <Header />
      <Tabs />
      <div className='divider'></div>
      <Orders />
    </div>
  )
}

export default App
