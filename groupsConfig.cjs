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
];

groupsConfig.forEach(({ groupName, aliases, styles }) => new Group(groupName, aliases, styles));
