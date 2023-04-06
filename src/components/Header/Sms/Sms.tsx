import './sms.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../../types/types';

interface Options {
  month: "short" | "long";
  day: "numeric" | "2-digit";
  year: "numeric" | "2-digit";
}

const Sms: React.FC = () => {
  const { data, isLoading, error } = useSelector((state: RootState) => state.headerData)
  const options: Options = {
    month: "short",
    day: "numeric",
    year: "numeric"
  }

  let status: string = ""
  let date: string = ""

  if (!isLoading && !error) {
    status = data.carrier_status.status
    date = data.carrier_status.since
  }

  return (
    <>
      <div className="sms-titleBar">
        <span className='sms-title'>SMS carrier status</span>
      </div>
      {isLoading &&
        <div></div>
      }
      {!isLoading && !error &&
        <div>
          <div className="sms-box">
            <div className="sms-box-count">{status}</div>
            <div className="sms-box-title">
              <span className='sms-box-type'>{`Since ${new Date(date).toLocaleDateString("en-US", options)}`}</span>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Sms