import Loading from '@/components/loading';
import Pagination from '@/components/pagination/pagination';
import Typography from '@/components/typography';
import { Book } from '@/interfaces';
import React from 'react';
import BookCard from './book-card';
import Modal from '@/components/modal/modal';
import Input from '@/components/input/input';
import Button from '@/components/button/button';

interface BookListProps {
  books: Book[];
  handleNext: Function;
  handlePrev: Function;
  handleEdit: Function;
  handleDelete: Function;
  loading: boolean;
  limit: number;
  count: number;
  filters: {
    title: string;
    author: string;
  };
  setFilters: Function;
  handleFilters: Function;
}

const BooksList: React.FC<BookListProps> = ({
  books,
  handleNext,
  handlePrev,
  loading,
  limit,
  count,
  handleEdit,
  handleDelete,
  filters,
  setFilters,
  handleFilters,
}) => {
  return (
    <div className="flex flex-col justify-between h-full">
      {loading ? (
        <div className="flex-col w-full justify-center h-full">
          <Loading />
        </div>
      ) : (
        <>
          <div className="flex flex-col sm:flex-row justify-start w-full p-0 mt-1 mb-2">
            <div className="mr-2">
              <Input
                placeholder="Search by title"
                type="text"
                onChange={(e) => {
                  setFilters({
                    ...filters,
                    title: e.target.value,
                  });
                }}
                value={filters.title}
              />
            </div>
            <div className="mr-2">
              <Input
                placeholder="Search by author"
                type="text"
                onChange={(e) => {
                  setFilters({
                    ...filters,
                    author: e.target.value,
                  });
                }}
                value={filters.author}
              />
            </div>
            <div className="mr-2 pt-1">
              <Button onClick={() => handleFilters()} text={'Search'} />
            </div>
          </div>
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
        </>
      )}
      <Pagination
        handleNext={handleNext}
        handlePrev={handlePrev}
        limit={limit}
        count={count}
      />
    </div>
  );
};

export default BooksList;
