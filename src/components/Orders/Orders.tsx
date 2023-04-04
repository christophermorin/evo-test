import { useState } from 'react'
import './orders.css'
import OrderRow from './OrderRow/OrderRow'


export interface orderRowProps {
  id: number,
}
const orderCount: orderRowProps[] = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
]

const displayOrders: JSX.Element[] = orderCount.map((row, i) => {
  return (
    <OrderRow key={row.id} count={row.id} />
  )
})

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
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className='orders-container'>
      <div className='recent-orders'>
        <div className='orders-buttons'>
          {catagory.map((cat, index) => {
            return (
              <button
                key={index}
                className={`catagory-button ${index === activeIndex ? 'active-catagory' : 'inactive-catagory'}`}
                onClick={() => handleClick(index)}
              >
                {cat.label}
              </button>
            )
          })}
          {/* <button className='sent-error-button'>Sent</button>
          <button className='sent-error-button'>Errors</button> */}
        </div>
        <div className='orders-header'>
          Recent Orders
        </div>
      </div>
      <div className='labels'>
        <div>DATE & TIME</div>
        <div>SUBJECT</div>
        <div>COMMUNICATION TYPE</div>
        <div>ORDER #</div>
      </div>
      <div>
        {displayOrders}
      </div>
    </div>
  )
}

export default Orders