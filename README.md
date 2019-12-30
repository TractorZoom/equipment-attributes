# @tractorzoom/equipment-attributes

Source of truth for equipment attributes by category

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest) [![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)

[![Publish Status](https://github.com/TractorZoom/equipment-attributes/workflows/publish/badge.svg)](https://github.com/TractorZoom/equipment-attributes/actions) [![PR Verify Status](https://github.com/TractorZoom/equipment-attributes/workflows/pull_request_verify/badge.svg)](https://github.com/TractorZoom/equipment-attributes/actions)

## Install

To download make sure the Tractor Zoom GitHub org has been added to your projects `.npmrc` file:

```
registry=https://registry.npmjs.org // if you were currently using npm
@tractorzoom:registry=https://npm.pkg.github.com
```

Then:

```
npm i --save @tractorzoom/equipment-attributes
```

## Usage

#### `COMMON_ATTRIBUTES`

Array list of common attribute strings across all equipment types. [See more](src/attributes-by-category.js)

#### `EQUIPMENT_TYPES`

Object of values for each each equipment category. [See more](src/equipment-types.js)

#### `IDENTIFYING_ATTRIBUTES`

Array list of identifying attribute strings common across all equipment types. [See more](src/attributes-by-category.js)

#### `VALUE_ATTRIBUTES`

Array list of value attribute strings common across all equipment types. [See more](src/attributes-by-category.js)

#### `getAttributesForCategory`

Function to get all equipment attributes for a given category. Returns an array list of attribute strings.

```
import {EQUIPMENT_TYPES, getAttributesForCategory} from '@tractorzoom/equipment-attributes'

const attributesForCategory = getAttributesForCategory(EQUIPMENT_TYPES.HARVESTING)
```

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
