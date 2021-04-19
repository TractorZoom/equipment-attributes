export const formatNumberWithThousandSeparator = (value, skip) => {
    if (!value && !skip) {
        return '---';
    }

    const valueString = typeof value === 'string' ? value : value.toString();

    return valueString.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,').replace('.00', '');
};
