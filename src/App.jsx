import { HomePage } from './pages/HomePage';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { ProductsProvider } from './contexts/ProductsContext';

const theme = extendTheme({
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ProductsProvider>
        <HomePage />
      </ProductsProvider>
    </ChakraProvider>
  )
}

export default App
