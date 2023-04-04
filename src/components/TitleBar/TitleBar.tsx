import { useState, useEffect } from 'react'
import './titleBar.css'

// interface OverlayProps {
//   isOpen: boolean,
//   handleOverlay: () => void
// }
// const Overlay: React.FC<OverlayProps> = ({ isOpen, handleOverlay }) => {
//   return (
//     <div className='overlay-container'>
//       <div
//         className='overlay-x'
//         onClick={handleOverlay}
//       >
//         X
//       </div>
//       <div className='overlay-spinner'>
//         Spinner
//       </div>
//     </div>
//   )
// }

interface Props {
  handleOverlay: () => void
}

const TitleBar: React.FC<Props> = ({ handleOverlay }) => {
  // const [showOverlay, setShowOverlay] = useState<boolean>(false)
  // useEffect(() => {
  //   if (showOverlay) {
  //     document.body.classList.add('blur-body');
  //   } else {
  //     document.body.classList.remove('blur-body');
  //   }
  // }, [showOverlay]);

  // const handleOverlay = () => {
  //   setShowOverlay(!showOverlay)
  // }

  return (
    <div className="titleBar-container">
      <div className='namebox'>
        <div className="star"><i className="fal fa-star fa-2x"></i></div>
        <div className='username'>Joseph Smith</div>
      </div>
      <button className='button' onClick={handleOverlay}>
        New Order
      </button>
      {/* {showOverlay && <Overlay isOpen={showOverlay} handleOverlay={handleOverlay} />} */}
    </div>
  )
}

export default TitleBar