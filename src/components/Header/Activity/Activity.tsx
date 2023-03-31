import './activity.css'

function Box() {
  return (
    <div className="boxes">
      <div className="boxes-count">6</div>
      <div className="boxes-title">
        <span>EMAIL</span>
      </div>
    </div>
  )
}



function Activity() {
  return (
    <>
      <div className="titleBar">
        90-DAY COMMUNICATION ACTIVITY
      </div>
      <div className="boxes-container">
        <Box />
        <Box />
        <Box />
      </div>
    </>
  )
}

export default Activity