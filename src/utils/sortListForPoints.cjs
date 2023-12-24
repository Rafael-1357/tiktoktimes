function sortListForPoints(list) {
    list.sort(({ points: pointsA }, { points: pointsB }) => pointsB - pointsA);
}

module.exports = sortListForPoints;
