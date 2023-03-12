/**
 * Method for fetch APIs
 * setData allways return Array object
 *
 * @function
 */

import { showMessage } from 'react-native-flash-message'

const API_URL = 'http://localhost:3000'

export type PropsFetcher = {
  url: string;
  method?: string;
  data?: any;
  headers?: {};
};

const fetcher = async ({
  url,
  method = 'get',
  data,
  headers,
}: PropsFetcher) => {
  try {
    let response = await fetch(`${API_URL}/${url}`, {
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        ...headers,
      },
      method,
    });
    let json = await response.json();
    return { data: json, status: response.status };
  } catch (e: any) {
    showMessage({
      duration: 3000,
      message: 'No data to show',
      type: 'danger',
    });
    return { status: e.response.status };
  }
};

export default fetcher;
