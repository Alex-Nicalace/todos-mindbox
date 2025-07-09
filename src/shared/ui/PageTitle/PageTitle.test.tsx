import { render, screen } from '@testing-library/react';
import { PageTitle } from './PageTitle';

describe('PageTitle', () => {
  test('renders with text', () => {
    render(<PageTitle>Test</PageTitle>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
