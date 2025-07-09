import { fireEvent, render } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  test('renders checkbox with label and hidden input', () => {
    const { getByText, getByRole } = render(<Checkbox label="test" />);
    expect(getByText('test')).toBeInTheDocument();
    expect(getByRole('checkbox')).toHaveClass('sr-only');
  });

  test('renders checkbox without label', () => {
    const { queryByText } = render(<Checkbox />);
    expect(queryByText('test')).toBe(null);
  });

  test('renders checkbox with custom class', () => {
    const someClass = 'custom-class';
    const { container } = render(
      <Checkbox className={someClass} label="test" />
    );
    expect(
      container.firstElementChild?.classList.contains(someClass)
    ).toBeTruthy();
  });

  test('clicking on the checkbox toggles its checked state', () => {
    const { container, getByRole } = render(<Checkbox label="test" />);
    const checkboxContainer = container.firstElementChild as HTMLInputElement;
    const checkbox = getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkboxContainer);
    expect(checkbox).toBeChecked();
    fireEvent.click(checkboxContainer);
    expect(checkbox).not.toBeChecked();
  });

  test('clicking disabled checkbox does not toggle its checked state', () => {
    const { container, getByRole } = render(<Checkbox label="test" disabled />);
    const checkboxContainer = container.firstElementChild as HTMLInputElement;
    const checkbox = getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkboxContainer);
    expect(checkbox).not.toBeChecked();
  });
});
