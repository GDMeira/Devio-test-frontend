import { useContext } from 'react';
import ItensContext from '../contexts/ItensContext';

export default function useItensContext() {
  const {
    itens, setItens, finishingOrder, setFinishingOrder,
  } = useContext(ItensContext);

  return {
    itens, setItens, finishingOrder, setFinishingOrder,
  };
}
