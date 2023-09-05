import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Booking from './components/booking/Booking';

const mockOnSubmit = jest.fn();
const mockNavigate = jest.fn();
const mockDispatch = jest.fn();

jest.mock('./contexts/UserContext', () => ({
  useUserContext: () => ({
    dispatch: mockDispatch,
  }),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

describe('<Booking />', () => {
  it('should display errors when required fields are empty', async () => {
    const fields = [
      { label: 'Name', name: 'name', type: 'text' },
      { label: 'Date', name: 'date', type: 'date' },
      { label: 'Time', name: 'time', type: 'time' },
    ];

    render(
      <Booking
        bookingType="reserve"
        formTitle="Reserve a Table"
        fields={fields}
        onSubmit={mockOnSubmit}
      />
    );

    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    const errorMessages = screen.getAllByText('This field is required');
    expect(errorMessages.length).toBe(3);
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  it('should call onSubmit when the form is valid', async () => {
    const fields = [
      { label: 'Name', name: 'name', type: 'text' },
      { label: 'Date', name: 'date', type: 'date' },
      { label: 'Time', name: 'time', type: 'time' },
    ];

    render(
      <Booking
        bookingType="reserve"
        formTitle="Reserve a Table"
        fields={fields}
        onSubmit={mockOnSubmit}
      />
    );

    const nameInput = screen.getByLabelText('Name:');
    const dateInput = screen.getByLabelText('Date:');
    const timeInput = screen.getByLabelText('Time:');
    const submitButton = screen.getByText('Submit');

    await act(async () => {
      fireEvent.change(nameInput, { target: { value: 'John' } });
      fireEvent.change(dateInput, { target: { value: '2023-09-04' } });
      fireEvent.change(timeInput, { target: { value: '18:30' } });
    });

    fireEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(expect.objectContaining({
      type: 'ADD_BOOKING',
    }));
    expect(mockNavigate).toHaveBeenCalledWith('/confirmation');
  });
});
