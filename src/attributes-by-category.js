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
    ROW_SPACING,
    SEPARATOR_HOURS,
    SERIAL,
    SPREADER,
    STATE,
    SUBCATEGORY,
    TAG_AXLE,
    THREE_POINT_HITCH,
    TRANSMISSION,
    WIDTH,
    YEAR,
    ZIP_CODE,
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
    SERIAL,
];

const ATTRIBUTES_BY_CATEGORY = {
    [CATEGORIES.AG_TRAILERS.name]: [LENGTH],
    [CATEGORIES.CHEMICAL_APPLICATORS.name]: [HOURS, CAPACITY, DRIVE, HORSEPOWER, NUMBER_OF_SHANKS, WIDTH],
    [CATEGORIES.HARVESTING.name]: [
        HOURS,
        CHOPPER,
        DRIVE,
        FRONT_TIRES,
        NUMBER_OF_ROWS,
        POWERFOLD_BIN,
        ROW_SPACING,
        SEPARATOR_HOURS,
        SPREADER,
        WIDTH,
    ],
    [CATEGORIES.HAY_AND_FORAGE.name]: [HOURS, ACRES, NUMBER_OF_BALES, WIDTH],
    [CATEGORIES.MANURE_HANDLING.name]: [HOURS, CAPACITY, DRIVE, HORSEPOWER, NUMBER_OF_SHANKS, WIDTH],
    [CATEGORIES.OTHER_EQUIPMENT.name]: [HOURS, CAPACITY, EMISSIONS, LENGTH, MILES, TAG_AXLE, TRANSMISSION, WIDTH],
    [CATEGORIES.PLANTING.name]: [HOURS, ACRES, CENTER_BULK_FILL, NUMBER_OF_ROWS, ROW_CLEANERS, ROW_SPACING, WIDTH],
    [CATEGORIES.TILLAGE.name]: [NUMBER_OF_BOTTOMS, NUMBER_OF_ROWS, NUMBER_OF_SHANKS, ROW_SPACING, WIDTH],
    [CATEGORIES.TRACTORS.name]: [
        HOURS,
        BELLY_MOWER,
        CAB,
        DRIVE,
        HORSEPOWER,
        LOADER,
        REAR_PTO,
        FRONT_TIRES,
        REAR_TIRES,
        THREE_POINT_HITCH,
    ],
};

export const getAttributesForCategory = (categoryName) => {
    return [...COMMON_ATTRIBUTES, ...ATTRIBUTES_BY_CATEGORY[categoryName]];
};
