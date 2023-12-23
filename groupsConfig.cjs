const Group = require('./src/classes/Group.cjs');

const groupsConfig = [
    {
        groupName: 'Flamengo',
        aliases: ['flamengo'],
        styles: {
            groupImage: 'flamengo.jpg',
            backgroundColor: 'red',
            fontColor: 'white',
        },
    },
    {
        groupName: 'Fluminense',
        aliases: ['fluminense'],
        styles: {
            groupImage: 'fluminense.jpg',
            backgroundColor: 'green',
            fontColor: 'white',
        },
    },
    {
        groupName: 'Palmeiras',
        aliases: ['palmeiras'],
        styles: {
            groupImage: 'palmeiras.jpg',
            backgroundColor: 'green',
            fontColor: 'white',
        },
    },
    {
        groupName: 'São Paulo',
        aliases: ['são paulo', 'sao paulo', 'sãopaulo', 'saopaulo'],
        styles: {
            groupImage: 'saopaulo.jpg',
            backgroundColor: 'red',
            fontColor: 'white',
        },
    },
    {
        groupName: 'Vasco',
        aliases: ['vasco'],
        styles: {
            groupImage: 'vasco.jpg',
            backgroundColor: 'black',
            fontColor: 'white',
        },
    },
    {
        groupName: 'Internacional',
        aliases: ['internacional'],
        styles: {
            groupImage: 'internacional.jpg',
            backgroundColor: 'red',
            fontColor: 'white',
        },
    },
    {
        groupName: 'Botafogo',
        aliases: ['botafogo', 'bota fogo'],
        styles: {
            groupImage: 'botafogo.jpg',
            backgroundColor: 'black',
            fontColor: 'white',
        },
    },
    {
        groupName: 'Corinthians',
        aliases: ['corinthians'],
        styles: {
            groupImage: 'corinthians.jpg',
            backgroundColor: '#1d1d1d',
            fontColor: 'white',
        },
    },
    {
        groupName: 'Santos',
        aliases: ['santos'],
        styles: {
            groupImage: 'santos.jpg',
            backgroundColor: '#1d1d1d',
            fontColor: 'white',
        },
    },
];

groupsConfig.forEach(({ groupName, aliases, styles }) => new Group(groupName, aliases, styles));
