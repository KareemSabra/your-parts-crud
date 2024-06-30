import axios from '@/axiosConfig';
import { Book } from '@/interfaces';

interface ApiResponse {
  status: number;
}

interface Parameters {
  id?: number;
}

const deleteAPI = async (params?: Parameters): Promise<any> => {
  const options = {
    baseURL: process.env.REACT_APP_API_URL,
    url: `/delete`,
    method: 'DELETE',
    params: {
      ...params,
    },
  };
  try {
    const response: ApiResponse = await axios(options);
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default deleteAPI;
