const Group = require('./src/classes/Group.cjs');

global.data = [];

const groupsConfig = [
    {
        groupName: 'Flamengo',
        aliases: ['flamengo'],
        styles: {
            groupImage: 'images/flamengo.jpg',
            backgroundColor: 'red',
            fontColor: 'white',
        },
    },
    {
        groupName: 'Fluminense',
        aliases: ['fluminense'],
        styles: {
            groupImage: 'images/fluminense.jpg',
            backgroundColor: 'green',
            fontColor: 'white',
        },
    },
    {
        groupName: 'Palmeiras',
        aliases: ['palmeiras'],
        styles: {
            groupImage: 'images/palmeiras.jpg',
            backgroundColor: 'green',
            fontColor: 'white',
        },
    },
    {
        groupName: 'São Paulo',
        aliases: ['são paulo', 'sao paulo', 'sãopaulo', 'saopaulo'],
        styles: {
            groupImage: 'images/saopaulo.jpg',
            backgroundColor: 'red',
            fontColor: 'white',
        },
    },
    {
        groupName: 'Vasco',
        aliases: ['vasco'],
        styles: {
            groupImage: 'images/vasco.png',
            backgroundColor: 'black',
            fontColor: 'white',
        },
    },
    {
        groupName: 'Internacional',
        aliases: ['internacional'],
        styles: {
            groupImage: 'images/internacional.png',
            backgroundColor: 'red',
            fontColor: 'white',
        },
    },
    {
        groupName: 'Botafogo',
        aliases: ['botafogo', 'bota fogo'],
        styles: {
            groupImage: 'images/botafogo.png',
            backgroundColor: 'black',
            fontColor: 'white',
        },
    },
    {
        groupName: 'Corinthians',
        aliases: ['corinthians'],
        styles: {
            groupImage: 'images/corinthians.png',
            backgroundColor: '#1d1d1d',
            fontColor: 'white',
        },
    },
    {
        groupName: 'Santos',
        aliases: ['santos'],
        styles: {
            groupImage: 'images/santos.png',
            backgroundColor: '#1d1d1d',
            fontColor: 'white',
        },
    },
];

groupsConfig.forEach(({ groupName, aliases, styles }) => new Group(groupName, aliases, styles));
