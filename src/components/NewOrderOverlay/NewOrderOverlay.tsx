import './newOrderOverlay.css'
import ClipLoader from "react-spinners/ClipLoader";


interface Props {
  handleOverlay: () => void
}


const NewOrderOverlay: React.FC<Props> = ({ handleOverlay }) => {
  return (
    <div className="neworder-container">
      <i className="fal fa-times fa-2x close-neworder" onClick={handleOverlay}></i>
      <div className='spinner'>
        <ClipLoader
          color="#eeeeee"
          size={100}
          speedMultiplier={1}
          aria-label="Loading Spinner"
        />
        <span>Processing</span>
      </div>
    </div>
  )
}

export default NewOrderOverlay