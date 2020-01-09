const categories = require('./categories')
const attributesByCategory = require('./attributes-by-category')

module.exports = {
    COMMON_ATTRIBUTES: attributesByCategory.COMMON_ATTRIBUTES,
    CATEGORIES: categories.CATEGORIES,
    IDENTIFYING_ATTRIBUTES: attributesByCategory.IDENTIFYING_ATTRIBUTES,
    LOCATION_ATTRIBUTES: attributesByCategory.LOCATION_ATTRIBUTES,
    VALUE_ATTRIBUTES: attributesByCategory.VALUE_ATTRIBUTES,
    getAttributesForCategory: attributesByCategory.getAttributesForCategory,
}
