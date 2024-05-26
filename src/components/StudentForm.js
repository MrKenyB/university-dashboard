// src/components/StudentForm.js
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

const StudentForm = ({ student, onHide }) => {
  return (
    <Dialog open={true} onClose={onHide}>
      <DialogTitle>Détails de l'Étudiant</DialogTitle>
      <DialogContent>
        {/* Affichage des détails de l'étudiant */}
        <Typography variant="body1">Nom: {student.name}</Typography>
        <Typography variant="body1">Prénom: {student.firstName}</Typography>
        <Typography variant="body1">Adresse E-mail: {student.email}</Typography>
        <Typography variant="body1">Date de Naissance: {student.birthDate}</Typography>
        <Typography variant="body1">Lieu de Naissance: {student.birthPlace}</Typography>
        <Typography variant="body1">Série de Baccalauréat: {student.bacSeries}</Typography>
        <Typography variant="body1">Parcours (Filière): {student.major}</Typography>
        <Typography variant="body1">Quartier: {student.neighborhood}</Typography>
        <Typography variant="body1">Numéro de Téléphone: {student.phoneNumber}</Typography>
        <Typography variant="body1">Tuteur: {student.tutorFirstName} {student.tutorLastName}</Typography>
        <Typography variant="body1">Numéro du Tuteur: {student.tutorPhoneNumber}</Typography>
        <Typography variant="body1">Tutrice: {student.tutressFirstName} {student.tutressLastName}</Typography>
        <Typography variant="body1">Numéro de la Tutrice: {student.tutressPhoneNumber}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onHide} color="primary">
          Fermer
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StudentForm;
