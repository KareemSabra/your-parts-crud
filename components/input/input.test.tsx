import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './input';
import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';

describe('Input Component', () => {
  const mockOnChange = vi.fn();
  const mockOnBlur = vi.fn();

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('renders input correctly', async () => {
    render(
      <Input
        label="Test Label"
        name="testInput"
        value="test value"
        onChange={mockOnChange}
        testID="testInput1"
      />,
    );

    const inputElement = (await screen.findByTestId(
      'testInput1',
    )) as HTMLInputElement;
    expect(inputElement).toBeDefined();
    expect(inputElement.value).toBe('test value');
    expect(inputElement.name).toBe('testInput');
  });

  it('calls onChange handler correctly', async () => {
    render(<Input value="" onChange={mockOnChange} testID="testInput2" />);

    const inputElement = (await screen.findByTestId(
      'testInput2',
    )) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'new value' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(expect.anything()); // Check if onChange is called with an event object
  });

  it('calls onBlur handler correctly', async () => {
    render(
      <Input
        value=""
        onBlur={mockOnBlur}
        onChange={mockOnChange}
        testID="testInput3"
      />,
    );

    const inputElement = (await screen.findByTestId(
      'testInput3',
    )) as HTMLInputElement;
    fireEvent.blur(inputElement);
    expect(mockOnBlur).toHaveBeenCalledTimes(1);
  });

  it('displays error message when error prop is provided', async () => {
    render(
      <Input
        value=""
        error="This is an error"
        onBlur={mockOnBlur}
        onChange={mockOnChange}
      />,
    );

    const errorElement = await screen.findByText('This is an error');
    expect(errorElement).toBeDefined();
  });
});
