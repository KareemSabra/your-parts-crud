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
  loading: boolean;
  limit: number;
}

const BooksList: React.FC<BookListProps> = ({
  books,
  handleNext,
  handlePrev,
  loading,
  limit,
}) => {
  return (
    <div>
      <Typography variant="h3">Books List</Typography>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-4">
          {books?.map((book, index) => <BookCard key={index} {...book} />)}
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
