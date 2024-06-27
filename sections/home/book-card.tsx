import Image from '@/components/image/image';
import Typography from '@/components/typography';
import { Book } from '@/interfaces';
import React from 'react';

const UserCard: React.FC<Book> = ({ ISBN, title, author, imgURL }) => {
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
          <Typography variant="p">{author}</Typography>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
