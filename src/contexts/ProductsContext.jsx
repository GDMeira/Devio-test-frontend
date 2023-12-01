import { createContext, useState } from 'react';
import useGetProducts from '../hooks/api/useGetProducts';
import Splash from '../components/Splash';

const ProductsContext = createContext();
export default ProductsContext;

export function ProductsProvider({ children }) {
  const { products, productsLoading, productsError } = useGetProducts();
  const [productsFilter, setProductsFilter] = useState({ category: '', nameOrId: '' })

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
    <ProductsContext.Provider value={{ productsData: products, productsFilter, setProductsFilter }}>
      {children}
    </ProductsContext.Provider>
  );
}
