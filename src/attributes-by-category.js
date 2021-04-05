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
        CHOPPER,
        DRIVE,
        FRONT_TIRES,
        NUMBER_OF_ROWS,
        POWERFOLD_BIN,
        SEPARATOR_HOURS,
        SPACING,
        SPREADER,
        WIDTH,
    ],
    [CATEGORIES.HAY_AND_FORAGE.name]: [HOURS, ACRES, NUMBER_OF_BALES, WIDTH],
    [CATEGORIES.MANURE_HANDLING.name]: [HOURS, CAPACITY, DRIVE, HORSEPOWER, NUMBER_OF_SHANKS, WIDTH],
    [CATEGORIES.OTHER_EQUIPMENT.name]: [HOURS, CAPACITY, EMISSIONS, LENGTH, MILES, TAG_AXLE, TRANSMISSION, WIDTH],
    [CATEGORIES.PLANTING.name]: [HOURS, ACRES, CENTER_BULK_FILL, NUMBER_OF_ROWS, ROW_CLEANERS, SPACING, WIDTH],
    [CATEGORIES.TILLAGE.name]: [NUMBER_OF_BOTTOMS, NUMBER_OF_ROWS, NUMBER_OF_SHANKS, SPACING, WIDTH],
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

const ATTRIBUTES_TO_CLEAR_BY_CATEGORY = {
    [CATEGORIES.AG_TRAILERS.name]: {
        [ACRES.name]: null,
        [BELLY_MOWER.name]: null,
        [CAB.name]: null,
        [CAPACITY.name]: null,
        [CENTER_BULK_FILL.name]: null,
        [CHOPPER.name]: null,
        [DRIVE.name]: null,
        [EMISSIONS.name]: null,
        [FRONT_TIRES.name]: null,
        [HOURS.name]: null,
        [HORSEPOWER.name]: null,
        [LOADER.name]: null,
        [MILES.name]: null,
        [NUMBER_OF_BALES.name]: null,
        [NUMBER_OF_BOTTOMS.name]: null,
        [NUMBER_OF_ROWS.name]: null,
        [NUMBER_OF_SHANKS.name]: null,
        [POWERFOLD_BIN.name]: null,
        [REAR_PTO.name]: null,
        [REAR_TIRES.name]: null,
        [ROW_CLEANERS.name]: null,
        [SEPARATOR_HOURS.name]: null,
        [SPACING.name]: null,
        [SPREADER.name]: null,
        [TAG_AXLE.name]: null,
        [THREE_POINT_HITCH.name]: null,
        [TRANSMISSION.name]: null,
        [WIDTH.name]: null,
    },
    [CATEGORIES.CHEMICAL_APPLICATORS.name]: {
        [ACRES.name]: null,
        [BELLY_MOWER.name]: null,
        [CAB.name]: null,
        [CENTER_BULK_FILL.name]: null,
        [CHOPPER.name]: null,
        [EMISSIONS.name]: null,
        [FRONT_TIRES.name]: null,
        [LENGTH.name]: null,
        [LOADER.name]: null,
        [MILES.name]: null,
        [NUMBER_OF_BALES.name]: null,
        [NUMBER_OF_BOTTOMS.name]: null,
        [NUMBER_OF_ROWS.name]: null,
        [POWERFOLD_BIN.name]: null,
        [REAR_PTO.name]: null,
        [REAR_TIRES.name]: null,
        [ROW_CLEANERS.name]: null,
        [SEPARATOR_HOURS.name]: null,
        [SPACING.name]: null,
        [SPREADER.name]: null,
        [TAG_AXLE.name]: null,
        [THREE_POINT_HITCH.name]: null,
        [TRANSMISSION.name]: null,
    },
    [CATEGORIES.HARVESTING.name]: {
        [ACRES.name]: null,
        [BELLY_MOWER.name]: null,
        [CAB.name]: null,
        [CAPACITY.name]: null,
        [CENTER_BULK_FILL.name]: null,
        [EMISSIONS.name]: null,
        [HORSEPOWER.name]: null,
        [LENGTH.name]: null,
        [LOADER.name]: null,
        [MILES.name]: null,
        [NUMBER_OF_BALES.name]: null,
        [NUMBER_OF_BOTTOMS.name]: null,
        [NUMBER_OF_SHANKS.name]: null,
        [REAR_PTO.name]: null,
        [REAR_TIRES.name]: null,
        [ROW_CLEANERS.name]: null,
        [TAG_AXLE.name]: null,
        [THREE_POINT_HITCH.name]: null,
        [TRANSMISSION.name]: null,
    },
    [CATEGORIES.HAY_AND_FORAGE.name]: {
        [BELLY_MOWER.name]: null,
        [CAB.name]: null,
        [CAPACITY.name]: null,
        [CENTER_BULK_FILL.name]: null,
        [CHOPPER.name]: null,
        [DRIVE.name]: null,
        [EMISSIONS.name]: null,
        [FRONT_TIRES.name]: null,
        [HORSEPOWER.name]: null,
        [LENGTH.name]: null,
        [LOADER.name]: null,
        [MILES.name]: null,
        [NUMBER_OF_BOTTOMS.name]: null,
        [NUMBER_OF_ROWS.name]: null,
        [NUMBER_OF_SHANKS.name]: null,
        [POWERFOLD_BIN.name]: null,
        [REAR_PTO.name]: null,
        [REAR_TIRES.name]: null,
        [ROW_CLEANERS.name]: null,
        [SEPARATOR_HOURS.name]: null,
        [SPACING.name]: null,
        [SPREADER.name]: null,
        [TAG_AXLE.name]: null,
        [THREE_POINT_HITCH.name]: null,
        [TRANSMISSION.name]: null,
    },
    [CATEGORIES.MANURE_HANDLING.name]: {
        [ACRES.name]: null,
        [BELLY_MOWER.name]: null,
        [CAB.name]: null,
        [CENTER_BULK_FILL.name]: null,
        [CHOPPER.name]: null,
        [EMISSIONS.name]: null,
        [FRONT_TIRES.name]: null,
        [LENGTH.name]: null,
        [LOADER.name]: null,
        [MILES.name]: null,
        [NUMBER_OF_BALES.name]: null,
        [NUMBER_OF_BOTTOMS.name]: null,
        [NUMBER_OF_ROWS.name]: null,
        [POWERFOLD_BIN.name]: null,
        [REAR_PTO.name]: null,
        [REAR_TIRES.name]: null,
        [ROW_CLEANERS.name]: null,
        [SEPARATOR_HOURS.name]: null,
        [SPACING.name]: null,
        [SPREADER.name]: null,
        [TAG_AXLE.name]: null,
        [THREE_POINT_HITCH.name]: null,
        [TRANSMISSION.name]: null,
    },
    [CATEGORIES.OTHER_EQUIPMENT.name]: {
        [ACRES.name]: null,
        [BELLY_MOWER.name]: null,
        [CAB.name]: null,
        [CENTER_BULK_FILL.name]: null,
        [CHOPPER.name]: null,
        [DRIVE.name]: null,
        [FRONT_TIRES.name]: null,
        [HORSEPOWER.name]: null,
        [LOADER.name]: null,
        [NUMBER_OF_BALES.name]: null,
        [NUMBER_OF_BOTTOMS.name]: null,
        [NUMBER_OF_ROWS.name]: null,
        [NUMBER_OF_SHANKS.name]: null,
        [POWERFOLD_BIN.name]: null,
        [REAR_PTO.name]: null,
        [REAR_TIRES.name]: null,
        [ROW_CLEANERS.name]: null,
        [SEPARATOR_HOURS.name]: null,
        [SPACING.name]: null,
        [SPREADER.name]: null,
        [THREE_POINT_HITCH.name]: null,
    },
    [CATEGORIES.PLANTING.name]: {
        [BELLY_MOWER.name]: null,
        [CAB.name]: null,
        [CAPACITY.name]: null,
        [CHOPPER.name]: null,
        [DRIVE.name]: null,
        [EMISSIONS.name]: null,
        [FRONT_TIRES.name]: null,
        [HORSEPOWER.name]: null,
        [LENGTH.name]: null,
        [LOADER.name]: null,
        [MILES.name]: null,
        [NUMBER_OF_BALES.name]: null,
        [NUMBER_OF_BOTTOMS.name]: null,
        [NUMBER_OF_SHANKS.name]: null,
        [POWERFOLD_BIN.name]: null,
        [REAR_PTO.name]: null,
        [REAR_TIRES.name]: null,
        [SEPARATOR_HOURS.name]: null,
        [SPREADER.name]: null,
        [TAG_AXLE.name]: null,
        [THREE_POINT_HITCH.name]: null,
        [TRANSMISSION.name]: null,
    },
    [CATEGORIES.TILLAGE.name]: {
        [ACRES.name]: null,
        [BELLY_MOWER.name]: null,
        [CAB.name]: null,
        [CAPACITY.name]: null,
        [CENTER_BULK_FILL.name]: null,
        [CHOPPER.name]: null,
        [DRIVE.name]: null,
        [EMISSIONS.name]: null,
        [FRONT_TIRES.name]: null,
        [HOURS.name]: null,
        [HORSEPOWER.name]: null,
        [LENGTH.name]: null,
        [LOADER.name]: null,
        [MILES.name]: null,
        [NUMBER_OF_BALES.name]: null,
        [POWERFOLD_BIN.name]: null,
        [REAR_PTO.name]: null,
        [REAR_TIRES.name]: null,
        [ROW_CLEANERS.name]: null,
        [SEPARATOR_HOURS.name]: null,
        [SPREADER.name]: null,
        [TAG_AXLE.name]: null,
        [THREE_POINT_HITCH.name]: null,
        [TRANSMISSION.name]: null,
    },
    [CATEGORIES.TRACTORS.name]: {
        [ACRES.name]: null,
        [CAPACITY.name]: null,
        [CENTER_BULK_FILL.name]: null,
        [CHOPPER.name]: null,
        [EMISSIONS.name]: null,
        [LENGTH.name]: null,
        [MILES.name]: null,
        [NUMBER_OF_BALES.name]: null,
        [NUMBER_OF_BOTTOMS.name]: null,
        [NUMBER_OF_ROWS.name]: null,
        [NUMBER_OF_SHANKS.name]: null,
        [POWERFOLD_BIN.name]: null,
        [ROW_CLEANERS.name]: null,
        [SEPARATOR_HOURS.name]: null,
        [SPACING.name]: null,
        [SPREADER.name]: null,
        [TAG_AXLE.name]: null,
        [TRANSMISSION.name]: null,
        [WIDTH.name]: null,
    },
};

export const getAttributesForCategory = (categoryName) => {
    return [...COMMON_ATTRIBUTES, ...ATTRIBUTES_BY_CATEGORY[categoryName]];
};

export const getClearableAttributesForCategory = (categoryName) => ATTRIBUTES_TO_CLEAR_BY_CATEGORY[categoryName];
