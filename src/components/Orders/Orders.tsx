import { ReactElement, useEffect, useState } from 'react'
import './orders.css'
import OrderRow from './OrderRow/OrderRow'
import Tabs from '../Tabs/Tabs'
import Loading from './Loading/Loading'
import Placeholder from './Placeholder/Placeholder'
import { useSelector } from 'react-redux'

interface Catagory {
  label: string,
}

const catagory: Catagory[] = [
  {
    label: 'Sent'
  },
  {
    label: 'Error'
  }
]

function Orders() {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [hasOrders, setHasOrders] = useState<boolean>(true)
  const [currentOrders, setCurrentOrders] = useState<ReactElement[]>([])
  const [errorLoader, setErrorLoader] = useState<ReactElement | null>()
  const { data, isLoading, error } = useSelector((state) => state.ordersData)

  useEffect(() => {
    if (data && !error) {
      for (let order in data) {
        if (data[order].sent) {
          setCurrentOrders(data[order].sent.map(order => {
            return (
              <OrderRow key={order.id} orderData={order} />
            )
          }))
        }
      }
    }
  }, [data])

  const handleClick = (index: number, label: string) => {
    setActiveIndex(index);
    if (label === 'Error') {
      setErrorLoader(<Loading key="loading" />)
      setTimeout(() => {
        setErrorLoader(< Placeholder key={'placeholder'} />)
      }, 2000)
    } else {
      setErrorLoader(null)
    }
  };

  const selectOrder = (id: string) => {
    if (data && !error) {
      if (data[id].sent) {
        setHasOrders(true)
        setCurrentOrders(data[id].sent.map(order => {
          return (
            <OrderRow key={order.id} orderData={order} />
          )
        }))
      } else {
        setHasOrders(false)
        setCurrentOrders([<Placeholder key={'placeholder'} />])
      }
    }
  }

  return (
    <>
      <Tabs selectOrder={selectOrder} />
      <div className='divider'></div>
      <div className='orders-container'>
        <div className='recent-orders'>
          {hasOrders &&
            <div className='orders-buttons'>
              {catagory.map((cat, index) => {
                return (
                  <button
                    key={index}
                    className={`catagory-button ${index === activeIndex ? 'active-catagory' : 'inactive-catagory'}`}
                    onClick={() => handleClick(index, cat.label)}
                  >
                    {cat.label}
                  </button>
                )
              })}
            </div>
          }
          <div className='orders-header'>
            Recent Orders
          </div>
        </div>
        {isLoading
          ? <Loading /> :
          <>
            <div className='labels'>
              <div>DATE & TIME</div>
              <div>SUBJECT</div>
              <div>COMMUNICATION TYPE</div>
              <div>ORDER #</div>
            </div>
            {errorLoader ? errorLoader :
              <div>
                {currentOrders}
              </div>
            }
          </>}
      </div>
    </>
  )
}

export default Orders