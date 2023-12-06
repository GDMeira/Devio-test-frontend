import useAsync from '../useAsync';

import * as ordersApi from '../../services/fastfoodApi';

export default function usePostOrder(imediate = false) {
  const {
    data: response,
    loading: postOrderLoading,
    error: postOrderError,
    act: postOrder,
  } = useAsync(ordersApi.postOrder, imediate);

  return {
    response,
    postOrderLoading,
    postOrderError,
    postOrder,
  };
}
