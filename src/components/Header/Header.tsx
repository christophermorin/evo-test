import './header.css'
import Activity from './Activity/Activity'
import Sms from './Sms/Sms'

function Header() {
  return (
    <div className="header-container">
      <div className='avatar'></div>
      <div className='contact'></div>
      <div className='activity'>
        <Activity />
      </div>
      <div className='sms-status'>
        <Sms />
      </div>
    </div>
  )
}

export default Header