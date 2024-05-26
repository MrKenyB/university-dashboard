// src/components/Dashboard.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

const students = [
  { id: 1, name: 'Alice', major: 'Computer Science', year: 2021 },
  { id: 2, name: 'Bob', major: 'Mathematics', year: 2021 },
  // Ajoutez plus d'étudiants pour les tests
];

mock.onGet('/students.json').reply(200, students);

test('renders Student Dashboard and filters students', async () => {
  render(<Dashboard />);

  expect(screen.getByText(/Student Dashboard/i)).toBeInTheDocument();

  const yearSelect = screen.getByLabelText(/Select Year/i);
  fireEvent.change(yearSelect, { target: { value: '2021' } });

  const majorInput = screen.getByLabelText(/Search by Major/i);
  fireEvent.change(majorInput, { target: { value: 'Computer Science' } });

  // Attendez que les étudiants soient filtrés
  const studentName = await screen.findByText(/Alice/i);
  expect(studentName).toBeInTheDocument();
});
