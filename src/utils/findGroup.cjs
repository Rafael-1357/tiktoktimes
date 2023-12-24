function findGroup(groupName) {
    return global
        .data
        .find(group => group.aliases.includes(groupName) || group.name === groupName);
}

module.exports = findGroup;
