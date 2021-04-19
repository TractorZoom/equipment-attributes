import { CATEGORIES } from './categories';
import { formatNumberWithThousandSeparator } from './format';

const getCapacity = ({ gallon, ton }) => {
    if (Boolean(gallon) && parseFloat(gallon) !== 0) {
        return `${formatNumberWithThousandSeparator(gallon)} Gal`;
    }

    if (Boolean(ton) && parseFloat(ton) !== 0) {
        return `${ton} T`;
    }

    return '--- Gal/T';
};

const getHours = ({ hours, separatorHours }, category) => {
    const hoursLabel = hours ? `${formatNumberWithThousandSeparator(`${hours}`)} Hrs` : '--- Hrs';
    const separatorHoursLabel = separatorHours
        ? `${formatNumberWithThousandSeparator(`${separatorHours}`)} Sep Hrs`
        : '--- Sep Hrs';

    return `${hoursLabel}${category === CATEGORIES.HARVESTING.name ? ` / ${separatorHoursLabel}` : ''}`;
};

const getLength = (length) => (length ? `${parseFloat(length)} Ft` : '--- Ft');

const getNumberOfRows = (numberOfRows) => (numberOfRows ? `${parseFloat(numberOfRows)} Rows` : '--- Rows');

const getWidth = ({ widthFeet, widthInches }) => {
    let width = '';

    if (widthFeet) width += `${widthFeet} Ft`;
    if (widthInches) width += ` ${widthInches} In`;

    return width.length ? width : '--- Ft';
};

export const getVariableDetail = (equipment) => {
    if (
        equipment.category === CATEGORIES.MANURE_HANDLING.name ||
        equipment.category === CATEGORIES.CHEMICAL_APPLICATORS.name
    ) {
        return getCapacity(equipment);
    }

    if (
        equipment.category === CATEGORIES.TRACTORS.name ||
        equipment.category === CATEGORIES.HARVESTING.name ||
        equipment.category === CATEGORIES.OTHER_EQUIPMENT.name
    ) {
        return getHours(equipment, equipment.category);
    }

    if (equipment.category === CATEGORIES.AG_TRAILERS.name) {
        return getLength(equipment.length);
    }

    if (equipment.category === CATEGORIES.PLANTING.name) {
        return getNumberOfRows(equipment.numberOfRows);
    }

    if (equipment.category === CATEGORIES.TILLAGE.name || equipment.category === CATEGORIES.HAY_AND_FORAGE.name) {
        return getWidth(equipment);
    }

    return '---';
};
