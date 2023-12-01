import { useContext } from 'react';
import ProductsContext from '../contexts/ProductsContext';

export default function useProductsContext() {
  const { productsData } = useContext(ProductsContext);

  return { productsData };
}
