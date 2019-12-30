const equipmentTypes = require('./equipment-types')
const attributesByCategory = require('./attributes-by-category')

module.exports = {
    COMMON_ATTRIBUTES: attributesByCategory.COMMON_ATTRIBUTES,
    EQUIPMENT_TYPES: equipmentTypes.EQUIPMENT_TYPES,
    IDENTIFYING_ATTRIBUTES: attributesByCategory.IDENTIFYING_ATTRIBUTES,
    VALUE_ATTRIBUTES: attributesByCategory.VALUE_ATTRIBUTES,
    getAttributesForCategory: attributesByCategory.getAttributesForCategory,
}
