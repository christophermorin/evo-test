import './sms.css'

function Box() {
  return (
    <div className="sms-box">
      <div className="sms-box-count">6</div>
      <div className="sms-box-title">
        <span>SMS TEST</span>
      </div>
    </div>
  )
}



function Sms() {
  return (
    <>
      <div className="sms-titleBar">
        SMS CARRIER STATUS
      </div>
      <div>
        <Box />
      </div>
    </>
  )
}

export default Sms