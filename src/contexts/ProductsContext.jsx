import { createContext } from 'react';
import useGetProducts from '../hooks/api/useGetProducts';
import Splash from '../components/Splash';

const ProductsContext = createContext();
export default ProductsContext;

export function ProductsProvider({ children }) {
  const { products, productsLoading, productsError } = useGetProducts();

  if (productsLoading) {
    return (
      <Splash loading={true} />
    )
  }

  if (productsError) {
    return (
      <Splash message={'Erro ao tentar acessar produtos.'} />
    )
  }

  return (
    <ProductsContext.Provider value={{ productsData:products }}>
      {children}
    </ProductsContext.Provider>
  );
}
