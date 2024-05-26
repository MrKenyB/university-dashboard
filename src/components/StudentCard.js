// src/components/StudentCard.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const StudentCard = ({ student }) => {
  return (
    <Card>
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
  );
};

export default StudentCard;
