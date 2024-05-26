// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; // Import de Link depuis react-router-dom
import './Navbar.css'; // Import du fichier CSS
import UniversityLogo from '../images/logo.png'; // Import du logo de l'université

const Navbar = () => {
  return (
    <AppBar position="static" className="navbar"> {/* Ajouter la classe "navbar" */}
      <Toolbar>
        <Typography variant="h6">
          <Link to="/" className="logo-link"> {/* Utilisation de Link */}
            <img src={UniversityLogo} alt="Logo de l'université" className="university-logo" />
          </Link>
          Tableau de Bord
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
