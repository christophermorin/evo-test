import './loading.css'
import { BeatLoader } from 'react-spinners'

const Loading: React.FC = () => {
  return (
    <div className='loading-container'>
      <BeatLoader />
    </div>
  )
}


export default Loading