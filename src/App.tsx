import { useState, useEffect, ReactNode } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import TitleBar from './components/TitleBar/TitleBar'
import Header from './components/Header/Header'
import Orders from './components/Orders/Orders'
import NewOrderOverlay from './components/NewOrderOverlay/NewOrderOverlay'
import { fetchHeaderDataRequest } from './reducers/headerReducer'
import { fetchOrdersDataRequest } from './reducers/orderReducer'

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHeaderDataRequest())
    dispatch(fetchOrdersDataRequest())
  }, [])

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
      <Orders />
    </div>
  )
}

export default App
