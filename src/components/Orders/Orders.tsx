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

function Orders() {
  return (
    <div className='orders-container'>
      <div className='recent-orders'>
        <div className='orders-buttons'>
          <button className='sent-error-button'>Sent</button>
          <button className='sent-error-button'>Errors</button>
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