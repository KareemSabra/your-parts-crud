import Button from '@/components/button/button';
import IconButton from '@/components/button/icon-button';
import Image from '@/components/image/image';
import Typography from '@/components/typography';
import { Book } from '@/interfaces';
import React from 'react';

interface BookCardProps extends Book {
  handleEdit?: Function;
  handleDelete?: Function;
  isView?: boolean;
}

const BookCard: React.FC<BookCardProps> = ({
  ISBN,
  title,
  author,
  imgURL,
  handleEdit,
  handleDelete,
  isView = true,
}) => {
  return (
    <div className="p-2 rounded-lg border-2 border-blue-900 ">
      <div className="flex flex-col justify-between h-full">
        {!isView && (
          <div className="flex justify-center w-full p-0 mt-1">
            <Typography variant="p">Book display</Typography>
          </div>
        )}
        <div className="flex justify-center mb-3">
          <Image url={imgURL} alt={title} />
        </div>
        <div className="p-2 flex-col align-middle">
          <Typography variant="h6" className="text-center pb-2">
            {title}
          </Typography>
          <div className="flex justify-between w-full p-0 mt-1">
            <Typography variant="p">{author}</Typography>
            {isView && (
              <div>
                <IconButton
                  icon={'mdi:edit-outline'}
                  onClick={() => handleEdit(ISBN)}
                />
                <IconButton
                  icon={'material-symbols:delete-sharp'}
                  onClick={() => handleDelete(ISBN)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
