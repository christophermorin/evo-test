import { ReactElement, useEffect, useState } from 'react'
import './orders.css'
import Tabs from '../Tabs/Tabs'
import Loading from './Loading/Loading'
import Placeholder from './Placeholder/Placeholder'
import { useSelector, useDispatch } from 'react-redux'
import { sentObject } from '../../types/types'
import { fetchOrdersDataRequest } from '../../reducers/orderReducer'
import { formatDateString, formatTimeString } from '../utils/formatDateTime'
import { RootState } from '../../types/types'

interface Catagory {
  label: string,
}

const catagory: Catagory[] = [
  { label: 'Sent' },
  { label: 'Errors' }
]

function Orders() {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [hasOrders, setHasOrders] = useState<boolean>(true)
  const [currentOrders, setCurrentOrders] = useState<sentObject[]>([])
  const [errorLoader, setErrorLoader] = useState<ReactElement | null>()

  const [sortDirection, setSortDirection] = useState('asc');

  const { data, isLoading, error } = useSelector((state: RootState) => state.ordersData)
  const dispatch = useDispatch()

  useEffect(() => {
    if (data && !error) {
      for (let order in data) {
        if (data[order].sent) {
          setCurrentOrders(data[order].sent)
          break;
        }
      }
    }
  }, [data])

  const handleSort = (property: keyof sentObject) => {
    console.log(property)
    const sortedOrders = [...currentOrders].sort((a, b) => {
      if (a[property] < b[property]) {
        return -1;
      }
      if (a[property] > b[property]) {
        return 1;
      }
      return 0;
    });

    if (sortDirection === 'asc') {
      setCurrentOrders(sortedOrders);
      setSortDirection('desc');
    } else if (sortDirection === 'desc') {
      setCurrentOrders(sortedOrders.reverse());
      setSortDirection('asc');
    }
  };

  // Rename this
  const handleCatagory = (index: number, label: string) => {
    setActiveIndex(index);
    if (label === 'Errors') {
      setErrorLoader(<Loading key='loading' />)
      setTimeout(() => {
        setErrorLoader(< Placeholder key={'placeholder'} />)
      }, 2000)
    } else {
      dispatch(fetchOrdersDataRequest())
      setErrorLoader(null)
    }
  };

  const selectOrder = (id: string) => {
    if (data && !error) {
      if (data[id].sent) {
        setHasOrders(true)
        setCurrentOrders(data[id].sent)
      } else {
        setHasOrders(false)
        setCurrentOrders([])
      }
    }
  }

  return (
    <>
      <Tabs selectOrder={selectOrder} />
      <div className='divider'></div>
      <div className='orders-container'>
        <div className='orders-topBar'>
          {hasOrders &&
            <div className='orders-buttons'>
              {catagory.map((cata, index) => {
                return (
                  <button
                    key={index}
                    className={`catagory-button ${index === activeIndex ? 'active-catagory' : 'inactive-catagory'}`}
                    onClick={() => handleCatagory(index, cata.label)}
                  >
                    <span>{cata.label}</span>
                  </button>
                )
              })}
            </div>
          }
          <div className='orders-recent'>
            Recent Orders
          </div>
        </div>
        {isLoading
          ? <Loading /> : errorLoader ? errorLoader :
            <>
              <table className='orders-table'>
                <thead >
                  <tr className='orders-headers'>
                    <th onClick={() => handleSort('sent_dt')}><span>Date & Time</span></th>
                    <th onClick={() => handleSort('subject')}><span>Subject</span></th>
                    <th onClick={() => handleSort('type')}><span>Communication Type</span></th>
                    <th onClick={() => handleSort('order_id')}><span>Order #</span></th>
                  </tr>
                </thead>
                <tbody>
                  {currentOrders.map((order, i) => (
                    <tr key={order.id} className={`order-row ${i % 2 ? 'alt-bg' : ''}`}>
                      <td className='order-column font-16-22'>
                        <span className='text-overflow'>{formatDateString(order.sent_dt)}</span>
                        <span className='text-overflow'>{formatTimeString(order.sent_tm)}</span>
                      </td>
                      <td className='order-column font-16-22'>
                        <span className='text-overflow'>{order.subject.title}</span>
                        <span className='text-overflow'>{order.subject.email}</span>
                      </td>
                      <td className='order-column font-14-19'>
                        <span className='text-overflow'>{order.type}</span>
                      </td>
                      <td className='order-column font-14-19'>
                        <span className='text-overflow'>{order.order_id}</span>
                      </td>
                      <td className='order-column'><div className='orders-resend'>Resend</div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>}
      </div>
    </>
  )
}

export default Orders