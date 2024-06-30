import axios from '@/axiosConfig';
import { Book } from '@/interfaces';

interface ApiResponse {
  status: number;
}

interface Parameters {
  data?: Book;
}

const CreateBook = async (params?: Parameters): Promise<Book[] | any> => {
  const options = {
    baseURL: process.env.REACT_APP_API_URL,
    url: `/add`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(params?.data),
  };
  try {
    const response: ApiResponse = await axios(options);
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    throw error;
  }
};

export default CreateBook;
