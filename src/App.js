import { Box, Center, Container, Input } from '@chakra-ui/react'
import './App.css';
import Input_ from './Component/Input_';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    
      <Box w='100%' h='100vh'   color='white'>
         <Center h={'80vh'} >
         <Outlet></Outlet>

         </Center>

      </Box>
   
  );
}

export default App;
