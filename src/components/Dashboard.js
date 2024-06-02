// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Select, MenuItem, TextField, Grid, Pagination, CircularProgress, Alert, FormControl, InputLabel } from '@mui/material';
import StudentList from './StudentList';
import Statistics from './Statistics';
import StudentForm from './StudentForm';
import YearlyStudentCount from './YearlyStudentCount';
import { motion } from 'framer-motion'; // Import pour les animations

const Dashboard = () => {
  const [year, setYear] = useState('');
  const [major, setMajor] = useState('');
  const [name, setName] = useState('');
  const [students, setStudents] = useState([]);
  const [allStudents, setAllStudents] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sort, setSort] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null); // État pour stocker les détails de l'étudiant sélectionné
  const studentsPerPage = 10;

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios.get(`/students.json`)
      .then(response => {
        setAllStudents(response.data);
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

  const showStudentDetails = (student) => {
    setSelectedStudent(student);
  };

  const hideStudentDetails = () => {
    setSelectedStudent(null);
  };

  const totalStudents = allStudents.reduce((acc, student) => {
    acc[student.year] = (acc[student.year] || 0) + 1;
    return acc;
  }, {});

  return (
    <Container style={{ padding: '20px' }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Typography variant="h4" gutterBottom style={{ marginBottom: '20px', borderBottom: '2px solid #333', textAlign: 'center', padding: '10px 0', color: '#333', textTransform: 'uppercase' }}>Tableau de Bord des Étudiants</Typography>
      </motion.div>
      <motion.div initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={3}>
            <Select value={year} onChange={e => setYear(e.target.value)} displayEmpty fullWidth>
              <MenuItem value="" disabled>Sélectionner l'année</MenuItem>
              <MenuItem value={2020}>2020</MenuItem>
              <MenuItem value={2021}>2021</MenuItem>
              <MenuItem value={2022}>2022</MenuItem>
              <MenuItem value={2023}>2023</MenuItem>
              <MenuItem value={2024}>2024</MenuItem>
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
              <InputLabel>Trier par</InputLabel>
                <Select value={sort} onChange={e => setSort(e.target.value)} displayEmpty fullWidth>
                  <MenuItem value="none">Aucun</MenuItem>
                  <MenuItem value="name">Nom</MenuItem>
                  <MenuItem value="major">Filière</MenuItem>
                  <MenuItem value="year">Année</MenuItem>
               </Select>
            </FormControl>
          </Grid>
        </Grid>
      </motion.div>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <CircularProgress color="primary" />
        </div>
      ) : error ? (
        <Alert severity="error" style={{ marginTop: '20px' }}>{error}</Alert>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {selectedStudent ? (
            <StudentForm student={selectedStudent} onHide={hideStudentDetails} />
          ) : (
            <>
              <Statistics students={allStudents} style={{ marginTop: '20px' }} />
              <StudentList students={students} onStudentClick={showStudentDetails} style={{ marginTop: '20px' }} />
              <Pagination
                count={totalPages}
                page={page}
                onChange={(event, value) => setPage(value)}
                color="primary"
                style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
              />
              <YearlyStudentCount totalStudents={totalStudents} style={{ marginTop: '20px' }} />
            </>
          )}
        </motion.div>
      )}
    </Container>
  );
};

export default Dashboard;
