const attributesByCategory = require('./attributes-by-category');
const categories = require('./categories');
const format = require('./utilities/format');
const location = require('./utilities/location');
const units = require('./units');
const variableDetail = require('./variable-detail');

module.exports = {
    COMMON_ATTRIBUTES: attributesByCategory.COMMON_ATTRIBUTES,
    CATEGORIES: categories.CATEGORIES,
    IDENTIFYING_ATTRIBUTES: attributesByCategory.IDENTIFYING_ATTRIBUTES,
    LOCATION_ATTRIBUTES: attributesByCategory.LOCATION_ATTRIBUTES,
    UNITS: units,
    VALUE_ATTRIBUTES: attributesByCategory.VALUE_ATTRIBUTES,
    formatNumberWithThousandSeparator: format.formatNumberWithThousandSeparator,
    getAttributesForCategory: attributesByCategory.getAttributesForCategory,
    getClearableAttributesForCategory: attributesByCategory.getClearableAttributesForCategory,
    getLocation: location.getLocation,
    getSubcategoriesForCategory: categories.getSubcategoriesForCategory,
    getVariableDetail: variableDetail.getVariableDetail,
};
