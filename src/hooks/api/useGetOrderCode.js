import useAsync from '../useAsync';

import * as ordersApi from '../../services/fastfoodApi';

export default function useGetOrderCode(imediate = false) {
  const {
    data: orderCode,
    loading: ordersLoading,
    error: ordersError,
    act: getOrderCode,
  } = useAsync(() => ordersApi.getOrderCode(), imediate);

  return {
    orderCode,
    ordersLoading,
    ordersError,
    getOrderCode,
  };
}
