const equipmentTypes = require('./equipment-types')
const attributesByCategory = require('./attributes-by-category')

module.exports = {
    COMMON_ATTRIBUTES: attributesByCategory.COMMON_ATTRIBUTES,
    EQUIPMENT_TYPES: equipmentTypes.EQUIPMENT_TYPES,
    getAttributesForCategory: attributesByCategory.getAttributesForCategory,
}
