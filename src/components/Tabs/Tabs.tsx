import { useState } from 'react';
import './tabs.css'
import { useSelector } from 'react-redux';

interface Tab {
  id: string
  label: string,
}

interface TabsProps {
  selectOrder: (id: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ selectOrder }) => {
  const [activeIndex, setActiveIndex] = useState<number>(2);
  const { data, isLoading, error } = useSelector((state) => state.ordersData)

  const tabs: Tab[] = []
  if (!isLoading && !error) {
    for (let order in data) {
      tabs.push(
        {
          id: order,
          label: order.replace('_', ' ')
        }
      )
    }
  }

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className='tabs-container'>
      {tabs.map((t, index) => {
        return (
          <div
            key={t.id}
            className={`tab ${index === activeIndex ? 'active' : ''}`}
            onClick={() => {
              handleClick(index)
              selectOrder(t.id)
            }}
          >
            {t.label}
          </div>
        )
      })}
    </div>

  )
}

export default Tabs