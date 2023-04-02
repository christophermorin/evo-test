import './orders.css'

const orderCount = [1, 2, 3, 4]

const displayOrders = orderCount.map((order, i) => {
  console.log(i)
  if (i % 2 !== 0) {

    return (
      <div key={i} className='order-row' style={{ background: "#F2F4F7" }}></div>
    )
  } else {
    return (
      <div key={i} className='order-row'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
    )
  }
})

function Orders() {
  return (
    <div className='orders-container'>
      <div className='recent-orders'></div>
      <div className='labels'></div>
      <div>
        {displayOrders}
      </div>
    </div>
  )
}

export default Orders