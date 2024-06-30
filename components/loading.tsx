import React from 'react';
import Typography from '@/components/typography/typography';
import { Icon } from '@iconify/react/dist/iconify.js';

interface LoadingProps {
  overrideTextSize?: string;
}

const Loading: React.FC<LoadingProps> = ({ overrideTextSize }) => {
  return (
    <div className="flex w-full justify-center items-center h-full">
      <div data-testid={'loader'}>
        <Icon
          icon="ei:spinner-3"
          className={`${overrideTextSize ? overrideTextSize : 'text-6xl'} animate-spin`}
        />
      </div>
    </div>
  );
};

export default Loading;
