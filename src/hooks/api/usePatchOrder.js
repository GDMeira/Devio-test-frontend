import useAsync from '../useAsync';

import * as ordersApi from '../../services/fastfoodApi';

export default function usePatchOrder(imediate = false) {
  const {
    data: response,
    loading: patchOrderLoading,
    error: patchOrderError,
    act: patchOrder,
  } = useAsync(ordersApi.patchOrder, imediate);

  return {
    response,
    patchOrderLoading,
    patchOrderError,
    patchOrder,
  };
}
