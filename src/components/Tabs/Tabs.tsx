import { useState } from 'react';
import './tabs.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../types/types';

interface Tab {
  id: string
  label: string,
}

interface TabsProps {
  selectOrder: (id: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ selectOrder }) => {
  const [activeIndex, setActiveIndex] = useState<number>(2);
  const { data, isLoading, error } = useSelector((state: RootState) => state.ordersData)

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
      {tabs.map((tab, index) => {
        return (
          <div
            key={tab.id}
            className={`tab ${index === activeIndex ? 'active' : ''}`}
            onClick={() => {
              handleClick(index)
              selectOrder(tab.id)
            }}
          >
            {tab.label}
          </div>
        )
      })}
    </div>
  )
}

export default Tabs