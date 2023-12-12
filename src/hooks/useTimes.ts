import { useState, useEffect } from 'react';

import io from "socket.io-client";

import mockDadosTimes, { TimeType } from '../../mock/mockDadosTimes';

function useTimes(): [TimeType[], string] {
  const [listaTimes, setListaTimes] = useState(mockDadosTimes);
  const [timeAscendente, setTimeAscendente] = useState('Flamengo');

  const conectarSocket = async () =>{
    const socket = await io('http://localhost:3001');
      socket.on('enviandoParaCliente', ({ times, timeAscendente }) => {
        setListaTimes(times);
        if (timeAscendente) setTimeAscendente(timeAscendente);
    });
  };

  useEffect(() => {
    conectarSocket();
  }, []);

  return [listaTimes, timeAscendente];
}

export default useTimes;