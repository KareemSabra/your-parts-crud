import Loading from '@/components/loading';
import Pagination from '@/components/pagination/pagination';
import Typography from '@/components/typography';
import { Book } from '@/interfaces';
import React from 'react';
import BookCard from './book-card';
import Modal from '@/components/modal/modal';

interface BookListProps {
  books: Book[];
  handleNext: Function;
  handlePrev: Function;
  handleEdit: Function;
  handleDelete: Function;
  loading: boolean;
  limit: number;
}

const BooksList: React.FC<BookListProps> = ({
  books,
  handleNext,
  handlePrev,
  loading,
  limit,
  handleEdit,
  handleDelete,
}) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <Modal />
      {loading ? (
        <div className="flex-col w-full justify-center h-full">
          <Loading />
        </div>
      ) : (
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-4">
          {books?.map((book, index) => (
            <BookCard
              key={index}
              {...book}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      )}
      <Pagination
        handleNext={handleNext}
        handlePrev={handlePrev}
        limit={limit}
      />
    </div>
  );
};

export default BooksList;
