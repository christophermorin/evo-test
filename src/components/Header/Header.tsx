import './header.css'
import Activity from './Activity/Activity'
import Sms from './Sms/Sms'

function Header() {
  return (
    <div className="header-container">
      <div className='avatar'><i className="fal fa-user fa-4x"></i></div>
      <div className='contact'>
        <ul className='contact-icons'>
          <li><i className="fal fa-user fa-sm"></i></li>
          <li><i className="fal fa-mobile fa-sm"></i></li>
          <li><i className="fal fa-building fa-sm"></i></li>
          <li><i className="fal fa-home fa-sm"></i></li>
          <li><i className="fal fa-at fa-sm"></i></li>
        </ul>
        <ul className='contact-details'>
          <li>#12345678</li>
          <li>248-555-1000</li>
          <li>248-555-1000 ext 1023</li>
          <li>248-555-1000</li>
          <li>joe.smith@testemail.com</li>
        </ul>
      </div>
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