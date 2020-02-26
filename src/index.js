const categories = require('./categories')
const attributesByCategory = require('./attributes-by-category')
const units = require('./units')

module.exports = {
    COMMON_ATTRIBUTES: attributesByCategory.COMMON_ATTRIBUTES,
    CATEGORIES: categories.CATEGORIES,
    IDENTIFYING_ATTRIBUTES: attributesByCategory.IDENTIFYING_ATTRIBUTES,
    LOCATION_ATTRIBUTES: attributesByCategory.LOCATION_ATTRIBUTES,
    UNITS: units,
    VALUE_ATTRIBUTES: attributesByCategory.VALUE_ATTRIBUTES,
    getAttributesForCategory: attributesByCategory.getAttributesForCategory,
    getSubcategoriesForCategory: categories.getSubcategoriesForCategory,
}
