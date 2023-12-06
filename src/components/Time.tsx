import { TimeType } from "../../mock/mockDadosTimes";

import styled from 'styled-components';
import TimesTheme from "../themes/TimesTheme";
import { TimesThemeType } from "../themes/TimesTheme";

const FloatingDiv = styled.div<{ posicao: number }>`
    position: absolute;
    top: ${({posicao}) => posicao === 1 ? 0 : (posicao - 1) * 57}px;

    width: 100%;
    transition: all 350ms;
`;

const CardTime = styled.section`
    position: relative;
    margin-bottom: 7px;
`;

const Brasao = styled.div`
    width: 50px;
    height: 50px;

    position: relative;
`;

const ImagemTime = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 2px solid #1d1d1d;
    background-color: white;
`;

const Pontos = styled.p`
    padding: 2px 5px;
    font-size: .8em;
    background-color: #808080c0;
    border-radius: 10px;
    color: whitesmoke;

    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
`;

const TorcedoresContainer = styled.div<{nomeTime: keyof TimesThemeType}>`
    background-color: ${({ nomeTime }) => TimesTheme[nomeTime].backgroundColor ?? '#FFF'};
    height: 100%;
    width: 100%;
    z-index: -100;
    border-radius: 100px 0 0 100px;

    position: absolute;
    bottom: 0;
`;

function Time(props: TimeType) {
    let totalPontos: string;

    if (props.totalPontos < 1000) totalPontos = String(props.totalPontos);
    else totalPontos = ((props.totalPontos / 1000).toFixed(1)).replace('.0', '') + 'K';

    return (
        <FloatingDiv posicao={props.posicao}>
            <CardTime>
                <Brasao>
                    <ImagemTime src={props.imagemTimeUrl} />
                    <Pontos>{totalPontos}</Pontos>
                </Brasao>
                <TorcedoresContainer nomeTime={props.nome as keyof TimesThemeType}>
                </TorcedoresContainer>
            </CardTime>
        </FloatingDiv>
    );
}

export default Time;