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
    FRONT_DUALS,
    FRONT_SINGLES,
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
    REAR_DUALS,
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
import {EQUIPMENT_TYPES} from '../src/equipment-types'

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
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.AG_TRAILERS)
    const expectedAttributes = [...DEFAULT_ATTRIBUTES, LENGTH]

    expect(actual).toStrictEqual(expectedAttributes)
})

test('attributes for chemical applicators', () => {
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.CHEMICAL_APPLICATORS)
    const expectedAttributes = [...DEFAULT_ATTRIBUTES, CAPACITY, DRIVE, HOURS, HORSEPOWER, NUMBER_OF_SHANKS, WIDTH]

    expect(actual).toStrictEqual(expectedAttributes)
})

test('attributes for harvesting', () => {
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.HARVESTING)
    const expectedAttributes = [
        ...DEFAULT_ATTRIBUTES,
        CHOPPER,
        DRIVE,
        FRONT_DUALS,
        FRONT_SINGLES,
        HOURS,
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
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.HAY_AND_FORAGE)
    const expectedAttributes = [...DEFAULT_ATTRIBUTES, HOURS, NUMBER_OF_BALES, WIDTH]

    expect(actual).toStrictEqual(expectedAttributes)
})

test('attributes for manure handling', () => {
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.MANURE_HANDLING)
    const expectedAttributes = [...DEFAULT_ATTRIBUTES, CAPACITY, DRIVE, HOURS, HORSEPOWER, NUMBER_OF_SHANKS, WIDTH]

    expect(actual).toStrictEqual(expectedAttributes)
})

test('attributes for other equipment', () => {
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.OTHER_EQUIPMENT)
    const expectedAttributes = [
        ...DEFAULT_ATTRIBUTES,
        CAPACITY,
        EMISSIONS,
        HOURS,
        LENGTH,
        MILES,
        TAG_AXLE,
        TRANSMISSION,
        WIDTH,
    ]

    expect(actual).toStrictEqual(expectedAttributes)
})

test('attributes for planting', () => {
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.PLANTING)
    const expectedAttributes = [
        ...DEFAULT_ATTRIBUTES,
        ACRES,
        CENTER_BULK_FILL,
        HOURS,
        NUMBER_OF_ROWS,
        ROW_CLEANERS,
        ROW_SPACING,
        WIDTH,
    ]

    expect(actual).toStrictEqual(expectedAttributes)
})

test('attributes for tillage', () => {
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.TILLAGE)
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
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.TRACTORS)
    const expectedAttributes = [
        ...DEFAULT_ATTRIBUTES,
        BELLY_MOWER,
        CAB,
        DRIVE,
        FRONT_DUALS,
        HOURS,
        HORSEPOWER,
        LOADER,
        REAR_DUALS,
        REAR_PTO,
        THREE_POINT_HITCH,
    ]

    expect(actual).toStrictEqual(expectedAttributes)
})
