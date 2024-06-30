'use client';

import getAllData from '@/api/list';
import Button from '@/components/button/button';
import Loading from '@/components/loading';
import React, { use, useEffect, useState } from 'react';
import { Book } from '@/interfaces';
import BooksList from '../books-list';
import { useRouter } from 'next/navigation';
import deleteAPI from '@/api/delete';
import Modal from '@/components/modal/modal';

const HomeView: React.FC = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(1);

  const [filters, setFilters] = useState({
    author: '',
    title: '',
  });

  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
  const [actionID, setActionID] = useState<number | null>(null);

  const [books, setBooks] = useState<Book[]>([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await getAllData({
        page: limit,
        ...(filters.author && { author: filters.author }),
        ...(filters.title && { title: filters.title }),
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

  const handleFilters = () => {
    setLimit(1);
    fetchData();
  }
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
      setOpenDeleteConfirm(false);
      setActionID(0);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: number) => {
    console.log('Delete book with id = ', id);
    setActionID(id);
    setOpenDeleteConfirm(true);
  };

  return (
    <>
      <BooksList
        books={books}
        handleNext={handleNext}
        handlePrev={handlePrev}
        loading={loading}
        limit={limit}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        filters={filters}
        setFilters={setFilters}
        handleFilters={handleFilters}
      />
      <Modal
        openModal={openDeleteConfirm}
        modalTitle="Delete Book"
        modalContent={`Are you sure you want to delete ${
          books?.length > 0
            ? books.find((book) => book.ISBN === actionID)?.title
            : 'this book'
        }?`}
        submitText="Delete"
        actionID={actionID}
        handleSubmit={(id: number) => {
          submitDelete(id);
        }}
        handleCancel={() => setOpenDeleteConfirm(false)}
      />
    </>
  );
};

export default HomeView;
