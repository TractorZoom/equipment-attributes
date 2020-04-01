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
    REAR_TIRES,
    REAR_PTO,
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
} from '../src/attributes'
import {getAttributesForCategory} from '../src/attributes-by-category'
import {CATEGORIES} from '../src/categories'

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
    SERIAL,
]

test('attributes for ag trailers', () => {
    const actual = getAttributesForCategory(CATEGORIES.AG_TRAILERS.name)
    const expectedAttributes = [...DEFAULT_ATTRIBUTES, LENGTH]

    expect(actual).toStrictEqual(expectedAttributes)
})

test('attributes for chemical applicators', () => {
    const actual = getAttributesForCategory(CATEGORIES.CHEMICAL_APPLICATORS.name)
    const expectedAttributes = [...DEFAULT_ATTRIBUTES, HOURS, CAPACITY, DRIVE, HORSEPOWER, NUMBER_OF_SHANKS, WIDTH]

    expect(actual).toStrictEqual(expectedAttributes)
})

test('attributes for harvesting', () => {
    const actual = getAttributesForCategory(CATEGORIES.HARVESTING.name)
    const expectedAttributes = [
        ...DEFAULT_ATTRIBUTES,
        HOURS,
        CHOPPER,
        DRIVE,
        FRONT_TIRES,
        HORSEPOWER,
        NUMBER_OF_ROWS,
        POWERFOLD_BIN,
        ROW_SPACING,
        SEPARATOR_HOURS,
        SPREADER,
        WIDTH,
    ]

    expect(actual).toStrictEqual(expectedAttributes)
})

test('attributes for hay and forage', () => {
    const actual = getAttributesForCategory(CATEGORIES.HAY_AND_FORAGE.name)
    const expectedAttributes = [...DEFAULT_ATTRIBUTES, HOURS, ACRES, NUMBER_OF_BALES, WIDTH]

    expect(actual).toStrictEqual(expectedAttributes)
})

test('attributes for manure handling', () => {
    const actual = getAttributesForCategory(CATEGORIES.MANURE_HANDLING.name)
    const expectedAttributes = [...DEFAULT_ATTRIBUTES, HOURS, CAPACITY, DRIVE, HORSEPOWER, NUMBER_OF_SHANKS, WIDTH]

    expect(actual).toStrictEqual(expectedAttributes)
})

test('attributes for other equipment', () => {
    const actual = getAttributesForCategory(CATEGORIES.OTHER_EQUIPMENT.name)
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
    ]

    expect(actual).toStrictEqual(expectedAttributes)
})

test('attributes for planting', () => {
    const actual = getAttributesForCategory(CATEGORIES.PLANTING.name)
    const expectedAttributes = [
        ...DEFAULT_ATTRIBUTES,
        HOURS,
        ACRES,
        CENTER_BULK_FILL,
        NUMBER_OF_ROWS,
        ROW_CLEANERS,
        ROW_SPACING,
        WIDTH,
    ]

    expect(actual).toStrictEqual(expectedAttributes)
})

test('attributes for tillage', () => {
    const actual = getAttributesForCategory(CATEGORIES.TILLAGE.name)
    const expectedAttributes = [
        ...DEFAULT_ATTRIBUTES,
        NUMBER_OF_BOTTOMS,
        NUMBER_OF_ROWS,
        NUMBER_OF_SHANKS,
        ROW_SPACING,
        WIDTH,
    ]

    expect(actual).toStrictEqual(expectedAttributes)
})

test('attributes for tractors', () => {
    const actual = getAttributesForCategory(CATEGORIES.TRACTORS.name)
    const expectedAttributes = [
        ...DEFAULT_ATTRIBUTES,
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
    ]

    expect(actual).toStrictEqual(expectedAttributes)
})
