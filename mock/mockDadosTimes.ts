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
        totalPontos: 12e3,
        imagemTimeUrl: 'flamengo.jpg',
        torcedores: [
            {
                imagemTorcedorUrl: ,
                pontos: 7e3,
                posicao: 1,
            },
            {
                imagemTorcedorUrl: ,
                pontos: 5e3,
                posicao: 2
            },
        ],
        posicao: 6,
    },
    {
        nome: 'Fluminense',
        totalPontos: 12e3,
        imagemTimeUrl: 'fluminense.jpg',
        torcedores: [
            {
                imagemTorcedorUrl: '',
                pontos: 7e3,
                posicao: 1,
            },
            {
                imagemTorcedorUrl: '',
                pontos: 5e3,
                posicao: 2
            },
        ],
        posicao: 2,
    },
    {
        nome: 'Palmeiras',
        totalPontos: 12e3,
        imagemTimeUrl: 'palmeiras.jpg',
        torcedores: [
            {
                imagemTorcedorUrl: '',
                pontos: 7e3,
                posicao: 1,
            },
            {
                imagemTorcedorUrl: '',
                pontos: 5e3,
                posicao: 2
            },
        ],
        posicao: 3,
    },
    {
        nome: 'São Paulo',
        totalPontos: 12e3,
        imagemTimeUrl: 'saopaulo.jpg',
        torcedores: [
            {
                imagemTorcedorUrl: '',
                pontos: 7e3,
                posicao: 1,
            },
            {
                imagemTorcedorUrl: '',
                pontos: 5e3,
                posicao: 2
            },
        ],
        posicao: 4,
    },
    {
        nome: 'Botafogo',
        totalPontos: 12e3,
        imagemTimeUrl: 'botafogo.png',
        torcedores: [
            {
                imagemTorcedorUrl: '',
                pontos: 7e3,
                posicao: 1,
            },
            {
                imagemTorcedorUrl: '',
                pontos: 5e3,
                posicao: 2
            },
        ],
        posicao: 5,
    },
    {
        nome: 'Internacional',
        totalPontos: 100,
        imagemTimeUrl: 'internacional.png',
        torcedores: [
            {
                imagemTorcedorUrl: '',
                pontos: 60,
                posicao: 1,
            },
            {
                imagemTorcedorUrl: '',
                pontos: 40,
                posicao: 2
            },
        ],
        posicao: 1,
    },
    {
        nome: 'Vasco',
        totalPontos: 12e3,
        imagemTimeUrl: 'vasco.png',
        torcedores: [
            {
                imagemTorcedorUrl: '',
                pontos: 7e3,
                posicao: 1,
            },
            {
                imagemTorcedorUrl: '',
                pontos: 5e3,
                posicao: 2
            },
        ],
        posicao: 7,
    },
    {
        nome: 'Santos',
        totalPontos: 12e3,
        imagemTimeUrl: 'santos.png',
        torcedores: [
            {
                imagemTorcedorUrl: '',
                pontos: 7e3,
                posicao: 1,
            },
            {
                imagemTorcedorUrl: '',
                pontos: 5e3,
                posicao: 2
            },
        ],
        posicao: 9,
    },
    {
        nome: 'Corinthians',
        totalPontos: 12e3,
        imagemTimeUrl: 'corinthians.png',
        torcedores: [
            {
                imagemTorcedorUrl: '',
                pontos: 7e3,
                posicao: 1,
            },
            {
                imagemTorcedorUrl: '',
                pontos: 5e3,
                posicao: 2
            },
        ],
        posicao: 8,
    },
]

export default mockDadosTimes;