import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, CircularProgress } from '@mui/material';
import './Home.css'; // Import du fichier CSS

const Home = () => {
  const [loading, setLoading] = useState(false);

  const handleDashboardTransition = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Mettez le délai souhaité ici (en millisecondes)
  };

  return (
    <div className="body-background">
      <div className="background"></div> {/* Ajouter l'élément d'arrière-plan flou */}
      <Container className="container">
        <Typography variant="h2" gutterBottom className="title">
          Bienvenue sur le Tableau de Bord de l'Université DGC
        </Typography>
        {/* Bouton pour passer à la page du tableau de bord */}
        {!loading ? (
          <Button variant="contained" color="primary" className="dashboard-button" onClick={handleDashboardTransition}>
            <Link to="/dashboard" className="link">
              Aller au Tableau de Bord
            </Link>
          </Button>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <CircularProgress color="primary" />
          </div>
        )}
      </Container>
    </div>
  );
};

export default Home;
