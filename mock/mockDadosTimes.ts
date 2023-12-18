export type TorcedorType = {
    imagemTorcedorUrl: string;
    pontos: number;
    posicao: number;
};

export type TimeType = {
    nome: string;
    totalPontos: number;
    imagemTimeUrl: string;
    posicao: number;
    torcedores: TorcedorType[];
};


const mockDadosTimes: TimeType[] = [
    {
        nome: 'Flamengo',
        totalPontos: 0,
        imagemTimeUrl: 'flamengo.jpg',
        torcedores: [],
        posicao: 1,
    },
    {
        nome: 'Fluminense',
        totalPontos: 0,
        imagemTimeUrl: 'fluminense.jpg',
        torcedores: [],
        posicao: 2,
    },
    {
        nome: 'Palmeiras',
        totalPontos: 0,
        imagemTimeUrl: 'palmeiras.jpg',
        torcedores: [],
        posicao: 3,
    },
    {
        nome: 'São Paulo',
        totalPontos: 0,
        imagemTimeUrl: 'saopaulo.jpg',
        torcedores: [],
        posicao: 4,
    },
    {
        nome: 'Botafogo',
        totalPontos: 0,
        imagemTimeUrl: 'botafogo.png',
        torcedores: [],
        posicao: 5,
    },
    {
        nome: 'Internacional',
        totalPontos: 0,
        imagemTimeUrl: 'internacional.png',
        torcedores: [],
        posicao: 6,
    },
    {
        nome: 'Vasco',
        totalPontos: 0,
        imagemTimeUrl: 'vasco.png',
        torcedores: [],
        posicao: 7,
    },
    {
        nome: 'Santos',
        totalPontos: 0,
        imagemTimeUrl: 'santos.png',
        torcedores: [],
        posicao: 8,
    },
    {
        nome: 'Corinthians',
        totalPontos: 0,
        imagemTimeUrl: 'corinthians.png',
        torcedores: [],
        posicao: 9,
    },
]

export default mockDadosTimes;