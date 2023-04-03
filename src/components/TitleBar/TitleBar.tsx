import './titleBar.css'

function TitleBar() {
  return (
    <div className="titleBar-container">
      <div className='namebox'>
        <div className="star"><i className="fal fa-star fa-2x"></i></div>
        <div className='username'>Joseph Smith</div>
      </div>
      <button className='button'>
        New Order
      </button>
    </div>
  )
}

export default TitleBar