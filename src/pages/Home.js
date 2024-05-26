// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>Welcome to the University Dashboard</Typography>
      <Button variant="contained" color="primary">
        <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>
          Go to Dashboard
        </Link>
      </Button>
    </Container>
  );
};

export default Home;
