import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Typography from './typography';

describe('Typography component', () => {
  it('renders h1 correctly', () => {
    render(<Typography variant="h1">Heading 1</Typography>);
    const element = screen.getByText('Heading 1');
    expect(element).toBeDefined();
    expect(element.style.cssText).toContain(
      'font-size: 2.5rem; font-weight: bold; line-height: 1.2;',
    );
  });

  it('renders h2 correctly', () => {
    render(<Typography variant="h2">Heading 2</Typography>);
    const element = screen.getByText('Heading 2');
    expect(element).toBeDefined();
    expect(element.style.cssText).toContain(
      'font-size: 2rem; font-weight: bold; line-height: 1.3;',
    );
  });

  it('renders h3 correctly', () => {
    render(<Typography variant="h3">Heading 3</Typography>);
    const element = screen.getByText('Heading 3');
    expect(element).toBeDefined();
    expect(element.style.cssText).toContain(
      'font-size: 1.75rem; font-weight: bold; line-height: 1.4;',
    );
  });

  it('renders h4 correctly', () => {
    render(<Typography variant="h4">Heading 4</Typography>);
    const element = screen.getByText('Heading 4');
    expect(element).toBeDefined();
    expect(element.style.cssText).toContain(
      'font-size: 1.5rem; font-weight: bold; line-height: 1.5;',
    );
  });

  it('renders h5 correctly', () => {
    render(<Typography variant="h5">Heading 5</Typography>);
    const element = screen.getByText('Heading 5');
    expect(element).toBeDefined();
    expect(element.style.cssText).toContain(
      'font-size: 1.25rem; font-weight: bold; line-height: 1.6;',
    );
  });

  it('renders h6 correctly', () => {
    render(<Typography variant="h6">Heading 6</Typography>);
    const element = screen.getByText('Heading 6');
    expect(element).toBeDefined();
    expect(element.style.cssText).toContain(
      'font-size: 1rem; font-weight: bold; line-height: 1.7;',
    );
  });

  it('renders p correctly', () => {
    render(<Typography variant="p">Paragraph</Typography>);
    const element = screen.getByText('Paragraph');
    expect(element).toBeDefined();
    expect(element.style.cssText).toContain(
      'font-size: 1rem; line-height: 1.7;',
    );
  });
  it('renders span correctly', () => {
    render(<Typography variant="span">Span</Typography>);
    const element = screen.getByText('Span');
    expect(element).toBeDefined();
    expect(element.style.cssText).toContain(
      'font-size: 1rem; line-height: 1.7;',
    );
  });
  it('renders error correctly', () => {
    render(<Typography variant="error">Error</Typography>);
    const element = screen.getByText('Error');
    expect(element).toBeDefined();
    expect(element.style.cssText).toContain('color: red;');
  });
  it('renders success correctly', () => {
    render(<Typography variant="success">Success</Typography>);
    const element = screen.getByText('Success');
    expect(element).toBeDefined();
    expect(element.style.cssText).toContain('color: green;');
  });
});
