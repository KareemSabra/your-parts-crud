'use client';

import getAllData from '@/api/list';
import Loading from '@/components/loading';
import { Book } from '@/interfaces';
import CreateEditBook from '@/sections/create/view/create-edit-book';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function EditPage() {
  const [book, setBook] = useState<Book>();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const id = params?.id?.toString() || '';


  const fetchBookById = async (id: number) => {
    try {
      const response = await getAllData({ id });
      setBook(response.results[0]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching book:', error);
      setError(error?.response?.data?.message || 'Error fetching book');
    }
  };

  useEffect(() => {
    if (!id) return;
    const bookId = parseInt(id, 10);
    if (!isNaN(bookId)) {
      fetchBookById(bookId);
    } else {
      console.error('Invalid book id:', id);
    }
  }, [id]);

  return loading ? <Loading /> : <CreateEditBook book={book} />;
}
