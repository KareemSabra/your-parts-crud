import axios from '@/axiosConfig';
import { Book } from '@/interfaces';

interface ApiResponse {
  data: Book[];
  status: number;
}

interface Parameters {
  page?: number;
  id?: number;
  author?: string;
  title?: string;
}

const getAllData = async (params?: Parameters): Promise<Book[] | any> => {
  const options = {
    baseURL: process.env.REACT_APP_API_URL,
    url: `/`,
    method: 'GET',
    params: {
      ...params,
    },
  };
  try {
    const response: ApiResponse = await axios(options);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default getAllData;
