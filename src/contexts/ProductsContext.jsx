import { createContext, useState } from 'react';
import useGetProducts from '../hooks/api/useGetProducts';
import Splash from '../components/Splash';
import useGetExtras from '../hooks/api/useGetExtras';

const ProductsContext = createContext();
export default ProductsContext;

export function ProductsProvider({ children }) {
  const { products, productsLoading, productsError } = useGetProducts();
  const { extras, extrasLoading, extrasError } = useGetExtras();
  const [productsFilter, setProductsFilter] = useState({ category: '', nameOrId: '' })

  if (productsLoading | extrasLoading) {
    return (
      <Splash loading={true} />
    )
  }

  if (productsError | extrasError) {
    return (
      <Splash message={'Erro ao tentar acessar API.'} />
    )
  }

  return (
    <ProductsContext.Provider value={{ productsData: products, productsFilter, setProductsFilter, extrasData: extras }}>
      {children}
    </ProductsContext.Provider>
  );
}
