import './headerOverlay.css'
import { BeatLoader } from 'react-spinners'





const HeaderOverlay: React.FC = () => {
  return (
    <div className="header-overlay">
      <BeatLoader size={20} />
    </div>
  )
}

export default HeaderOverlay