// src/components/StudentList.js
import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const StudentList = ({ students, onStudentClick }) => {
  return (
    <Grid container spacing={3}>
      {students.map(student => (
        <Grid item key={student.id} xs={12}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card onClick={() => onStudentClick(student)} style={{ cursor: 'pointer', backgroundColor: '#f5f5f5' }}>
              <CardContent>
                <Typography variant="h6" component="div">
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
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
};

export default StudentList;
