import './orderRow.css'
function OrderRow({ count }) {

  console.log(count)

  return (
    <div className={`order-row ${count % 2 === 0 ? 'every-second-row' : ''}`}>
      <div className='column-container'>
        <div className='date'>Sat, apr 14</div>
        <div className='time'>4:30pm</div>
      </div>
      <div className='column-container'>
        <div className='subject'>Thank you Bonus</div>
        <div className='order-contact'>mail@mail.com</div>
      </div>
      <div className='column-container'>
        <div className='communication-type'>
          Promotion Email
        </div>
      </div>
      <div className='order-resend'>
        <span className='order-number'>123456</span>
        <span className='resend-button'>Resend</span>
      </div>
    </div>
  )
}

export default OrderRow