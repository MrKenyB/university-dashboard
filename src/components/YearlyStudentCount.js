import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const YearlyStudentCount = ({ totalStudents }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Card style={{ marginTop: '20px', backgroundColor: '#e3f2fd' }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Nombre Total d'Étudiants par Année
          </Typography>
          <Grid container spacing={3}>
            {Object.entries(totalStudents).map(([year, count]) => (
              <Grid item key={year} xs={6} sm={4} md={3}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, scale: [0.5, 1], rotate: [0, 360], transition: { duration: 0.5 } }}
                >
                  <Card style={{ backgroundColor: '#bbdefb' }}>
                    <CardContent>
                      <Typography variant="h6" align="center">{year}</Typography>
                      <Typography variant="body1" align="center">{count}</Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default YearlyStudentCount;
