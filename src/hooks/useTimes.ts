import { useState, useEffect } from 'react';

import io from "socket.io-client";

function useTimesOrdenation() {
  const [listaTimes, setListaTimes] = useState([]);

  const connectarSocket = async () =>{
    const socket = await io('http://localhost:3001');
      socket.on('enviandoParaCliente', (data) => {
        console.log(data);
        setListaTimes(data);
    });
  };
  useEffect(() => {
    connectarSocket();
  }, []);

  return listaTimes;
}

export default useTimesOrdenation;