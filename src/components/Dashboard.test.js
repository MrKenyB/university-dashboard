// src/components/Dashboard.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

const students = [
  { id: 1, name: 'Alice', major: 'Informatique', year: 2021 }, // Changement de "Computer Science" à "Informatique"
  { id: 2, name: 'Bob', major: 'Mathématiques', year: 2021 }, // Changement de "Mathematics" à "Mathématiques"
  // Ajoutez plus d'étudiants pour les tests
];

mock.onGet('/students.json').reply(200, students);

test('rendre le tableau de bord des étudiants et filtrer les étudiants', async () => { // Changement de "renders Student Dashboard and filters students" à "rendre le tableau de bord des étudiants et filtrer les étudiants"
  render(<Dashboard />);

  expect(screen.getByText(/Tableau de bord des étudiants/i)).toBeInTheDocument(); // Changement de "Student Dashboard" à "Tableau de bord des étudiants"

  const yearSelect = screen.getByLabelText(/Sélectionner l'année/i); // Changement de "Select Year" à "Sélectionner l'année"
  fireEvent.change(yearSelect, { target: { value: '2021' } });

  const majorInput = screen.getByLabelText(/Rechercher par filière/i); // Changement de "Search by Major" à "Rechercher par filière"
  fireEvent.change(majorInput, { target: { value: 'Informatique' } }); // Changement de "Computer Science" à "Informatique"

  // Attendre que les étudiants soient filtrés
  const studentName = await screen.findByText(/Alice/i);
  expect(studentName).toBeInTheDocument();
});
