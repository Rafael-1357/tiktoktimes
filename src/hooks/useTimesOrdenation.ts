import { useState, useEffect } from 'react';

import mockDadosTimes from '../../mock/mockDadosTimes';

function useTimesOrdenation() {
    const [listaTimes, setListaTimes] = useState(mockDadosTimes);

    useEffect(() => {
      const incrementInterval = setInterval(() => {
        const indiceTimeAleatorio = Math.floor(Math.random() * listaTimes.length);
        const copiaListaTimes = [...listaTimes];
        const timeSelecionado = copiaListaTimes[indiceTimeAleatorio];
        copiaListaTimes[indiceTimeAleatorio] = { ...timeSelecionado, totalPontos: timeSelecionado.totalPontos + 200 };

        const listaPontuacoes = copiaListaTimes.map(({ nome, totalPontos }) => ({ nome, totalPontos }));
        listaPontuacoes.sort((timeA, timeB) => timeB.totalPontos - timeA.totalPontos);
        listaPontuacoes.forEach(({ nome }, index) => {
            const indiceTimeAtual = copiaListaTimes.findIndex((time) => time.nome === nome);
            const timeAtual = copiaListaTimes[indiceTimeAtual];
            copiaListaTimes[indiceTimeAtual] = { ...timeAtual, posicao: index + 1 };
        });

        setListaTimes(copiaListaTimes);
      }, 3000);

      return () => {
        clearInterval(incrementInterval);
      };
    }, [listaTimes]);

    return listaTimes;
}

export default useTimesOrdenation;