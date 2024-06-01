import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import { Male, Female } from '@mui/icons-material'; // Import des icônes de genre

const StudentForm = ({ student, onHide }) => {
  return (
    <Dialog open={true} onClose={onHide}>
      <DialogTitle>Détails de l'Étudiant</DialogTitle>
      <DialogContent>
        {/* Affichage des détails de l'étudiant */}
        <Typography variant="body1">Nom (s): {student.name}</Typography>
        <Typography variant="body1">Prénom (s): {student.firstName}</Typography>
        <Typography variant="body1">Adresse E-mail : {student.email}</Typography>
        <Typography variant="body1">Date de Naissance : {student.birthDate}</Typography>
        <Typography variant="body1">Lieu de Naissance : {student.birthPlace}</Typography>
        {/* Affichage de l'icône de genre */}
        <Typography variant="body1">Genre : {student.gender === 'male' ? <Male color="primary" style={{ verticalAlign: 'middle', marginRight: '5px' }} /> : <Female color="primary" style={{ verticalAlign: 'middle', marginRight: '5px' }} />} {student.gender}</Typography>
        <Typography variant="body1">Série de Baccalauréat : {student.bacSeries}</Typography>
        <Typography variant="body1">Parcours (Filière) : {student.major}</Typography>
        <Typography variant="body1">Quartier : {student.neighborhood}</Typography>
        <Typography variant="body1">Numéro de Téléphone : {student.phoneNumber}</Typography>
        <Typography variant="body1">Tuteur : {student.tutorFirstName} {student.tutorLastName}</Typography>
        <Typography variant="body1">Numéro du Tuteur : {student.tutorPhoneNumber}</Typography>
        <Typography variant="body1">Tutrice : {student.tutressFirstName} {student.tutressLastName}</Typography>
        <Typography variant="body1">Numéro de la Tutrice : {student.tutressPhoneNumber}</Typography>
        <Typography variant="body1">Date de pré-inscription : {student.inscripDate}</Typography>
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
