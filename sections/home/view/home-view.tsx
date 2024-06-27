'use client';

import getAllData from '@/api/list';
import Button from '@/components/button/button';
import Loading from '@/components/loading';
import React, { use, useEffect, useState } from 'react';
import { Book } from '@/interfaces';
import BooksList from '../books-list';

const HomeView: React.FC = () => {
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
      console.log(response);
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

  return (
    <BooksList
      books={books}
      handleNext={handleNext}
      handlePrev={handlePrev}
      loading={loading}
      limit={limit}
    />
  );
};

export default HomeView;
