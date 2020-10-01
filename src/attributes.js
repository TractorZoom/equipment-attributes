const categories = require('./categories');
const units = require('./units');

/* 
    Input of number of acres worked
*/
export const ACRES = {
    input: true,
    inputType: 'number',
    name: 'acres',
};

/*
    Switch if equipment has belly mower
*/
export const BELLY_MOWER = {
    name: 'bellyMower',
    switch: true,
};

/*
    Select of cab types
    Options: Standard, Deluxe, Buddy Seat
*/
export const CAB = {
    name: 'cab',
    options: [
        {
            name: 'Standard',
            value: 0,
        },
        {
            name: 'Premium',
            value: 1,
        },
    ],
    select: true,
};

/*
    Input of capacity of equipment
*/
export const CAPACITY = {
    input: true,
    inputType: 'number',
    name: 'capacity',
    unitOptions: [units.GALLONS, units.TONS],
};

/*
    Select of equipment categories
    Options: Ag Trailers, Chemical Applicators, Harvesting, Hay and Forage, Manure Handling, Other Equipment, Planting, Tillage, Tractors
*/
export const CATEGORY = {
    name: 'category',
    options: categories.CATEGORY_LIST,
    select: true,
};

/*
    Switch if equipment is center bulk fill
*/
export const CENTER_BULK_FILL = {
    name: 'centerBulkFill',
    switch: true,
};

/*
    Input of city
*/
export const CITY = {
    input: true,
    inputType: 'string',
    name: 'city',
};

/*
    Switch if equipment has chopper
*/
export const CHOPPER = {
    name: 'chopper',
    switch: true,
};

/*
    Select of equipment condition
    Options: New, Used
*/
export const CONDITION = {
    name: 'condition',
    default: 'Used',
    options: [
        {
            name: 'New',
            value: 0,
        },
        {
            name: 'Used',
            value: 1,
        },
    ],
    select: true,
};

/*
    Input of auctioneer description
*/
export const DESCRIPTION = {
    input: true,
    inputType: 'string',
    name: 'description',
};

/*
    Select of equipment drive
    Options: 
*/
export const DRIVE = {
    name: 'drive',
    options: [
        {
            name: '2WD',
            value: 1,
        },
        {
            name: 'MFWD',
            value: 2,
        },
        {
            name: '4WD',
            value: 3,
        },
        {
            name: 'Tracks',
            value: 4,
        },
        {
            name: 'RWA',
            value: 5,
        },
        {
            name: 'PRWD',
            value: 6,
        },
    ],
    select: true,
};

/*
    Select of emission types
    Options: DEF, DPF, EGR, No Emissions
*/
export const EMISSIONS = {
    name: 'emissions',
    options: [
        {
            name: 'DEF',
            value: 0,
        },
        {
            name: 'DPF',
            value: 1,
        },
        {
            name: 'EGR',
            value: 2,
        },
        {
            name: 'No Emissions',
            value: 3,
        },
    ],
    select: true,
};

/*
    Select of equipment condition types
    Options: Excellent, Good, Average, Fair, Poor
*/
export const EQUIPMENT_CONDITION = {
    name: 'equipmentCondition',
    options: [
        {
            description:
                'The implement has seen little or no use in the field. Engine is in perfect condition with 0 to 600 hrs. of use. Tires have90 to 100% tread remaining, and no breaks or cracks. The paint is original and bright in appearance. The parts have little or no wear. Wellcared for.',
            name: 'Excellent',
            value: 0,
        },
        {
            description:
                'Engine is in good running condition. Tires have about 80% of the tread remaining. The paint is original or has a goodrepaint job. The implement is utilized as if it were in excellent condition and only requires routine maintenance to maintain its runningcondition.',
            name: 'Good',
            value: 1,
        },
        {
            description:
                'Engine will require some minor maintenance in order to extend its life in the foreseeable future. The generalappearance of the implement is showing wear but it can still be utilized for the use for which it was originally built. Tires have about 70% oftheir tread.',
            name: 'Average',
            value: 2,
        },
        {
            description:
                'Replacement of parts would enhance performance. Tires have only 60% tread remaining with possibly some scarsvisible. Paint is weathered and shows some signs of rust. Parts are wearing. Functionally the implement is still useful but to a much lesserextent.',
            name: 'Fair',
            value: 3,
        },
        {
            description:
                'Needs major overhaul to restore power or performance. Tires have 50% wear or less tread remaining with scars andcracks. Paint and appearance are rough. Bearings appear to need replacement. Rebuilding is necessary.',
            name: 'Poor',
            value: 4,
        },
    ],
    select: true,
};

/*
    Select of front tire types
    Options: Singles, Duals
*/
export const FRONT_TIRES = {
    name: 'frontTires',
    options: [
        {
            name: 'Singles',
            value: 0,
        },
        {
            name: 'Duals',
            value: 1,
        },
        {
            name: 'Triples',
            value: 2,
        },
    ],
    select: true,
};

/*
    Input of equipment hours
*/
export const HOURS = {
    input: true,
    inputType: 'number',
    name: 'hours',
};

/*
    Input of equipment horsepower
*/
export const HORSEPOWER = {
    input: true,
    inputType: 'number',
    name: 'horsepower',
};

/*
    Input of equipment length
*/
export const LENGTH = {
    input: true,
    inputType: 'number',
    name: 'length',
    unitOptions: [units.FEET, units.INCHES],
};

/*
    Switch if equipment has loader
*/
export const LOADER = {
    name: 'loader',
    switch: true,
};

/*
    Input of lot number for equipment in an auction
*/
export const LOT_NUMBER = {
    input: true,
    inputType: 'string',
    name: 'lotNumber',
};

/*
    Select of makes for equipment
    Options: Dynamic list from database
*/
export const MAKE = {
    name: 'make',
    options: [],
    select: true,
};

/*
    Input of miles driven for equipment
*/
export const MILES = {
    input: true,
    inputType: 'number',
    name: 'miles',
};

/*
    Select of models based on make for equipment
    Options: Dynamic list from database based on make
*/
export const MODEL = {
    name: 'model',
    options: [],
    select: true,
};

/*
    Input of number of bales for equipment
*/
export const NUMBER_OF_BALES = {
    input: true,
    inputType: 'number',
    name: 'numberOfBales',
};

/*
    Input of number of bottoms for equipment
*/
export const NUMBER_OF_BOTTOMS = {
    input: true,
    inputType: 'number',
    name: 'numberOfBottoms',
};

/*
    Input of number of rows for equipment
*/
export const NUMBER_OF_ROWS = {
    input: true,
    inputType: 'number',
    name: 'numberOfRows',
};

/*
    Input of number of shanks for equipment
*/
export const NUMBER_OF_SHANKS = {
    input: true,
    inputType: 'number',
    name: 'numberOfShanks',
};

/*
    Input of price for equipment 
*/
export const PRICE = {
    input: true,
    inputType: 'number',
    name: 'price',
};

/*
    Switch if equipment has powerfold bin
*/
export const POWERFOLD_BIN = {
    name: 'powerfoldBin',
    switch: true,
};

/*
    Select of rear PTO
    Options: Yes, No
*/
export const REAR_PTO = {
    name: 'rearPTO',
    options: [
        {
            name: 'No',
            value: 0,
        },
        {
            name: 'Yes',
            value: 1,
        },
    ],
    select: true,
};

/*
    Select of rear tire types
    Options: Singles, Duals
*/
export const REAR_TIRES = {
    name: 'rearTires',
    options: [
        {
            name: 'Singles',
            value: 0,
        },
        {
            name: 'Duals',
            value: 1,
        },
        {
            name: 'Triples',
            value: 2,
        },
    ],
    select: true,
};

/*
    Switch if equipment has row cleaners
*/
export const ROW_CLEANERS = {
    name: 'rowCleaners',
    switch: true,
};

/*
    Input of row spacing for equipment
*/
export const ROW_SPACING = {
    input: true,
    inputType: 'number',
    name: 'rowSpacing',
};

/*
    Input of separator hours for equipment
*/
export const SEPARATOR_HOURS = {
    input: true,
    inputType: 'number',
    name: 'separatorHours',
};

/*
    Input of serial number for equipment
*/
export const SERIAL = {
    input: true,
    inputType: 'string',
    name: 'serial',
};

/*
    Switch if equipment has spreader
*/
export const SPREADER = {
    name: 'spreader',
    switch: true,
};

/*
    Input of state
*/
export const STATE = {
    input: true,
    inputType: 'string',
    name: 'state',
};

/*
    Select of subcategories based on category for equipment
    Options: Dynamic list from database based on category
*/
export const SUBCATEGORY = {
    name: 'subcategory',
    options: [],
    select: true,
};

/*
    Switch if equipment has tag axle
*/
export const TAG_AXLE = {
    name: 'tagAxle',
    switch: true,
};

/*
    Switch if equipment has three point hitch
*/
export const THREE_POINT_HITCH = {
    name: 'threePointHitch',
    switch: true,
};

/*
    Select of transmission for other equipment category
    Options: Automatic, Manual
*/
export const TRANSMISSION = {
    name: 'transmission',
    options: [
        {
            name: 'Automatic',
            value: 0,
        },
        {
            name: 'Manual',
            value: 1,
        },
    ],
    select: true,
};

/*
    Select of transmission type for tractor category
    Options: Powershift, Hydrostatic, Standard
*/
export const TRANSMISSION_TYPE = {
    name: 'transmissionType',
    options: [
        {
            name: 'Powershift',
            value: 0,
        },
        {
            name: 'Hydrostatic',
            value: 1,
        },
        {
            name: 'Standard',
            value: 2,
        },
    ],
    select: true,
};

/*
    Input of width for equipment
*/
export const WIDTH = {
    input: true,
    inputType: 'number',
    name: 'width',
    unitOptions: [units.FEET, units.INCHES],
};

/*
    Input of year for equipment
*/
export const YEAR = {
    input: true,
    inputType: 'number',
    name: 'year',
};

/*
    Input of zip code
*/
export const ZIP_CODE = {
    input: true,
    inputType: 'number',
    name: 'zipCode',
};
