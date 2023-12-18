import useTimes from './hooks/useTimes';
import { useState, useEffect } from 'react';
import ReactHowler from 'react-howler';

import styled from "styled-components";
import sleep from 'sleep-promise';

import Time from "./components/Time";
import { TimeType } from "../mock/mockDadosTimes";

import aliasNomesAudios from './utils/aliasNomesAudios';
import Fundo from './images/bg.jpg';

const Main = styled.main`
  width: 400px;
  height: 700px;

  position: relative;
  transform: translateY(0%);
  background: url(${Fundo});
  background-size: cover;
  background-position: 550px;
`;

const BarraTimes = styled.aside`
  width: 300px;
  height: 513px;

  position: absolute;
  right: 0px;
  top: 93.5px;
`;

const RelativeDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

function App() {
  const [listaTimes, timeAscendente] = useTimes();
  const [audioConfig, setAudioConfig] = useState({
    src: timeAscendente,
    playing: false,
  });

  const editAudioConfig = (key: string, value: any) => setAudioConfig({ ...audioConfig, [key]: value });

  useEffect(() => {
    if (!audioConfig.playing) {
      editAudioConfig('src', aliasNomesAudios.get(timeAscendente as string));
    }
  }, [timeAscendente]);

  return (
    <>
      <Main>
        <BarraTimes>
          <RelativeDiv>
            {listaTimes.map((time: TimeType, key: number) => {
              return <Time {...{...time, key}} />;
            })}
          </RelativeDiv>
        </BarraTimes>
      </Main>
      <ReactHowler {...audioConfig} onLoad={() => editAudioConfig('playing', true)} onEnd={() => editAudioConfig('playing', false)} />
    </>
  );
}

export default App;
