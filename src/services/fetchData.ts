import axios from 'axios';

// Define the API endpoint URL
const headerURL: string = 'https://evoteam-verasoft.github.io/data/summary.json'
const ordersUrl: string = 'https://evoteam-verasoft.github.io/data/orders.json'

// Fetch object data from the API
export const fetchHeaderData = async () => {
  try {
    // Make an HTTP GET request to the API endpoint
    const response = await axios.get(headerURL);

    // Extract the data from the response and return it
    return response.data;
  } catch (error) {
    // Handle any errors that occurred during the API call
    throw new Error('Failed to fetch object data');
  }
};

export const fetchOrdersData = async () => {
  try {
    // Make an HTTP GET request to the API endpoint
    const response = await axios.get(ordersUrl);

    // Extract the data from the response and return it
    return response.data;
  } catch (error) {
    // Handle any errors that occurred during the API call
    throw new Error('Failed to fetch object data');
  }
}