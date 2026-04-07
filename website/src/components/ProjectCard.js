import React from 'react';
import { Box, Paper, Grid, Typography, Button, TextField } from '@mui/material';

function HWSetRow({ set }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
      <Typography sx={{ minWidth: 80 }}>{set.name}:</Typography>
      <Typography>{`${set.used}/${set.total}`}</Typography>
      <TextField size="small" placeholder="Enter qty" sx={{ width: 100 }} />
      <Button variant="outlined" size="small">Check In</Button>
      <Button variant="outlined" size="small">Check Out</Button>
    </Box>
  );
}

export default function ProjectCard({ project, onToggleJoin }) {
  return (
    <Paper sx={{ p: 2, mb: 2 }} elevation={2}>
      <Grid container alignItems="center">
        <Grid item xs={7}>
          <Typography variant="h6">{project.name}</Typography>
          <Typography variant="body2" color="text.secondary">{project.users}</Typography>
        </Grid>
        <Grid item xs={5}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant={project.joined ? 'contained' : 'outlined'} onClick={onToggleJoin}>
              {project.joined ? 'Leave' : 'Join'}
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mt: 2 }}>
        {project.sets.map((s, i) => (
          <HWSetRow key={i} set={s} />
        ))}
      </Box>
    </Paper>
  );
}
