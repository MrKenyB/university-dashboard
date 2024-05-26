// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Select, MenuItem, TextField, Grid, Pagination, CircularProgress, Alert, FormControl, InputLabel } from '@mui/material';
import StudentList from './StudentList';
import Statistics from './Statistics';

const Dashboard = () => {
  const [year, setYear] = useState('');
  const [major, setMajor] = useState('');
  const [name, setName] = useState('');
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sort, setSort] = useState('');
  const studentsPerPage = 10;

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios.get(`/students.json`)
      .then(response => {
        let filteredStudents = response.data;

        if (year) {
          filteredStudents = filteredStudents.filter(student => student.year === parseInt(year));
        }
        if (major) {
          filteredStudents = filteredStudents.filter(student => student.major.toLowerCase().includes(major.toLowerCase()));
        }
        if (name) {
          filteredStudents = filteredStudents.filter(student => student.name.toLowerCase().includes(name.toLowerCase()));
        }

        if (sort) {
          filteredStudents = filteredStudents.sort((a, b) => {
            if (sort === 'name') {
              return a.name.localeCompare(b.name);
            } else if (sort === 'major') {
              return a.major.localeCompare(b.major);
            } else if (sort === 'year') {
              return a.year - b.year;
            } else {
              return 0;
            }
          });
        }

        setTotalPages(Math.ceil(filteredStudents.length / studentsPerPage));
        setStudents(filteredStudents.slice((page - 1) * studentsPerPage, page * studentsPerPage));
        setLoading(false);
      })
      .catch(error => {
        setError('Une erreur s\'est produite lors de la récupération des données des étudiants !');
        setLoading(false);
      });
  }, [year, major, name, sort, page]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Tableau de Bord des Étudiants</Typography> {/* Changement de "Student Dashboard" à "Tableau de Bord des Étudiants" */}
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} sm={3}>
          <Select value={year} onChange={e => setYear(e.target.value)} displayEmpty fullWidth>
            <MenuItem value="" disabled>Sélectionner l'année</MenuItem> {/* Changement de "Select Year" à "Sélectionner l'année" */}
            <MenuItem value={2020}>2020</MenuItem>
            <MenuItem value={2021}>2021</MenuItem>
            <MenuItem value={2022}>2022</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="Rechercher par filière"
            variant="outlined"
            value={major}
            onChange={e => setMajor(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="Rechercher par nom"
            variant="outlined"
            value={name}
            onChange={e => setName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl fullWidth>
            <InputLabel>Trier par</InputLabel> {/* Changement de "Sort By" à "Trier par" */}
            <Select value={sort} onChange={e => setSort(e.target.value)} displayEmpty fullWidth>
              <MenuItem value="">Aucun</MenuItem> {/* Changement de "None" à "Aucun" */}
              <MenuItem value="name">Nom</MenuItem>
              <MenuItem value="major">Filière</MenuItem> {/* Changement de "Major" à "Filière" */}
              <MenuItem value="year">Année</MenuItem> {/* Changement de "Year" à "Année" */}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      {loading ? (
        <CircularProgress style={{ marginTop: '20px' }} />
      ) : error ? (
        <Alert severity="error" style={{ marginTop: '20px' }}>{error}</Alert>
      ) : (
        <>
          {students.length > 0 && <Statistics students={students} />}
          {students.length > 0 && <StudentList students={students} />}
          <Pagination
            count={totalPages}
            page={page}
            onChange={(event, value) => setPage(value)}
            color="primary"
            style={{ marginTop: '20px' }}
          />
        </>
      )}
    </Container>
  );
};

export default Dashboard;
