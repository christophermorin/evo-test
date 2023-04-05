import './orderRow.css'
import { sentObject } from '../../../types/types'


interface Props {
  key: number,
  orderData: sentObject
}

interface DateOptions {
  day: "numeric",
  weekday: "short",
  month: "short",
}

interface TimeOptions {
  minute: "numeric",
  hour: "numeric",
  hour12: boolean,
}

function formatDateString(dateString: string): string {
  const options: DateOptions = {
    weekday: "short",
    month: "short",
    day: "numeric"
  };
  const date = new Date(dateString)
  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate
}

function formatTimeString(timeString: string): string {
  const [hours, minutes] = timeString.split(":");
  const date = new Date();
  date.setHours(parseInt(hours), parseInt(minutes));

  const options: TimeOptions = { hour: "numeric", minute: "numeric", hour12: true };
  const formattedTime = date.toLocaleTimeString("en-US", options);
  return formattedTime;
}

const OrderRow: React.FC<Props> = ({ orderData }) => {
  return (
    <div className={`order-row`}>
      <div className='column-container'>
        <div className='date'>{formatDateString(orderData.sent_dt)}</div>
        <div className='time'>{formatTimeString(orderData.sent_tm)}</div>
      </div>
      <div className='column-container'>
        <div className='subject'>{orderData.subject.title}</div>
        <div className='order-contact'>{orderData.subject.email}</div>
      </div>
      <div className='column-container'>
        <div className='communication-type'>
          {orderData.type}
        </div>
      </div>
      <div className='order-resend'>
        <span className='order-number'>{orderData.order_id}</span>
        <div className='resend-button'>Resend</div>
      </div>
    </div>
  )
}

// ${ count % 2 === 0 ? 'every-second-row' : '' }

export default OrderRow