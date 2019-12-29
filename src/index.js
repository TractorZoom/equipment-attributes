const equipmentTypes = require('./equipment-types')

module.exports = {
    COMMON_ATTRIBUTES: equipmentTypes.COMMON_ATTRIBUTES,
    EQUIPMENT_TYPES: equipmentTypes.EQUIPMENT_TYPES,
    getAttributesForCategory: require('./attributes-by-category').getAttributesForCategory,
}
