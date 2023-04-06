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
        <div className='date text-overflow'>{formatDateString(orderData.sent_dt)}</div>
        <div className='time text-overflow'>{formatTimeString(orderData.sent_tm)}</div>
      </div>
      <div className='column-container'>
        <div className='subject text-overflow'>{orderData.subject.title}</div>
        <div className='order-contact text-overflow'>{orderData.subject.email}</div>
      </div>
      <div className='column-container'>
        <div className='communication-type text-overflow'>
          {orderData.type}
        </div>
      </div>
      <div className='order-resend'>
        <span className='order-number text-overflow'>{orderData.order_id}</span>
        <div className='resend-button text-overflow'>Resend</div>
      </div>
    </div>
  )
}

// ${ count % 2 === 0 ? 'every-second-row' : '' }

export default OrderRow