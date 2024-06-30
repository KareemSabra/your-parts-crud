import Typography from '@/components/typography/typography';
import React from 'react';

const TypographyDemo: React.FC = () => {
  return (
    <div>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography variant="p">Paragraph</Typography>
      <Typography variant="span">Span</Typography>
    </div>
  );
};

export default TypographyDemo;
