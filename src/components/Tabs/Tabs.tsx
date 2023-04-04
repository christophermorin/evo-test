import { useState } from 'react';
import './tabs.css'

interface Tab {
  label: string,
}

const tabs: Tab[] = [
  {
    label: 'Order A'
  },
  {
    label: 'Order AA'
  },
  {
    label: 'Order AAA'
  },
  {
    label: 'Order B'
  },
  {
    label: 'Order C'
  },
]


function Tabs() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className='tabs-container'>
      {tabs.map((t, index) => {
        return (
          <div
            key={index}
            className={`tab ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            {t.label}
          </div>
        )
      })}
    </div>

  )
}

export default Tabs