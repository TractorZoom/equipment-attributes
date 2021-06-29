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
    REAR_TIRES,
    REAR_PTO,
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
} from '../src/attributes';
import {
    getAttributesForCategory,
    getClearableAttributesForCategory,
    getTopAttributesForCategory,
} from '../src/attributes-by-category';
import { CATEGORIES } from '../src/categories';

const DEFAULT_ATTRIBUTES = [
    YEAR,
    MAKE,
    MODEL,
    CATEGORY,
    SUBCATEGORY,
    LOT_NUMBER,
    CITY,
    STATE,
    ZIP_CODE,
    PRICE,
    CONDITION,
    DESCRIPTION,
    EQUIPMENT_CONDITION,
    SERIAL,
];

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
        gallon: null,
        ton: null,
        widthFeet: null,
        widthInches: null,
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
        gallon: null,
        ton: null,
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
        gallon: null,
        ton: null,
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
        gallon: null,
        ton: null,
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
        gallon: null,
        ton: null,
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
        gallon: null,
        ton: null,
        widthFeet: null,
        widthInches: null,
    },
};

test('attributes for ag trailers', () => {
    const actual = getAttributesForCategory(CATEGORIES.AG_TRAILERS.name);
    const expectedAttributes = [...DEFAULT_ATTRIBUTES, LENGTH];

    expect(actual).toStrictEqual(expectedAttributes);
});

test('attributes for chemical applicators', () => {
    const actual = getAttributesForCategory(CATEGORIES.CHEMICAL_APPLICATORS.name);
    const expectedAttributes = [...DEFAULT_ATTRIBUTES, HOURS, CAPACITY, DRIVE, HORSEPOWER, NUMBER_OF_SHANKS, WIDTH];

    expect(actual).toStrictEqual(expectedAttributes);
});

test('attributes for harvesting', () => {
    const actual = getAttributesForCategory(CATEGORIES.HARVESTING.name);
    const expectedAttributes = [
        ...DEFAULT_ATTRIBUTES,
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
    ];

    expect(actual).toStrictEqual(expectedAttributes);
});

test('attributes for hay and forage', () => {
    const actual = getAttributesForCategory(CATEGORIES.HAY_AND_FORAGE.name);
    const expectedAttributes = [...DEFAULT_ATTRIBUTES, HOURS, ACRES, NUMBER_OF_BALES, WIDTH];

    expect(actual).toStrictEqual(expectedAttributes);
});

test('attributes for manure handling', () => {
    const actual = getAttributesForCategory(CATEGORIES.MANURE_HANDLING.name);
    const expectedAttributes = [...DEFAULT_ATTRIBUTES, HOURS, CAPACITY, DRIVE, HORSEPOWER, NUMBER_OF_SHANKS, WIDTH];

    expect(actual).toStrictEqual(expectedAttributes);
});

test('attributes for other equipment', () => {
    const actual = getAttributesForCategory(CATEGORIES.OTHER_EQUIPMENT.name);
    const expectedAttributes = [
        ...DEFAULT_ATTRIBUTES,
        HOURS,
        CAPACITY,
        EMISSIONS,
        LENGTH,
        MILES,
        TAG_AXLE,
        TRANSMISSION,
        WIDTH,
    ];

    expect(actual).toStrictEqual(expectedAttributes);
});

test('attributes for planting', () => {
    const actual = getAttributesForCategory(CATEGORIES.PLANTING.name);
    const expectedAttributes = [
        ...DEFAULT_ATTRIBUTES,
        HOURS,
        ACRES,
        CENTER_BULK_FILL,
        NUMBER_OF_ROWS,
        ROW_CLEANERS,
        SPACING,
        WIDTH,
    ];

    expect(actual).toStrictEqual(expectedAttributes);
});

test('attributes for tillage', () => {
    const actual = getAttributesForCategory(CATEGORIES.TILLAGE.name);
    const expectedAttributes = [
        ...DEFAULT_ATTRIBUTES,
        NUMBER_OF_BOTTOMS,
        NUMBER_OF_ROWS,
        NUMBER_OF_SHANKS,
        SPACING,
        WIDTH,
    ];

    expect(actual).toStrictEqual(expectedAttributes);
});

test('attributes for tractors', () => {
    const actual = getAttributesForCategory(CATEGORIES.TRACTORS.name);
    const expectedAttributes = [
        ...DEFAULT_ATTRIBUTES,
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
    ];

    expect(actual).toStrictEqual(expectedAttributes);
});

test.each`
    name                      | category
    ${`Ag Trailers`}          | ${CATEGORIES.AG_TRAILERS.name}
    ${`Chemical Applicators`} | ${CATEGORIES.CHEMICAL_APPLICATORS.name}
    ${`Harvesting`}           | ${CATEGORIES.HARVESTING.name}
    ${`Hay and Forage`}       | ${CATEGORIES.HAY_AND_FORAGE.name}
    ${`Manure Handling`}      | ${CATEGORIES.MANURE_HANDLING.name}
    ${`Other Equipment`}      | ${CATEGORIES.OTHER_EQUIPMENT.name}
    ${`Planting`}             | ${CATEGORIES.PLANTING.name}
    ${`Tillage`}              | ${CATEGORIES.TILLAGE.name}
    ${`Tractors`}             | ${CATEGORIES.TRACTORS.name}
`('should clear the irrelevant properties for $category', ({ category }) => {
    //given
    const expected = ATTRIBUTES_TO_CLEAR_BY_CATEGORY[category];

    //when
    const actual = getClearableAttributesForCategory(category);

    //then
    expect(actual).toStrictEqual(expected);
});

describe('Top Attributes', () => {
    it.each(Object.values(CATEGORIES).map((x) => x.name))(
        'should return top categories for category: %s',
        (category) => {
            //given

            // when
            const topAttributes = getTopAttributesForCategory(category);

            // then
            expect(topAttributes.length).toBeGreaterThanOrEqual(1);
            expect(topAttributes.length).toBeLessThan(3);
        }
    );
});
