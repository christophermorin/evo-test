import './activity.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../../types/types'

const Activity: React.FC = () => {
  const { data, isLoading, error } = useSelector((state: RootState) => state.headerData)

  return (
    <>
      <div className="act-titleBar">
        <span className='act-title'>90-day Communication Activity</span>
      </div>
      <div className="act-boxes-container">
        {isLoading || error &&
          <>
            <div className='act-boxes'></div>
            <div className='act-boxes'></div>
            <div className='act-boxes'></div>
          </>
        }
        {!isLoading && !error &&
          <>
            <div className="act-boxes">
              <div className="act-boxes-count">{data.activity.sms}</div>
              <div className="act-boxes-title">
                <span className='act-boxes-type'>SMS</span>
              </div>
            </div>
            <div className="act-boxes">
              <div className="act-boxes-count">{data.activity.email}</div>
              <div className="act-boxes-title">
                <span className='act-boxes-type'>Email</span>
              </div>
            </div>
            <div className="act-boxes">
              <div className="act-boxes-count">{data.activity.orders}</div>
              <div className="act-boxes-title">
                <span className='act-boxes-type'>Orders</span>
              </div>
            </div>
          </>
        }
      </div>
    </>
  )
}

export default Activity