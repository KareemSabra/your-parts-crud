import React from 'react';
import { Icon } from '@iconify/react';

interface IconButtonProps {
  icon: string;
  onClick: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => {
  return (
    <button onClick={onClick} className="hover:bg-blue-400 rounded-full p-1">
      <Icon icon={icon} width={24} height={24} color="rgb(30 58 138)" />
    </button>
  );
};

export default IconButton;
