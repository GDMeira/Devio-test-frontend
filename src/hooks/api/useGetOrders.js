import useAsync from '../useAsync';

import * as ordersApi from '../../services/fastfoodApi';

export default function useGetOrders(imediate = false) {
  const {
    data: orders,
    loading: ordersLoading,
    error: ordersError,
    act: getOrders,
  } = useAsync(() => ordersApi.getOrders(), imediate);

  return {
    orders,
    ordersLoading,
    ordersError,
    getOrders,
  };
}
