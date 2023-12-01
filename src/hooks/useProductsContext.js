import { useContext } from 'react';
import ProductsContext from '../contexts/ProductsContext';

export default function useProductsContext() {
  const { productsData, productsFilter, setProductsFilter } = useContext(ProductsContext);

  return { productsData, productsFilter, setProductsFilter };
}
