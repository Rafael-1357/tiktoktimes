function formatarPontos(pontos: number) {
    if (pontos < 1000) return String(pontos);
    else return ((pontos / 1000).toFixed(1)).replace('.0', '') + 'K';
}

export default formatarPontos;
