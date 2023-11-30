import { UserProvider } from './contexts/UserContext';
import { HomePage } from './pages/HomePage';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <UserProvider>
        <HomePage />
      </UserProvider>
    </ChakraProvider>
  )
}

export default App
