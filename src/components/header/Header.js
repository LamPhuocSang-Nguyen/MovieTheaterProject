import React from 'react';
import { Container, Box } from '@mui/material';

export default function Header() {
  return (
    <Container 
      maxWidth="xxl" // You can change "lg" to any breakpoint ("xs", "sm", "md", "lg", "xl")
      disableGutters sx={{ backgroundColor: "black" }}
    >
      <Box 
        sx={{ 
          bgcolor: "rgb(18, 18, 18)", 
          height: "10vh", 
          width: "100%" 
        }} 
      />
    </Container>
  );
}
