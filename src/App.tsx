import useTimesOrdenation from './hooks/useTimesOrdenation';

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
  const listaTimes = useTimesOrdenation();

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
    </>
  );
}

export default App;
