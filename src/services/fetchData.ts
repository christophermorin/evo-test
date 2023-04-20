import axios from 'axios';
import { HeaderDataState, HeaderObject, OrdersDataState, OrdersObject } from '../types/types';

const headerURL: string = 'https://evoteam-verasoft.github.io/data/summary.json'
const ordersUrl: string = 'https://evoteam-verasoft.github.io/data/orders.json'

export const fetchHeaderData = async (): Promise<HeaderObject> => {
  try {
    const { data }: HeaderDataState = await axios.get(headerURL);
    return data
  } catch (error) {
    throw new Error('Failed to fetch object data');
  }
};

export const fetchOrdersData = async (): Promise<OrdersObject> => {
  try {
    const { data }: OrdersDataState = await axios.get(ordersUrl);
    return data;
  } catch (error) {
    throw new Error('Failed to fetch object data');
  }
}