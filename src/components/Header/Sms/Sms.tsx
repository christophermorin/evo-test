import './sms.css'
import { useSelector } from 'react-redux'

interface Options {
  month: "short" | "long";
  day: "numeric" | "2-digit";
  year: "numeric" | "2-digit";
}


function Sms() {
  const { data, isLoading, error } = useSelector((state) => state.headerData)
  let status: string = ""
  let date: string = ""

  const options: Options = {
    month: "short",
    day: "numeric",
    year: "numeric"
  }

  if (!isLoading && !error) {
    status = data.carrier_status.status
    date = data.carrier_status.since
  }

  return (
    <>
      <div className="sms-titleBar">
        SMS CARRIER STATUS
      </div>
      {isLoading &&
        <div></div>
      }
      {!isLoading && !error &&
        <div>
          <div className="sms-box">
            <div className="sms-box-count">{status}</div>
            <div className="sms-box-title">
              <span>{`Since ${new Date(date).toLocaleDateString("en-US", options)}`}</span>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Sms