import {
    ACRES,
    BELLY_MOWER,
    CAB,
    CAPACITY,
    CATEGORY,
    CENTER_BULK_FILL,
    CHOPPER,
    CITY,
    CONDITION,
    DESCRIPTION,
    DRIVE,
    EMISSIONS,
    EQUIPMENT_CONDITION,
    FRONT_TIRES,
    HOURS,
    HORSEPOWER,
    LENGTH,
    LOADER,
    LOT_NUMBER,
    MAKE,
    MILES,
    MODEL,
    NUMBER_OF_BALES,
    NUMBER_OF_BOTTOMS,
    NUMBER_OF_ROWS,
    NUMBER_OF_SHANKS,
    POWERFOLD_BIN,
    PRICE,
    REAR_PTO,
    REAR_TIRES,
    ROW_CLEANERS,
    SEPARATOR_HOURS,
    SERIAL,
    SPACING,
    SPREADER,
    STATE,
    SUBCATEGORY,
    TAG_AXLE,
    THREE_POINT_HITCH,
    TRANSMISSION,
    WIDTH,
    YEAR,
    ZIP_CODE,
    getAllAttributes,
} from './attributes';
import { CATEGORIES } from './categories';

export const IDENTIFYING_ATTRIBUTES = [YEAR, MAKE, MODEL, CATEGORY, SUBCATEGORY];

export const LOCATION_ATTRIBUTES = [LOT_NUMBER, CITY, STATE, ZIP_CODE];

export const VALUE_ATTRIBUTES = [PRICE];

export const COMMON_ATTRIBUTES = [
    ...IDENTIFYING_ATTRIBUTES,
    ...LOCATION_ATTRIBUTES,
    ...VALUE_ATTRIBUTES,
    CONDITION,
    DESCRIPTION,
    EQUIPMENT_CONDITION,
    SERIAL,
];

const ATTRIBUTES_BY_CATEGORY = {
    [CATEGORIES.AG_TRAILERS.name]: [LENGTH],
    [CATEGORIES.CHEMICAL_APPLICATORS.name]: [HOURS, CAPACITY, DRIVE, HORSEPOWER, NUMBER_OF_SHANKS, WIDTH],
    [CATEGORIES.HARVESTING.name]: [
        HOURS,
        SEPARATOR_HOURS,
        DRIVE,
        FRONT_TIRES,
        NUMBER_OF_ROWS,
        POWERFOLD_BIN,
        CHOPPER,
        SPREADER,
        SPACING,
        WIDTH,
    ],
    [CATEGORIES.HAY_AND_FORAGE.name]: [HOURS, ACRES, NUMBER_OF_BALES, WIDTH],
    [CATEGORIES.MANURE_HANDLING.name]: [HOURS, CAPACITY, DRIVE, HORSEPOWER, NUMBER_OF_SHANKS, WIDTH],
    [CATEGORIES.OTHER_EQUIPMENT.name]: [HOURS, CAPACITY, EMISSIONS, LENGTH, MILES, TAG_AXLE, TRANSMISSION, WIDTH],
    [CATEGORIES.PLANTING.name]: [HOURS, ACRES, CENTER_BULK_FILL, NUMBER_OF_ROWS, ROW_CLEANERS, SPACING, WIDTH],
    [CATEGORIES.TILLAGE.name]: [NUMBER_OF_BOTTOMS, NUMBER_OF_ROWS, NUMBER_OF_SHANKS, SPACING, WIDTH],
    [CATEGORIES.TRACTORS.name]: [
        HOURS,
        CAB,
        DRIVE,
        HORSEPOWER,
        BELLY_MOWER,
        LOADER,
        THREE_POINT_HITCH,
        REAR_PTO,
        FRONT_TIRES,
        REAR_TIRES,
    ],
};

export const getAttributesForCategory = (categoryName) => {
    return [...COMMON_ATTRIBUTES, ...ATTRIBUTES_BY_CATEGORY[categoryName]];
};

export const getClearableAttributesForCategory = (categoryName) => {
    const allAttributes = getAllAttributes();
    const attributesNotToClear = getAttributesForCategory(categoryName);
    const nulledIrrelevantAttributes = {};

    allAttributes.forEach((attribute) => {
        const doNotClear = attributesNotToClear.find((att) => att.name === attribute.name);

        if (!doNotClear) {
            nulledIrrelevantAttributes[attribute.name] = null;

            if (attribute.name === CAPACITY.name) {
                nulledIrrelevantAttributes.gallon = null;
                nulledIrrelevantAttributes.ton = null;
            }

            if (attribute.name === WIDTH.name) {
                nulledIrrelevantAttributes.widthFeet = null;
                nulledIrrelevantAttributes.widthInches = null;
            }
        }
    });

    return nulledIrrelevantAttributes;
};
