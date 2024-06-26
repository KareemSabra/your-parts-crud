import React from 'react';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  children: React.ReactNode;
  color?: string;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  color,
  className,
}) => {
  const commonStyles = {
    color: color || 'inherit',
    margin: 0,
    padding: 0,
  };

  switch (variant) {
    case 'h1':
      return (
        <h1
          className={className}
          style={{
            ...commonStyles,
            fontSize: '2.5rem',
            fontWeight: 'bold',
            lineHeight: 1.2,
          }}
        >
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2
          className={className}
          style={{
            ...commonStyles,
            fontSize: '2rem',
            fontWeight: 'bold',
            lineHeight: 1.3,
          }}
        >
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3
          className={className}
          style={{
            ...commonStyles,
            fontSize: '1.75rem',
            fontWeight: 'bold',
            lineHeight: 1.4,
          }}
        >
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4
          className={className}
          style={{
            ...commonStyles,
            fontSize: '1.5rem',
            fontWeight: 'bold',
            lineHeight: 1.5,
          }}
        >
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5
          className={className}
          style={{
            ...commonStyles,
            fontSize: '1.25rem',
            fontWeight: 'bold',
            lineHeight: 1.6,
          }}
        >
          {children}
        </h5>
      );
    case 'h6':
      return (
        <h6
          className={className}
          style={{
            ...commonStyles,
            fontSize: '1rem',
            fontWeight: 'bold',
            lineHeight: 1.7,
          }}
        >
          {children}
        </h6>
      );
    case 'p':
      return (
        <p
          className={className}
          style={{ ...commonStyles, fontSize: '1rem', lineHeight: 1.7 }}
        >
          {children}
        </p>
      );
    case 'span':
      return (
        <span
          className={className}
          style={{ ...commonStyles, fontSize: '1rem', lineHeight: 1.7 }}
        >
          {children}
        </span>
      );
    default:
      return (
        <span
          className={className}
          style={{ ...commonStyles, fontSize: '1rem', lineHeight: 1.7 }}
        >
          {children}
        </span>
      );
  }
};

export default Typography;
