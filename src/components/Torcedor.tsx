import { TorcedorType } from "../../mock/mockDadosTimes";
import formatarPontos from "../utils/formatarPontos";

import styled from "styled-components";

const CardTorcedor = styled.div<{ posicao: number }>`
    height: 30px;
    width: 30px;

    position: absolute;
    bottom: 2px;
    left: calc(5px + ${({ posicao }) => posicao === 1 ? 0 : (posicao - 1) * 33}px);

    transition: all 350ms;
`;

const ImagemTorcedor = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 100%;
`;

const Pontos = styled.p`
    font-size: .5em;
    position: absolute;
    bottom: 0;
    text-align: center;
    width: 30px;
    background-color: #808080be;
    color: white;
    border-radius: 10px;
`;

function Torcedor(props: TorcedorType) {
    const pontos = formatarPontos(props.pontos);

    return (
        <CardTorcedor posicao={props.posicao}>
            <div style={{ position: 'relative', width: '30px', height: '30px'}}>
                <ImagemTorcedor src={props.imagemTorcedorUrl} />
                <Pontos>{pontos}</Pontos>
            </div>
        </CardTorcedor>
    );
}

export default Torcedor;
