import { useState, useEffect, useRef, ReactNode } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import TitleBar from './components/TitleBar/TitleBar'
import Header from './components/Header/Header'
import Tabs from './components/Tabs/Tabs'
import Orders from './components/Orders/Orders'
import NewOrderOverlay from './components/NewOrderOverlay/NewOrderOverlay'
import { fetchHeaderDataRequest } from './reducers/headerReducer'
import { fetchOrdersDataRequest } from './reducers/orderReducer'
import { RootState } from './store/store'

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
  // const { data, isLoading, error } = useSelector((state) => state.ordersData)


  useEffect(() => {
    dispatch(fetchHeaderDataRequest())
    dispatch(fetchOrdersDataRequest())
  }, [])

  const handleOverlay = () => {
    setShowOverlay(!showOverlay)
  }


  // passes in the index
  // grab orders data at that index
  // pass that data to orders or a new store?
  // If new store, you can just pull it in to orders row instead of prop drilling down through orders.
  // }

  return (
    <div className="main-container">
      {showOverlay &&
        <Overlay>
          <NewOrderOverlay handleOverlay={handleOverlay} />
        </Overlay>}
      <TitleBar handleOverlay={handleOverlay} />
      <Header />
      {/* <Tabs selectOrder={selectOrder} /> */}
      {/* <div className='divider'></div> */}
      <Orders />
    </div>
  )
}

export default App
