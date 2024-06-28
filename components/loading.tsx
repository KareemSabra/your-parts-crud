import Typography from '@/components/typography';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function Loading() {
  return (
    <div className="flex  w-full justify-center items-center h-full">
      <div>
        <Icon icon="ei:spinner-3" className="text-6xl animate-spin" />
      </div>
    </div>
  );
}
