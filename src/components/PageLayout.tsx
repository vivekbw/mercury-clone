import React from 'react';
import { Box } from '@mui/material';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        padding: "40px",
        marginX: {
          xs: 2,
          sm: 4,
          md: 8,
          lg: 12,
          xl: 20
        },
      }}
    >
      {children}
    </Box>
  );
};

export default PageLayout;

