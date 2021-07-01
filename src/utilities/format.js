export const formatNumberWithThousandSeparator = (value, skip) => {
    if (!value && !skip) {
        return '---';
    }

    const valueString = typeof value === 'string' ? value : value.toString();

    return valueString.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,').replace('.00', '');
};

export const formatCapacityString = (capacityInGallons, capacityInTons) => {
    if (capacityInGallons) {
        return capacityInGallons ? `${formatNumberWithThousandSeparator(capacityInGallons)} gal` : '';
    }

    return capacityInTons ? `${parseFloat(capacityInTons)} T` : '';
};

export const formatLengthStringFromFeet = (lengthInFeet) => {
    return lengthInFeet ? `${parseFloat(lengthInFeet)} ft` : '';
};

export const formatWidthStringFromFeetAndInches = (widthInFeet, widthInInches) => {
    const feet = widthInFeet ? `${parseFloat(widthInFeet)} ft` : '';
    const inches = widthInInches ? ` ${parseFloat(widthInInches)} in` : '';

    return `${feet}${inches}`;
};
