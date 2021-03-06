# @tractorzoom/equipment-attributes

Source of truth for equipment attributes by category

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest) [![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[![Publish Status](https://github.com/TractorZoom/equipment-attributes/workflows/publish/badge.svg)](https://github.com/TractorZoom/equipment-attributes/actions) [![PR Verify Status](https://github.com/TractorZoom/equipment-attributes/workflows/pull_request/badge.svg)](https://github.com/TractorZoom/equipment-attributes/actions)

## Install

```
npm i --save @tractorzoom/equipment-attributes
```

## Usage

#### `COMMON_ATTRIBUTES`

Array list of common [attribute objects](#attribute) across all equipment types. [See more](src/attributes-by-category.js)

#### `CATEGORIES`

Object with values for each equipment category and corresponding subcategories. [See more](src/categories.js)

#### `IDENTIFYING_ATTRIBUTES`

Array list of identifying [attribute objects](#attribute) common across all equipment types. [See more](src/attributes-by-category.js)

#### `LOCATION_ATTRIBUTES`

Array list of location [attribute objects](#attribute) common across all equipment types. [See more](src/attributes-by-category.js)

#### `VALUE_ATTRIBUTES`

Array list of value [attribute objects](#attribute) common across all equipment types. [See more](src/attributes-by-category.js)

#### `getAttributesForCategory`

Function to get all equipment attributes for a given category. Returns an array list of [attribute objects](#attribute).

```
import {CATEGORIES, getAttributesForCategory} from '@tractorzoom/equipment-attributes'

const attributesForCategory = getAttributesForCategory(CATEGORIES.HARVESTING)
```

### Attribute

| property    | required                 | description                                                                                 |
| ----------- | ------------------------ | ------------------------------------------------------------------------------------------- |
| input       | no                       | boolean that identifies attribute should be a input element                                 |
| inputType   | yes when `input` is true | string that describes html type for input                                                   |
| name        | yes                      | name of attribute, camel casing                                                             |
| options     | no                       | array of options for select attributes, if empty, options should be populated from database |
| select      | no                       | boolean that identifies attribute should be a select element                                |
| switch      | no                       | boolean that identifies attribute should be a switch element                                |
| unitOptions | no                       | array of unit string options for attribute                                                  |

## Contributing

Install node modules using node `10.x`

```
npm ci
```

### Testing

```
npm run test
```

More info on our standards related to [JavaScript Testing](https://github.com/TractorZoom/Day1/blob/master/developer/languages/javascript.md#testing) can be found in our [Day 1 repo](https://github.com/TractorZoom/Day1)

### Committing

Info on our standards related to [commits](https://github.com/TractorZoom/Day1/blob/master/developer/languages/javascript.md#committing) can be found in our [Day 1 repo](https://github.com/TractorZoom/Day1)
