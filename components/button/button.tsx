import React from 'react';
import Typography from '../typography';
import Loading from '../loading';

interface ButtonProps {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  testid?: string;
  type?: 'button' | 'submit' | 'reset';
  isSubmitting?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled,
  testid,
  type = 'button',
  isSubmitting = false,
}) => {
  return (
    <button
      className="bg-blue-900 px-4 py-2 rounded-md hover:bg-blue-400 disabled:hover:bg-blue-900 disabled:cursor-not-allowed text-white"
      onClick={onClick}
      disabled={disabled || isSubmitting}
      type={type}
      data-testid={testid}
    >
      {isSubmitting ? (
        <Loading overrideTextSize={'text-3xl'} />
      ) : (
        <Typography variant="h6">{text}</Typography>
      )}
    </button>
  );
};

export default Button;
