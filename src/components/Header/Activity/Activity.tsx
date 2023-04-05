import './activity.css'
import { useSelector } from 'react-redux'

const Activity: React.FC = () => {
  const { data, isLoading, error } = useSelector((state) => state.headerData)

  return (
    <>
      <div className="titleBar">
        90-DAY COMMUNICATION ACTIVITY
      </div>
      <div className="boxes-container">
        {isLoading &&
          <>
            <div className='boxes'></div>
            <div className='boxes'></div>
            <div className='boxes'></div>
          </>
        }
        {!isLoading && !error &&
          <>
            <div className="boxes">
              <div className="boxes-count">{data.activity.sms}</div>
              <div className="boxes-title">
                <span>SMS</span>
              </div>
            </div>
            <div className="boxes">
              <div className="boxes-count">{data.activity.email}</div>
              <div className="boxes-title">
                <span>Email</span>
              </div>
            </div>
            <div className="boxes">
              <div className="boxes-count">{data.activity.orders}</div>
              <div className="boxes-title">
                <span>Orders</span>
              </div>
            </div>
          </>
        }
      </div>
    </>
  )
}

export default Activity