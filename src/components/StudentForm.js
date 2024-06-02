import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Grid } from '@mui/material';
import { Male, Female } from '@mui/icons-material'; // Import des icônes de genre

const StudentForm = ({ student, onHide }) => {
  return (
    <Dialog open={true} onClose={onHide} fullWidth maxWidth="md">
      <DialogTitle style={{ backgroundColor: '#f0f0f0', color: '#333' }}>Détails de l'Étudiant</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1"><strong>Nom:</strong> {student.name}</Typography>
            <Typography variant="body1"><strong>Prénom:</strong> {student.firstName}</Typography>
            <Typography variant="body1"><strong>Adresse E-mail:</strong> {student.email}</Typography>
            <Typography variant="body1"><strong>Date de Naissance:</strong> {student.birthDate}</Typography>
            <Typography variant="body1"><strong>Lieu de Naissance:</strong> {student.birthPlace}</Typography>
            <Typography variant="body1"><strong>Genre:</strong> {student.gender === 'male' ? <Male style={{ verticalAlign: 'middle', marginRight: '5px' }} /> : <Female style={{ verticalAlign: 'middle', marginRight: '5px' }} />} {student.gender}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1"><strong>Série de Baccalauréat:</strong> {student.bacSeries}</Typography>
            <Typography variant="body1"><strong>Parcours (Filière):</strong> {student.major}</Typography>
            <Typography variant="body1"><strong>Quartier:</strong> {student.neighborhood}</Typography>
            <Typography variant="body1"><strong>Numéro de Téléphone:</strong> {student.phoneNumber}</Typography>
            <Typography variant="body1"><strong>Tuteur:</strong> {student.tutorFirstName} {student.tutorLastName}</Typography>
            <Typography variant="body1"><strong>Numéro du Tuteur:</strong> {student.tutorPhoneNumber}</Typography>
            <Typography variant="body1"><strong>Tutrice:</strong> {student.tutressFirstName} {student.tutressLastName}</Typography>
            <Typography variant="body1"><strong>Numéro de la Tutrice:</strong> {student.tutressPhoneNumber}</Typography>
            <Typography variant="body1"><strong>Date de pré-inscription:</strong> {student.inscripDate}</Typography>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onHide} color="primary" variant="contained">
          Fermer
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StudentForm;
