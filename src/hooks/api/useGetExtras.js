import useAsync from '../useAsync';

import * as extrasApi from '../../services/fastfoodApi';

export default function useGetExtras(imediate = true) {
  const {
    data: extras,
    loading: extrasLoading,
    error: extrasError,
    act: getExtras,
  } = useAsync(() => extrasApi.getExtras(), imediate);

  return {
    extras,
    extrasLoading,
    extrasError,
    getExtras,
  };
}
