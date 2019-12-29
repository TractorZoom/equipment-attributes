import {EQUIPMENT_TYPES} from './equipment-types'

const DEFAULT_ATTRIBUTES = ['category', 'description', 'make', 'model', 'price', 'year']

const ATTRIBUTES_BY_CATEGORY = {
    [EQUIPMENT_TYPES.AG_TRAILERS]: ['subcategory', 'length', 'serial', 'condition'],
    [EQUIPMENT_TYPES.CHEMICAL_APPLICATORS]: [
        'subcategory',
        'hours',
        'numberOfShanks',
        'width',
        'capacity',
        'serial',
        'drive',
        'condition',
    ],
    [EQUIPMENT_TYPES.HARVESTING]: [
        'subcategory',
        'hours',
        'separatorHours',
        'width',
        'numberOfRows',
        'rowSpacing',
        'serial',
        'drive',
        'condition',
    ],
    [EQUIPMENT_TYPES.HAY_AND_FORAGE]: ['subcategory', 'width', 'hours', 'serial', 'condition'],
    [EQUIPMENT_TYPES.MANURE_HANDLING]: [
        'subcategory',
        'hours',
        'numberOfShanks',
        'width',
        'capacity',
        'serial',
        'drive',
        'condition',
    ],
    [EQUIPMENT_TYPES.OTHER_EQUIPMENT]: ['subcategory'],
    [EQUIPMENT_TYPES.PLANTING]: [
        'subcategory',
        'numberOfRows',
        'rowSpacing',
        'width',
        'hours',
        'acres',
        'serial',
        'condition',
    ],
    [EQUIPMENT_TYPES.TILLAGE]: [
        'subcategory',
        'width',
        'numberOfBottoms',
        'numberOfRows',
        'numberOfShanks',
        'rowSpacing',
        'serial',
        'condition',
    ],
    [EQUIPMENT_TYPES.TRACTORS]: ['hours', 'serial', 'drive', 'rearPTO', 'condition'],
}

export const getAttributesForCategory = categoryName => {
    return [...DEFAULT_ATTRIBUTES, ...ATTRIBUTES_BY_CATEGORY[categoryName]]
}
