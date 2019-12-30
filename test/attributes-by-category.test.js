import {
    ACRES,
    CAPACITY,
    CATEGORY,
    CONDITION,
    DESCRIPTION,
    DRIVE,
    HOURS,
    LENGTH,
    MAKE,
    MODEL,
    NUMBER_OF_BOTTOMS,
    NUMBER_OF_ROWS,
    NUMBER_OF_SHANKS,
    PRICE,
    REAR_PTO,
    ROW_SPACING,
    SEPARATOR_HOURS,
    SERIAL,
    SUBCATEGORY,
    WIDTH,
    YEAR,
} from '../src/attributes'
import {getAttributesForCategory} from '../src/attributes-by-category'
import {EQUIPMENT_TYPES} from '../src/equipment-types'

const DEFAULT_ATTRIBUTES = [YEAR, MAKE, MODEL, CATEGORY, SUBCATEGORY, PRICE, CONDITION, DESCRIPTION, SERIAL]

test('attributes for ag trailers', () => {
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.AG_TRAILERS)
    const expectedAttributes = [...DEFAULT_ATTRIBUTES, 'length']

    expect(actual).toStrictEqual(expectedAttributes)
})

test('attributes for chemical applicators', () => {
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.CHEMICAL_APPLICATORS)
    const expectedAttributes = [...DEFAULT_ATTRIBUTES, 'hours', 'numberOfShanks', 'width', 'capacity', 'drive']

    expect(actual).toStrictEqual(expectedAttributes)
})

test('attributes for harvesting', () => {
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.HARVESTING)
    const expectedAttributes = [
        ...DEFAULT_ATTRIBUTES,
        'hours',
        'separatorHours',
        'width',
        'numberOfRows',
        'rowSpacing',
        'drive',
    ]

    expect(actual).toStrictEqual(expectedAttributes)
})

test('attributes for hay and forage', () => {
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.HAY_AND_FORAGE)
    const expectedAttributes = [...DEFAULT_ATTRIBUTES, 'width', 'hours']

    expect(actual).toStrictEqual(expectedAttributes)
})

test('attributes for manure handling', () => {
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.MANURE_HANDLING)
    const expectedAttributes = [...DEFAULT_ATTRIBUTES, 'hours', 'numberOfShanks', 'width', 'capacity', 'drive']

    expect(actual).toStrictEqual(expectedAttributes)
})

test('attributes for other equipment', () => {
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.OTHER_EQUIPMENT)
    const expectedAttributes = [...DEFAULT_ATTRIBUTES]

    expect(actual).toStrictEqual(expectedAttributes)
})

test('attributes for planting', () => {
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.PLANTING)
    const expectedAttributes = [...DEFAULT_ATTRIBUTES, 'numberOfRows', 'rowSpacing', 'width', 'hours', 'acres']

    expect(actual).toStrictEqual(expectedAttributes)
})

test('attributes for tillage', () => {
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.TILLAGE)
    const expectedAttributes = [
        ...DEFAULT_ATTRIBUTES,
        'width',
        'numberOfBottoms',
        'numberOfRows',
        'numberOfShanks',
        'rowSpacing',
    ]

    expect(actual).toStrictEqual(expectedAttributes)
})

test('attributes for tractors', () => {
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.TRACTORS)
    const expectedAttributes = [...DEFAULT_ATTRIBUTES, 'hours', 'drive', 'rearPTO']

    expect(actual).toStrictEqual(expectedAttributes)
})
