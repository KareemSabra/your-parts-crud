import { render, screen, waitFor } from '@testing-library/react';
import ImageComponent from '../../components/image/image';
import { describe, it, expect } from 'vitest';

describe('ImageComponent', () => {
  describe('Invalid URL Cases', () => {
    it('should render the placeholder image when  no URL is provided', async () => {
      render(<ImageComponent url="" alt="No Image" />);

      const image = screen.getByAltText('No Image') as HTMLImageElement;

      await waitFor(() => {
        expect(image.src).toContain('/placeholder-book.svg');
      });
    });

    it('should render the placeholder image when an invalid URL is provided', async () => {
      render(<ImageComponent url="invalid-url" alt="Invalid Image" />);

      const image = screen.getByAltText('Invalid Image') as HTMLImageElement;

      await waitFor(() => {
        expect(image.src).toContain('/placeholder-book.svg');
      });
    });

    it('should fallback to placeholder image when the image fails to load', async () => {
      const invalidUrl = 'https://invalid-url.com/image.jpg';

      render(<ImageComponent url={invalidUrl} alt="Fallback Image" />);

      const image = screen.getByAltText('Fallback Image') as HTMLImageElement;

      image.dispatchEvent(new Event('error'));

      await waitFor(() => {
        expect(image.src).toContain('/placeholder-book.svg');
      });
    });
  });

  describe('Valid URL Cases', () => {
    it('should render the provided image when a valid URL is provided', async () => {
      const validUrl =
        'https://m.media-amazon.com/images/M/MV5BYmJmNzU0NTgtOGM5Ni00MWJiLTgwZmMtNDIyNjYzZDAzNzI5XkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_.jpg';

      render(<ImageComponent url={validUrl} alt="Valid Image" />);

      const image = screen.getByAltText('Valid Image') as HTMLImageElement;

      await waitFor(() => {
        expect(image.src).toContain(encodeURIComponent(validUrl));
      });
    });
  });
});
