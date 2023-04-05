import './titleBar.css'
import { useSelector } from 'react-redux'
interface Props {
  handleOverlay: () => void
}

const TitleBar: React.FC<Props> = ({ handleOverlay }) => {
  const { data, isLoading, error } = useSelector((state) => state.headerData)


  return (
    <div className="titleBar-container">
      <div className='namebox'>
        <div className="star"><i className="fal fa-star fa-2x"></i></div>
        {isLoading && <div className='username'></div>}
        {!isLoading && !error &&
          <div className='username'>{`${data.first_name} ${data.last_name}`}</div>
        }
      </div>
      <button className='button' onClick={handleOverlay}>
        New Order
      </button>
    </div>
  )
}

export default TitleBar