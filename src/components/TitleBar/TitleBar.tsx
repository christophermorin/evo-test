import './titleBar.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../types/types'

interface Props {
  handleOverlay: () => void
}

const TitleBar: React.FC<Props> = ({ handleOverlay }) => {
  const { data, isLoading, error } = useSelector((state: RootState) => state.headerData)

  return (
    <div className="titleBar-container">
      <div className='titleBar-namebox'>
        <div className="titleBar-star"><i className="fal fa-star fa-2x"></i></div>
        {isLoading && <div></div>}
        {!isLoading && !error &&
          <div className='titleBar-username'>
            <span>{`${data.first_name} ${data.last_name}`}</span>
          </div>
        }
      </div>
      <button className='titleBar-button' onClick={handleOverlay}>
        <span>New Order</span>
      </button>
    </div>
  )
}

export default TitleBar