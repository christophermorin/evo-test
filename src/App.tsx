import './App.css'
import TitleBar from './components/TitleBar/TitleBar'
import Header from './components/Header/Header'
import Tabs from './components/Tabs/Tabs'
import Orders from './components/Orders/Orders'




function App() {

  return (
    <div className="main-container">
      <TitleBar />
      <Header />
      <Tabs />
      <div className='divider'></div>
      <Orders />
    </div>
  )
}

export default App
