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
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.AG_TRAILERS.name)
    const expectedAttributes = [...DEFAULT_ATTRIBUTES, LENGTH]

    expect(actual).toStrictEqual(expectedAttributes)
})

test('attributes for chemical applicators', () => {
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.CHEMICAL_APPLICATORS.name)
    const expectedAttributes = [
        ...DEFAULT_ATTRIBUTES,
        CAPACITY,
        DRIVE,
        EMISSIONS,
        HOURS,
        HORSEPOWER,
        NUMBER_OF_SHANKS,
        WIDTH,
    ]

    expect(actual).toStrictEqual(expectedAttributes)
})

test('attributes for harvesting', () => {
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.HARVESTING.name)
    const expectedAttributes = [
        ...DEFAULT_ATTRIBUTES,
        CHOPPER,
        DRIVE,
        EMISSIONS,
        FRONT_TIRES,
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
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.HAY_AND_FORAGE.name)
    const expectedAttributes = [...DEFAULT_ATTRIBUTES, HOURS, NUMBER_OF_BALES, WIDTH]

    expect(actual).toStrictEqual(expectedAttributes)
})

test('attributes for manure handling', () => {
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.MANURE_HANDLING.name)
    const expectedAttributes = [...DEFAULT_ATTRIBUTES, CAPACITY, DRIVE, HOURS, HORSEPOWER, NUMBER_OF_SHANKS, WIDTH]

    expect(actual).toStrictEqual(expectedAttributes)
})

test('attributes for other equipment', () => {
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.OTHER_EQUIPMENT.name)
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
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.PLANTING.name)
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
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.TILLAGE.name)
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
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.TRACTORS.name)
    const expectedAttributes = [
        ...DEFAULT_ATTRIBUTES,
        BELLY_MOWER,
        CAB,
        DRIVE,
        EMISSIONS,
        FRONT_TIRES,
        HOURS,
        HORSEPOWER,
        LOADER,
        REAR_PTO,
        REAR_TIRES,
        THREE_POINT_HITCH,
    ]

    expect(actual).toStrictEqual(expectedAttributes)
})
