import Loading from '@/components/loading';
import Pagination from '@/components/pagination/pagination';
import Typography from '@/components/typography';
import { Book } from '@/interfaces';
import React from 'react';
import BookCard from './book-card';

interface BookListProps {
  books: Book[];
  handleNext: Function;
  handlePrev: Function;
  handleEdit: Function;
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
}) => {
  return (
    <div>
      {loading ? (
        <div className="flex w-full justify-center h-96">
          <Loading />
        </div>
      ) : (
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-4">
          {books?.map((book, index) => (
            <BookCard key={index} {...book} handleEdit={handleEdit} />
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
