import { ReactNode } from 'react'
import './header.css'
import './Activity/activity.css'
import Activity from './Activity/Activity'
import HeaderOverlay from './HeaderOverlay/HeaderOverlay'
import Sms from './Sms/Sms'
import { useSelector } from 'react-redux'

function getAge(birthDate: string): number {
  const birthYear = Number(birthDate.slice(0, 4))
  const yearNow = new Date().getFullYear()
  const currentAge = yearNow - birthYear

  return currentAge
}


const Header: React.FC = () => {
  const { data, isLoading, error } = useSelector((state) => state.headerData)

  return (
    <div className="header-container">
      {isLoading && <HeaderOverlay />}
      <div className='avatar'>
        {!isLoading && !error &&
          <>
            <i className="fal fa-user fa-4x"></i>
            <div className='age-gender'>
              <span>{data.gender}</span>
              <span> - </span>
              <span>{getAge(data.birth_date)}</span>
            </div>
          </>
        }
      </div>
      <div className='contact'>
        {isLoading && <div></div>}
        {!isLoading && !error &&
          <>
            <ul className='contact-icons'>
              <li><i className="fal fa-user fa-sm"></i></li>
              <li><i className="fal fa-mobile fa-sm"></i></li>
              <li><i className="fal fa-building fa-sm"></i></li>
              <li><i className="fal fa-home fa-sm"></i></li>
              <li><i className="fal fa-at fa-sm"></i></li>
            </ul>
            <ul className='contact-details'>
              <li>{data.id}</li>
              <li>{data.mobile_phone}</li>
              <li>{data.work_phone}</li>
              <li>{data.home_phone}</li>
              <li>{data.email}</li>
            </ul>
          </>
        }
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