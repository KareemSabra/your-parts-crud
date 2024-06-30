// tests/Button.test.tsx
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import Button from './button';

afterEach(cleanup);

describe('Button component', () => {
  const handleClick = vi.fn();

  it('renders the button with the correct text', async () => {
    render(<Button text="Click Me" testid="testButton" />);
    const testButton = (await screen.findByTestId(
      'testButton',
    )) as HTMLButtonElement;
    expect(testButton).toBeDefined();
  });

  it('calls the onClick function when clicked', async () => {
    render(
      <Button text="Click Me" onClick={handleClick} testid="testButton" />,
    );
    const testButton = (await screen.findByTestId(
      'testButton',
    )) as HTMLButtonElement;
    fireEvent.click(testButton);
    expect(handleClick).toHaveBeenCalled();
  });

  it('disables the button when disabled prop is true', async () => {
    render(<Button text="Click Me" disabled testid="testButton" />);
    const testButton = (await screen.findByTestId(
      'testButton',
    )) as HTMLButtonElement;
    expect(testButton).toHaveProperty('disabled', true);
  });

  it('disables the button when isSubmitting is true', async () => {
    render(<Button text="Click Me" isSubmitting testid="testButton" />);
    const testButton = (await screen.findByTestId(
      'testButton',
    )) as HTMLButtonElement;
    expect(testButton).toBeDefined();
    expect(testButton).toHaveProperty('disabled', true);
  });
  it('shows loading indicator when isSubmitting is true', async () => {
    render(<Button text="Click Me" isSubmitting testid="testButton" />);
    const testButton = (await screen.findByTestId(
      'testButton',
    )) as HTMLButtonElement;
    expect(testButton).toBeDefined();
    expect(testButton).toHaveProperty('disabled', true);
    const loader = (await screen.findByTestId('loader')) as HTMLBodyElement;
    expect(loader).toBeDefined();
  });

  it('renders with the correct type attribute', async () => {
    render(<Button text="Submit" type="submit" testid="testButton" />);
    const testButton = (await screen.findByTestId(
      'testButton',
    )) as HTMLButtonElement;
    expect(testButton).toBeDefined();
    expect(testButton).toHaveProperty('type', 'submit');
  });
});
