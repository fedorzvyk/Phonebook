import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Box } from 'commonStyles/Box';
// import ContactsPage from 'pages/ContactsPage';
// import { Box, Center, Image, Flex, Badge, Text } from '@chakra-ui/react';
import { AppBar } from './AppBar/AppBar';

export const Layout = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gridGap={5}
      maxWidth="500px"
      my={5}
      mx="auto"
      pb={5}
      px={4}
      bg="muted"
      border="normal"
      borderRadius="normal"
      minHeight="90vh"
    >
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
