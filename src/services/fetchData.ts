import axios from 'axios';
import { HeaderDataState, HeaderObject, OrdersDataState, OrdersObject } from '../types/types';

const headerURL: string = 'https://evoteam-verasoft.github.io/data/summary.json'
const ordersUrl: string = 'https://evoteam-verasoft.github.io/data/orders.json'

export const fetchHeaderData = async (): Promise<HeaderObject> => {
  try {
    const response: HeaderDataState = await axios.get(headerURL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch object data');
  }
};

export const fetchOrdersData = async (): Promise<OrdersObject> => {
  try {
    const response: OrdersDataState = await axios.get(ordersUrl);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch object data');
  }
}