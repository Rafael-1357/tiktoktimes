import useTimes from './hooks/useTimes';
import { useEffect } from 'react';

import styled from "styled-components";

import Time from "./components/Time";
import { TimeType } from "../mock/mockDadosTimes";

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
  // const listaTimes = useTimes();

  const tocarAudios = async (audios: string[]) => {
    
  };

  return (
    <>
      <main>
        <BarraTimes>
          {/* <RelativeDiv>
            {listaTimes.map((time: TimeType, key: number) => {
              return <Time {...{...time, key}} />;
            })}
          </RelativeDiv> */}
        </BarraTimes>
      </main>
      <audio src='flamengo.weba' autoPlay={true}></audio>
    </>
  );
}

export default App;
