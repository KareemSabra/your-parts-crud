import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import BookCard from './book-card';
import { Book } from '@/interfaces';

//mocking functions
const mockHandleEdit = vi.fn();
const mockHandleDelete = vi.fn();

//clear mock functions after each test
afterEach(cleanup);

const mockBook: Book = {
  ISBN: 1234567890,
  title: 'Sample Book',
  author: 'John Doe',
  imgURL: 'https://example.com/image.jpg',
};

describe('BookCard component', () => {
  //clear mock functions after each test
  afterEach(cleanup);

  it('renders book card in view mode', async () => {
    render(
      <BookCard
        ISBN={mockBook.ISBN}
        title={mockBook.title}
        author={mockBook.author}
        imgURL={mockBook.imgURL}
        handleEdit={mockHandleEdit}
        handleDelete={mockHandleDelete}
        isView={true}
      />,
    );

    // Assert title, author, and image are rendered
    expect(screen.getByText(mockBook.title)).toBeDefined();
    expect(screen.getByText(mockBook.author)).toBeDefined();
    expect(screen.getByAltText(mockBook.title)).toBeDefined();

    // Assert edit and delete buttons are rendered
    const editButton = (await screen.findByTestId(
      'edit-button',
    )) as HTMLButtonElement;

    const deleteButton = (await screen.findByTestId(
      'delete-button',
    )) as HTMLButtonElement;

    expect(editButton).toBeDefined();

    expect(deleteButton).toBeDefined();
  });

  it('renders book card in non-view mode', async () => {
    render(
      <BookCard
        ISBN={mockBook.ISBN}
        title={mockBook.title}
        author={mockBook.author}
        imgURL={mockBook.imgURL}
        isView={false}
      />,
    );

    // Assert title, author, and image are rendered
    expect(screen.getByText(mockBook.title)).toBeDefined();
    expect(screen.getByText(mockBook.author)).toBeDefined();
    expect(screen.getByAltText(mockBook.title)).toBeDefined();

    // Assert "Book display" text is rendered
    expect(screen.getByText('Book display')).toBeDefined();

    // Assert edit and delete buttons are not rendered
    const editButton = (await screen.queryByTestId(
      'edit-button',
    )) as HTMLButtonElement;

    const deleteButton = (await screen.queryByTestId(
      'delete-button',
    )) as HTMLButtonElement;

    expect(editButton).toBeNull();

    expect(deleteButton).toBeNull();
  });

  it('calls handleEdit with book ISBN when edit button is clicked', async () => {
    render(
      <BookCard
        ISBN={mockBook.ISBN}
        title={mockBook.title}
        author={mockBook.author}
        imgURL={mockBook.imgURL}
        handleEdit={mockHandleEdit}
        handleDelete={mockHandleDelete}
        isView={true}
      />,
    );

    const editButton = (await screen.findByTestId(
      'edit-button',
    )) as HTMLButtonElement;

    fireEvent.click(editButton);

    expect(mockHandleEdit).toHaveBeenCalled();
    expect(mockHandleEdit).toHaveBeenCalledWith(mockBook.ISBN);
  });
  it('calls handleDelete with book ISBN when delete button is clicked', async () => {
    render(
      <BookCard
        ISBN={mockBook.ISBN}
        title={mockBook.title}
        author={mockBook.author}
        imgURL={mockBook.imgURL}
        handleEdit={mockHandleEdit}
        handleDelete={mockHandleDelete}
        isView={true}
      />,
    );
    const deleteButton = (await screen.findByTestId(
      'delete-button',
    )) as HTMLButtonElement;
    fireEvent.click(deleteButton);
    expect(mockHandleDelete).toHaveBeenCalled();
    expect(mockHandleDelete).toHaveBeenCalledWith(mockBook.ISBN);
  });
});
