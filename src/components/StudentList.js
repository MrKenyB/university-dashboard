// src/components/StudentList.js
import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const StudentList = ({ students, onStudentClick }) => {
  return (
    <Grid container spacing={3}>
      {students.map(student => (
        <Grid item key={student.id} xs={12} sm={6} md={4}>
          {/* Ajouter un événement onClick pour chaque carte d'étudiant */}
          <Card onClick={() => onStudentClick(student)} style={{ cursor: 'pointer' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {student.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {student.email}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {student.major}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default StudentList;

