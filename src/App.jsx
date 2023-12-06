import { HomePage } from './pages/HomePage';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { ProductsProvider } from './contexts/ProductsContext';
import { ItensProvider } from './contexts/ItensContext';

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
        <ItensProvider>
          <HomePage />
        </ItensProvider>
      </ProductsProvider>
    </ChakraProvider>
  )
}

export default App
