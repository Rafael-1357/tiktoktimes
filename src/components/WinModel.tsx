
import { TimeType } from '../../mock/mockDadosTimes';

import styled from 'styled-components';

const WinModelContainer = styled.div`
    width: 400px;
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TimeContainer = styled.div`
    width: 250px;
    height: 250px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Coroa = styled.img`
    width: 100px;
    height: 100px;
    position: absolute;
    top: -60px;
`;

const Escudo = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 50em;
    border: 5px solid transparent;
    background: linear-gradient(white, white) padding-box,
                linear-gradient(to right, #ecc440, #fffa8a, #ddac17, #ffff95) border-box;
`
const ValorTime = styled.span`
    width: 80px;
    position: absolute;
    bottom: 10px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    border-radius: 50px;
    padding: 5px 0;
    border: 3px solid #1d1d1d;
    background-color: #1d1d1da9;
`;

const Torcedores = styled.div`
    margin-top: 25px;
    position: relative;
    display: flex;
`;

const Prata = styled.div`
    position: relative;
    position: absolute;
    top: 20px;
    left: -60px;
`;
const Ouro = styled.div`
    position: relative;
`;

const Bronze = styled.div`
    position: relative;
    position: absolute;
    top: 20px;
    left: 60px;
`;

const TorcedorFoto = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 100%;
    border-radius: 50em;
    border: 3px solid transparent;
    background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #ecc440, #fffa8a, #ddac17, #ffff95) border-box;
`;

const TorcedorPontos = styled.span`
    width: 40px;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%,0);
    color: #fff;
    font-size: 12px;
    text-align: center;
    border-radius: 50px;
    padding: 2px;
    border: 3px solid #1d1d1d;
    background-color: #1d1d1da9;
`;


function WinModel( props : TimeType){

    return (

        <WinModelContainer>
            <TimeContainer>
                <Coroa src = '../../public/coroa.webp' />
                <Escudo src = {props.imagemTimeUrl} />
                <ValorTime>{props.totalPontos}</ValorTime>
            </TimeContainer>
            <Torcedores>
                <Prata>
                    <TorcedorFoto src=''></TorcedorFoto>
                    <TorcedorPontos></TorcedorPontos>
                </Prata>
                <Ouro>
                    <TorcedorFoto src=''></TorcedorFoto>
                    <TorcedorPontos></TorcedorPontos>
                </Ouro>
                <Bronze>
                    <TorcedorFoto src=''></TorcedorFoto>
                    <TorcedorPontos></TorcedorPontos>
                </Bronze>
            </Torcedores>

        </WinModelContainer>
    )
}

export default WinModel;