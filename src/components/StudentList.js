// src/components/StudentList.js
import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';

const StudentList = React.memo(({ students }) => {
  return (
    <List>
      {students.map(student => (
        <React.Fragment key={student.id}>
          <ListItem>
            <ListItemText
              primary={student.name}
              secondary={`Major: ${student.major}, Year: ${student.year}`}
            />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
});

export default StudentList;
