import React from 'react';
import Typography from '../typography/typography';

interface InputProps {
  value: string;
  label?: string;
  error?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  testID?: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  value,
  error,
  type,
  placeholder,
  testID,
  disabled,
  onBlur,
  onChange,
}) => {
  const inputClassNames = `rounded-md  p-2 w-full border-2 dark:bg-slate-950 bg-gray-200 ${
    error
      ? 'border-red-500 focus:border-red-500'
      : 'border-blue-900 focus:border-blue-900'
  } focus:outline-blue-900`;

  return (
    <div>
      <label className="block px-1 font-bold mb-1">
        <Typography variant="h6">{label}</Typography>
      </label>
      <input
        data-testid={testID}
        className={inputClassNames}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        onBlur={onBlur}
        disabled={disabled}
      />
      {error && <div className="px-1 text-red-500 text-sm">{error}</div>}
    </div>
  );
};

export default React.memo(Input);
