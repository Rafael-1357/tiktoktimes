function formatNames(isGroup: boolean, text: string) {
    return (isGroup ? 'g_' : 'p_')
        .concat(text)
        .replace(' ', '')
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

export default formatNames;
