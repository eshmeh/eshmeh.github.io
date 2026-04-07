import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import ProjectCard from './ProjectCard';

const sampleProjects = [
  {
    id: 1,
    name: 'Project Name 1',
    users: 'list, of, authorized, users',
    sets: [
      { name: 'HWSet1', used: 50, total: 100 },
      { name: 'HWSet2', used: 0, total: 100 }
    ],
    joined: false
  },
  {
    id: 2,
    name: 'Project Name 2',
    users: 'list, of, authorized, users',
    sets: [
      { name: 'HWSet1', used: 50, total: 100 },
      { name: 'HWSet2', used: 0, total: 100 }
    ],
    joined: true
  },
  {
    id: 3,
    name: 'Project Name 3',
    users: 'list, of, authorized, users',
    sets: [
      { name: 'HWSet1', used: 0, total: 100 },
      { name: 'HWSet2', used: 0, total: 100 }
    ],
    joined: false
  }
];

export default function Projects() {
  const [projects, setProjects] = React.useState(sampleProjects);

  function toggleJoin(id) {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, joined: !p.joined } : p));
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Projects</Typography>
      <Box>
        {projects.map(p => (
          <ProjectCard key={p.id} project={p} onToggleJoin={() => toggleJoin(p.id)} />
        ))}
      </Box>
    </Container>
  );
}
