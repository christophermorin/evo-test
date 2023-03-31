import './titleBar.css'

function TitleBar() {
  return (
    <div className="titleBar-container">
      <div className='namebox'>
        <div className="star"></div>
        <div className='name'>Joseph Smith</div>
      </div>
      <button className='button'>
        New Order
      </button>
    </div>
  )
}

export default TitleBar