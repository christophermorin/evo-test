import axios from 'axios';

const headerURL: string = 'https://evoteam-verasoft.github.io/data/summary.json'
const ordersUrl: string = 'https://evoteam-verasoft.github.io/data/orders.json'

export const fetchHeaderData = async () => {
  try {
    const response = await axios.get(headerURL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch object data');
  }
};

export const fetchOrdersData = async () => {
  try {
    const response = await axios.get(ordersUrl);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch object data');
  }
}