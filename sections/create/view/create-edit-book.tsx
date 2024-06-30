'use client';
import React, { useState } from 'react';
import AddEditBookForm from '../add-edit-book';
import { Book } from '@/interfaces';
import BookCard from '@/sections/home/book-card';
import CreateBook from '@/api/create';
import EditBook from '@/api/edit';

interface CreateEditBookProps {
  book?: Book;
}

const CreateEditBook: React.FC<CreateEditBookProps> = ({ book }) => {
  const bookInitialValues: Book = {
    ISBN: book?.ISBN || 0,
    title: book?.title || '',
    author: book?.author || '',
    imgURL: book?.imgURL || '',
  };

  const [bookState, setBookState] = useState<Book>(bookInitialValues);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleEdit = async () => {
    try {
      setError('');
      setSuccess('');
      const res = await EditBook({ data: bookState });
      setSuccess('Book updated successfully Redirecting to home page');
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    } catch (error) {
      console.log(error);
      setError(error?.response?.data?.message || 'Error Editing book');
    }
  };

  const handleCreate = async () => {
    try {
      setError('');
      setSuccess('');
      const res = await CreateBook({ data: bookState });
      setSuccess('Book created successfully Redirecting to home page');
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    } catch (error) {
      console.log(error);
      setError(error?.response?.data?.message || 'Error creating book');
    }
  };

  const submitBook = book?.ISBN ? handleEdit : handleCreate;

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-around">
      <AddEditBookForm
        book={bookState}
        error={error}
        success={success}
        setBookState={setBookState}
        submitBook={submitBook}
      />
      <div className="mb-4 md:min-w-80">
        <BookCard
          {...bookState}
          handleEdit={() => {}}
          handleDelete={() => {}}
          isView={false}
        />
      </div>
    </div>
  );
};

export default CreateEditBook;
