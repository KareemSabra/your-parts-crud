import Button from '@/components/button/button';
import IconButton from '@/components/button/icon-button';
import Image from '@/components/image/image';
import Typography from '@/components/typography';
import { Book } from '@/interfaces';
import React from 'react';

interface BookCardProps extends Book {
  handleEdit: Function;
}

const BookCard: React.FC<BookCardProps> = ({
  ISBN,
  title,
  author,
  imgURL,
  handleEdit,
}) => {
  return (
    <div className="p-2 rounded-lg border-2 border-blue-900 ">
      <div className="flex flex-col justify-between h-full">
        <div className="flex justify-center mb-3">
          <Image url={imgURL} alt={title} />
        </div>
        <div className="p-2 flex-col align-middle">
          <Typography variant="h6" className="text-center pb-2">
            {title}
          </Typography>
          <div className="flex justify-between w-full p-0 mt-1">
            <Typography variant="p">{author}</Typography>
            <IconButton
              icon={'mdi:edit-outline'}
              onClick={() => handleEdit(ISBN)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
