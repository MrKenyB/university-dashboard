// src/components/StudentList.js
import React from 'react';
import { Grid } from '@mui/material';
import StudentCard from './StudentCard';

const StudentList = ({ students }) => {
  return (
    <Grid container spacing={3}>
      {students.map(student => (
        <Grid item key={student.id} xs={12} sm={6} md={4}>
          <StudentCard student={student} />
        </Grid>
      ))}
    </Grid>
  );
};

export default StudentList;