import { createContext, useState } from 'react';

const ItensContext = createContext();
export default ItensContext;

export function ItensProvider({ children }) {
  const [itens, setItens] = useState([])
  const [finishingOrder, setFinishingOrder] = useState(false);

  return (
    <ItensContext.Provider value={{ itens, setItens, finishingOrder, setFinishingOrder }}>
      {children}
    </ItensContext.Provider>
  );
}
