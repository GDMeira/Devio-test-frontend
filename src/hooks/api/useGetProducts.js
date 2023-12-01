import useAsync from '../useAsync';

import * as productsApi from '../../services/fastfoodApi';

export default function useGetProducts(imediate = true) {
  const {
    data: products,
    loading: productsLoading,
    error: productsError,
    act: getProducts,
  } = useAsync(() => productsApi.getProducts(), imediate);

  return {
    products,
    productsLoading,
    productsError,
    getProducts,
  };
}
