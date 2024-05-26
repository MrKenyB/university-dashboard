// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>Bienvenue sur le Tableau de Bord de l'Université DGC</Typography>
      <Button variant="contained" color="primary">
        <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>
          Aller au Tableau de Bord
        </Link>
      </Button>
    </Container>
  );
};

export default Home;
