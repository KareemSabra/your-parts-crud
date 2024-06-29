'use client';

import getAllData from '@/api/list';
import Button from '@/components/button/button';
import Loading from '@/components/loading';
import React, { use, useEffect, useState } from 'react';
import { Book } from '@/interfaces';
import BooksList from '../books-list';
import { useRouter } from 'next/navigation';
import deleteAPI from '@/api/delete';

const HomeView: React.FC = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(1);

  const [books, setBooks] = useState<Book[]>([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await getAllData({
        page: limit,
      });
      setLoading(false);
      setBooks(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [limit]);

  const handleNext = () => {
    setLimit(limit + 1);
  };

  const handlePrev = () => {
    setLimit(limit - 1);
  };

  const handleEdit = (id: number) => {
    console.log('Edit book with id = ', id);
    router.push(`/edit/${id}`);
  };

  const submitDelete = async (id: number) => {
    try {
      const res = await deleteAPI({ id });
      console.log(res);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: number) => {
    console.log('Delete book with id = ', id);
    await submitDelete(id);
  };

  return (
    <BooksList
      books={books}
      handleNext={handleNext}
      handlePrev={handlePrev}
      loading={loading}
      limit={limit}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default HomeView;
