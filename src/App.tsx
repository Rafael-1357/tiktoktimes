import useTimes from './hooks/useTimes';
import { useState, useEffect } from 'react';
import ReactHowler from 'react-howler';

import styled from "styled-components";
import sleep from 'sleep-promise';

import Time from "./components/Time";
import { TimeType } from "../mock/mockDadosTimes";

import aliasNomesAudios from './utils/aliasNomesAudios';

const BarraTimes = styled.aside`
  width: 300px;
  height: 596px;

  position: absolute;
  right: 0px;
  top: 120px;
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
      <main>
        <BarraTimes>
          <RelativeDiv>
            {listaTimes.map((time: TimeType, key: number) => {
              return <Time {...{...time, key}} />;
            })}
          </RelativeDiv>
        </BarraTimes>
      </main>
      <ReactHowler {...audioConfig} onLoad={() => editAudioConfig('playing', true)} onEnd={() => editAudioConfig('playing', false)} />
    </>
  );
}

export default App;
