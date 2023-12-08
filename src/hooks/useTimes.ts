import { useState, useEffect } from 'react';

import io from "socket.io-client";

import mockDadosTimes from '../../mock/mockDadosTimes';

function useTimes() {
  const [listaTimes, setListaTimes] = useState(mockDadosTimes);

  const connectarSocket = async () =>{
    const socket = await io('http://localhost:3001');
      socket.on('enviandoParaCliente', (data) => {
        setListaTimes(data);
    });
  };

  useEffect(() => {
    connectarSocket();
  }, []);

  return listaTimes;
}

export default useTimes;