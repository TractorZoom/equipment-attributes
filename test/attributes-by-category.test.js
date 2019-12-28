import {getAttributesForCategory} from '../src/attributes-by-category'
import EQUIPMENT_TYPES from '../src/equipment-types'

const DEFAULT_ATTRIBUTES = ['category', 'description', 'make', 'model', 'price', 'year']

test('attributes for ag trailers', () => {
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.AG_TRAILERS)
    const expectedAttributes = [...DEFAULT_ATTRIBUTES, 'subcategory', 'length', 'serial', 'condition']

    expect(actual).toStrictEqual(expectedAttributes)
})

test('attributes for chemical applicators', () => {
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.CHEMICAL_APPLICATORS)
    const expectedAttributes = [
        ...DEFAULT_ATTRIBUTES,
        'subcategory',
        'hours',
        'numberOfShanks',
        'width',
        'capacity',
        'serial',
        'drive',
        'condition',
    ]

    expect(actual).toStrictEqual(expectedAttributes)
})

test('attributes for harvesting', () => {
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.HARVESTING)
    const expectedAttributes = [
        ...DEFAULT_ATTRIBUTES,
        'subcategory',
        'hours',
        'separatorHours',
        'width',
        'numberOfRows',
        'rowSpacing',
        'serial',
        'drive',
        'condition',
    ]

    expect(actual).toStrictEqual(expectedAttributes)
})

test('attributes for hay and forage', () => {
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.HAY_AND_FORAGE)
    const expectedAttributes = [...DEFAULT_ATTRIBUTES, 'subcategory', 'width', 'hours', 'serial', 'condition']

    expect(actual).toStrictEqual(expectedAttributes)
})

test('attributes for manure handling', () => {
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.MANURE_HANDLING)
    const expectedAttributes = [
        ...DEFAULT_ATTRIBUTES,
        'subcategory',
        'hours',
        'numberOfShanks',
        'width',
        'capacity',
        'serial',
        'drive',
        'condition',
    ]

    expect(actual).toStrictEqual(expectedAttributes)
})

test('attributes for other equipment', () => {
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.OTHER_EQUIPMENT)
    const expectedAttributes = [...DEFAULT_ATTRIBUTES, 'subcategory']

    expect(actual).toStrictEqual(expectedAttributes)
})

test('attributes for planting', () => {
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.PLANTING)
    const expectedAttributes = [
        ...DEFAULT_ATTRIBUTES,
        'subcategory',
        'numberOfRows',
        'rowSpacing',
        'width',
        'hours',
        'acres',
        'serial',
        'condition',
    ]

    expect(actual).toStrictEqual(expectedAttributes)
})

test('attributes for tillage', () => {
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.TILLAGE)
    const expectedAttributes = [
        ...DEFAULT_ATTRIBUTES,
        'subcategory',
        'width',
        'numberOfBottoms',
        'numberOfRows',
        'numberOfShanks',
        'rowSpacing',
        'serial',
        'condition',
    ]

    expect(actual).toStrictEqual(expectedAttributes)
})

test('attributes for tractors', () => {
    const actual = getAttributesForCategory(EQUIPMENT_TYPES.TRACTORS)
    const expectedAttributes = [...DEFAULT_ATTRIBUTES, 'hours', 'serial', 'drive', 'rearPTO', 'condition']

    expect(actual).toStrictEqual(expectedAttributes)
})
