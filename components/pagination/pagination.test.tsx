// __tests__/Pagination.test.tsx
import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import Pagination from './pagination';

afterEach(cleanup);

describe('Pagination component', () => {
  const handleNext = vi.fn();
  const handlePrev = vi.fn();

  it('renders correctly and displays the right number of pages', () => {
    render(
      <Pagination
        handleNext={handleNext}
        handlePrev={handlePrev}
        limit={1}
        count={16}
      />,
    );

    expect(screen.getByText('1 / 2')).toBeDefined();
  });

  it('does not render if count is 8 or less', () => {
    render(
      <Pagination
        handleNext={handleNext}
        handlePrev={handlePrev}
        limit={1}
        count={8}
      />,
    );
    expect(screen.queryByText('1 / 1')).toBeNull();
  });

  it('Next button is disabled on last page', async () => {
    render(
      <Pagination
        handleNext={handleNext}
        handlePrev={handlePrev}
        limit={2}
        count={16}
      />,
    );

    const nextButton = (await screen.findByTestId(
      'next-button',
    )) as HTMLButtonElement;
    expect(nextButton).toHaveProperty('disabled', true);
  });

  it('Prev button is disabled on first page', async () => {
    render(
      <Pagination
        handleNext={handleNext}
        handlePrev={handlePrev}
        limit={1}
        count={16}
      />,
    );
    const nextButton = (await screen.findByTestId(
      'prev-button',
    )) as HTMLButtonElement;
    expect(nextButton).toHaveProperty('disabled', true);
  });

  it('Next button is enabled on non-last page', async () => {
    render(
      <Pagination
        handleNext={handleNext}
        handlePrev={handlePrev}
        limit={1}
        count={16}
      />,
    );

    const nextButton = (await screen.findByTestId(
      'next-button',
    )) as HTMLButtonElement;
    expect(nextButton).toHaveProperty('disabled', false);
  });

  it('Prev button is enabled on non-first page', async () => {
    render(
      <Pagination
        handleNext={handleNext}
        handlePrev={handlePrev}
        limit={2}
        count={16}
      />,
    );

    const prevButton = (await screen.findByTestId(
      'prev-button',
    )) as HTMLButtonElement;
    expect(prevButton).toHaveProperty('disabled', false);
  });

  it('handleNext function is called when Next button is clicked', async () => {
    render(
      <Pagination
        handleNext={handleNext}
        handlePrev={handlePrev}
        limit={1}
        count={16}
      />,
    );

    const nextButton = (await screen.findByTestId(
      'next-button',
    )) as HTMLButtonElement;
    fireEvent.click(nextButton);
    expect(handleNext).toHaveBeenCalled();
  });

  it('handlePrev function is called when Prev button is clicked', async () => {
    render(
      <Pagination
        handleNext={handleNext}
        handlePrev={handlePrev}
        limit={2}
        count={16}
      />,
    );

    const prevButton = (await screen.findByTestId(
      'prev-button',
    )) as HTMLButtonElement;
    fireEvent.click(prevButton);
    expect(handlePrev).toHaveBeenCalled();
  });
});
