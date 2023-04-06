import { useSelector } from 'react-redux'
import './header.css'
import Activity from './Activity/Activity'
import HeaderOverlay from './HeaderOverlay/HeaderOverlay'
import Sms from './Sms/Sms'
import { RootState } from '../../types/types'
import { getAge } from '../utils/getAge'

const Header: React.FC = () => {
  const { data, isLoading, error } = useSelector((state: RootState) => state.headerData)

  return (
    <div className="header-container">
      {isLoading && <HeaderOverlay />}
      <div className='header-avatar'>
        {!isLoading && !error &&
          <>
            <i className="fal fa-user fa-4x"></i>
            <div className='header-age-gender'>
              <span>{data.gender}</span>
              <span> - </span>
              <span>{getAge(data.birth_date)}</span>
            </div>
          </>
        }
      </div>
      <div className='header-contact'>
        {isLoading && <div></div>}
        {!isLoading && !error &&
          <>
            <ul className='header-contact-icons'>
              <li><i className="fal fa-user fa-sm"></i></li>
              <li><i className="fal fa-mobile fa-sm"></i></li>
              <li><i className="fal fa-building fa-sm"></i></li>
              <li><i className="fal fa-home fa-sm"></i></li>
              <li><i className="fal fa-at fa-sm"></i></li>
            </ul>
            <ul className='header-contact-details'>
              <li><span>{`#${data.id}`}</span></li>
              <li><span>{data.mobile_phone}</span></li>
              <li><span>{data.work_phone}</span></li>
              <li><span>{data.home_phone}</span></li>
              <li><span>{data.email}</span></li>
            </ul>
          </>
        }
      </div>
      <div className='header-activity'>
        <Activity />
      </div>
      <div className='header-sms-status'>
        <Sms />
      </div>
    </div>
  )
}

export default Header