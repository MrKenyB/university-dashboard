// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import './Home.css'; // Import du fichier CSS

const Home = () => {
  return (
    <div className="body-background">
      <div className="background"></div> {/* Ajouter l'élément d'arrière-plan flou */}
      <Container className="container">
        <Typography variant="h2" gutterBottom>Bienvenue sur le Tableau de Bord de l'Université DGC</Typography>
        <Button variant="contained" color="primary">
          <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>
            Aller au Tableau de Bord
          </Link>
        </Button>
      </Container>
    </div>
  );
};

export default Home;
