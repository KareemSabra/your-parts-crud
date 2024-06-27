import React from 'react';
import Typography from '../typography';

interface ButtonProps {
  text: string;
  onClick: Function;
  disabled?: boolean;
}
const Button: React.FC<ButtonProps> = ({ text, onClick, disabled }) => {
  return (
    <button
      className="bg-blue-900 px-4 py-2 rounded-md hover:bg-blue-400 disabled:hover:bg-blue-900  disabled:cursor-not-allowed"
      onClick={() => onClick()}
      disabled={disabled}
    >
      <Typography variant="h6">{text}</Typography>
    </button>
  );
};

export default Button;
