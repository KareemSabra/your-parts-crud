// tests/AddEditBookForm.test.tsx
import { Book } from '@/interfaces'; // Adjust the path to your Book interface
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import AddEditBookForm from './add-edit-book'; // Adjust the path to your AddEditBookForm component
import { mock } from 'node:test';

afterEach(cleanup);

// Mock the submitBook function
const mockSubmitBook = vi.fn();

const mockSetBookState = vi.fn();

const mockBook: Book = {
  author: 'John Doe',
  title: 'Sample Book',
  imgURL: 'https://example.com/image.jpg',
  ISBN: 1234567890,
};
describe('Add Edit Book', () => {
  afterEach(cleanup);

  describe('Add Book', () => {
    afterEach(cleanup);

    it('renders the form with empty values', async () => {
      render(
        <AddEditBookForm
          submitBook={mockSubmitBook}
          setBookState={mockSetBookState}
        />,
      );
      const titleInput = (await screen.findByTestId(
        'title-input',
      )) as HTMLInputElement;

      const authorInput = (await screen.findByTestId(
        'author-input',
      )) as HTMLInputElement;

      const imgURLInput = (await screen.findByTestId(
        'imgURL-input',
      )) as HTMLInputElement;

      const button = (await screen.findByTestId(
        'submit-button',
      )) as HTMLButtonElement;

      expect(titleInput.value).toBe('');
      expect(authorInput.value).toBe('');
      expect(imgURLInput.value).toBe('');
      expect(button).toBeDefined();
    });

    it('validates form inputs and prevents submission with invalid data', async () => {
      render(
        <AddEditBookForm
          submitBook={mockSubmitBook}
          setBookState={mockSetBookState}
        />,
      );
      const titleInput = (await screen.findByTestId(
        'title-input',
      )) as HTMLInputElement;

      const authorInput = (await screen.findByTestId(
        'author-input',
      )) as HTMLInputElement;

      const imgURLInput = (await screen.findByTestId(
        'imgURL-input',
      )) as HTMLInputElement;

      const button = (await screen.findByTestId(
        'submit-button',
      )) as HTMLButtonElement;

      // Clear title input
      fireEvent.change(titleInput, {
        target: { value: '' },
      });

      // Clear author input
      fireEvent.change(authorInput, {
        target: { value: '' },
      });

      // Submit the form
      fireEvent.click(button);

      // Error message should be displayed for the title input
      await waitFor(() => {
        expect(screen.getByText('Book title is required.')).toBeDefined();
      });

      // Error message should be displayed for the author input
      await waitFor(() => {
        expect(screen.getByText('Book author is required.')).toBeDefined();
      });

      // Ensure submitBook function is not called
      expect(mockSubmitBook).not.toHaveBeenCalled();
    });

    it('submits the form with valid data', async () => {
      render(
        <AddEditBookForm
          book={mockBook}
          submitBook={mockSubmitBook}
          setBookState={mockSetBookState}
        />,
      );

      // Find input elements
      const titleInput = await screen.findByTestId('title-input');
      const authorInput = await screen.findByTestId('author-input');
      const imgURLInput = await screen.findByTestId('imgURL-input');
      const submitButton = await screen.findByTestId('submit-button');

      // Interact with input elements
      fireEvent.change(titleInput, { target: { value: 'testTitleee' } });
      fireEvent.change(authorInput, { target: { value: 'testAuthoor' } });

      // Submit the form
      fireEvent.click(submitButton);

      // Wait for form submission to complete
      await waitFor(() => {
        // Ensure submitBook function is called
        expect(mockSubmitBook).toHaveBeenCalled();
        expect(mockSubmitBook).toHaveBeenCalledWith({
          ...mockBook,
          title: 'testTitleee',
          author: 'testAuthoor',
          imgURL: 'https://example.com/image.jpg',
        });

        expect(mockSetBookState).toHaveBeenCalledWith({
          ...mockBook,
          title: 'testTitleee',
          author: 'testAuthoor',
          imgURL: 'https://example.com/image.jpg',
        });
      });
    });
  });

  describe('Edit Book', () => {
    it('renders the form with old values', async () => {
      render(
        <AddEditBookForm
          book={mockBook}
          submitBook={mockSubmitBook}
          setBookState={mockSetBookState}
        />,
      );
      const titleInput = (await screen.findByTestId(
        'title-input',
      )) as HTMLInputElement;

      const authorInput = (await screen.findByTestId(
        'author-input',
      )) as HTMLInputElement;

      const imgURLInput = (await screen.findByTestId(
        'imgURL-input',
      )) as HTMLInputElement;

      const button = (await screen.findByTestId(
        'submit-button',
      )) as HTMLButtonElement;

      expect(titleInput.value).toBe(mockBook.title);
      expect(authorInput.value).toBe(mockBook.author);
      expect(imgURLInput.value).toBe(mockBook.imgURL);
      expect(button).toBeDefined();
    });
    it('submits the form with valid data', async () => {
      render(
        <AddEditBookForm
          book={mockBook}
          submitBook={mockSubmitBook}
          setBookState={mockSetBookState}
        />,
      );
      const titleInput = (await screen.findByTestId(
        'title-input',
      )) as HTMLInputElement;

      const authorInput = (await screen.findByTestId(
        'author-input',
      )) as HTMLInputElement;

      const imgURLInput = (await screen.findByTestId(
        'imgURL-input',
      )) as HTMLInputElement;

      const button = (await screen.findByTestId(
        'submit-button',
      )) as HTMLButtonElement;
      fireEvent.change(titleInput, { target: { value: 'testeditTitleee' } });
      fireEvent.click(button);
      await waitFor(() => {
        // Ensure submitBook function is called
        expect(mockSubmitBook).toHaveBeenCalled();
        expect(mockSubmitBook).toHaveBeenCalledWith({
          title: 'testeditTitleee',
          author: mockBook.author,
          imgURL: mockBook.imgURL,
          ISBN: mockBook.ISBN,
        });

        expect(mockSetBookState).toHaveBeenCalledWith({
          title: 'testeditTitleee',
          author: mockBook.author,
          imgURL: mockBook.imgURL,
          ISBN: mockBook.ISBN,
        });
      });
    });
  });
});
