const AG_TRAILERS = {
    name: 'Ag Trailers',
    subcategories: {
        MATERIAL_HANDLING: 'Material Handling',
        LIVESTOCK_TRAILERS: 'Livestock Trailers',
        HEADER_TRAILERS: 'Header Trailers',
        OTHER: 'Other',
    },
};
const CHEMICAL_APPLICATORS = {
    name: 'Chemical Applicators',
    subcategories: {
        FERTILIZER_APPLICATORS_ANHYDROUS: 'Fertilizer Applicators - Anhydrous',
        FERTILIZER_APPLICATORS_DRY: 'Fertilizer Applicators - Dry',
        FERTILIZER_APPLICATORS_LIQUID: 'Fertilizer Applicators - Liquid',
        FLOATERS: 'Floaters',
        NH3_ANHYDROUS_TANKS: 'NH3/Anhydrous Tanks',
        SPRAYERS_PULL_TYPE: 'Sprayers - Pull Type',
        SPRAYERS_SELF_PROPELLED: 'Sprayers - Self Propelled',
        SPRAYERS_3PT_MOUNTED: 'Sprayers - 3pt Mounted',
        TOOLBARS: 'Toolbars',
        OTHER: 'Other',
    },
};
const HARVESTING = {
    name: 'Harvesting',
    subcategories: {
        COMBINES: 'Combines',
        COTTON_PICKERS_STRIPPERS: 'Cotton Pickers/Strippers',
        FORAGE_HARVESTORS_PULL_TYPE: 'Forage Harvestors - Pull Type',
        FORAGE_HARVESTORS_SELF_PROPELLED: 'Forage Harvestors - Self Propelled',
        FORAGE_WAGONS: 'Forage Wagons',
        GRAIN_AUGERS_CONVEYORS: 'Grain Augers/Conveyors',
        GRAIN_BAGGERS: 'Grain Baggers',
        GRAIN_CARTS: 'Grain Carts',
        GRAIN_VACUUMS: 'Grain Vacuums',
        GRAVITY_WAGONS: 'Gravity Wagons',
        HEADERS_FORAGE: 'Headers - Forage',
        HEADERS_PLATFORM: 'Headers - Platform',
        HEADERS_ROW_CROP: 'Headers - Row Crop',
        OTHER: 'Other',
    },
};
const HAY_AND_FORAGE = {
    name: 'Hay and Forage',
    subcategories: {
        BALE_ACCUMULATORS_MOVERS: 'Bale Accumulators/Movers',
        BALE_PROCESSORS: 'Bale Processors',
        BALERS_ROUND: 'Balers - Round',
        BALERS_SQUARE: 'Balers - Square',
        GRINDERS_MIXERS: 'Grinders/Mixers',
        HAY_MERGERS: 'Hay - Mergers',
        HAY_RAKES_TEDDERS: 'Hay - Rakes/Tedders',
        MOWERS_BATWING: 'Mowers - Batwing',
        MOWERS_CONDITIONER: 'Mowers - Conditioner',
        MOWERS_DISK: 'Mowers - Disk',
        MOWERS_FLAIL_STALK_CHOPPERS: 'Mowers - Flail/Stalk Choppers',
        MOWERS_ROTARY: 'Mowers - Rotary',
        WINDROWERS: 'Windrowers',
        OTHER: 'Other',
    },
};
const MANURE_HANDLING = {
    name: 'Manure Handling',
    subcategories: {
        MANURE_SPREADERS_DRY: 'Manure Spreaders - Dry',
        MANURE_SPREADERS_LIQUID: 'Manure Spreaders - Liquid',
        MANURE_SYSTEMS: 'Manure Systems',
        POULTRY_LITTER_EQUIPMENT: 'Poultry Litter Equipment',
        OTHER: 'Other',
    },
};
const OTHER_EQUIPMENT = {
    name: 'Other Equipment',
    subcategories: {
        THREE_POINT_ATTACHMENTS: '3 Point Attachments',
        CONSTRUCTION_EQUIPMENT: 'Construction Equipment',
        DOZERS: 'Dozers',
        FUEL_TRAILERS: 'Fuel Trailers',
        GPS_EQUIPMENT: 'GPS Equipment',
        GENERATORS: 'Generators',
        IRRIGATION: 'Irrigation',
        LIFTS: 'Lifts',
        LOADERS: 'Loaders',
        LIQUID_TANKS: 'Liquid Tanks',
        OUTDOOR_POWER: 'Outdoor Power',
        SKID_STEER_ATTACHMENTS: 'Skid Steer Attachments',
        SKID_STEERS: 'Skid Steers',
        TRAILERS: 'Trailers',
        TRUCKS: 'Trucks',
        TURF: 'Turf',
        VEHICLES: 'Vehicles',
        OTHER: 'Other',
    },
};
const PLANTING = {
    name: 'Planting',
    subcategories: {
        AIR_SEEDERS_OR_CARTS: 'Air Seeders or Carts',
        GRAIN_DRILLS: 'Grain Drills',
        PLANTERS: 'Planters',
        SEEDERS: 'Seeders',
        SEED_TENDERS: 'Seed Tenders',
        OTHER: 'Other',
    },
};
const TILLAGE = {
    name: 'Tillage',
    subcategories: {
        CHISEL_PLOWS: 'Chisel Plows',
        DISK_RIPPERS: 'Disk Rippers',
        DISKS: 'Disks',
        FIELD_CULTIVATORS: 'Field Cultivators',
        LAND_ROLLERS: 'Land Rollers',
        MULCH_FINISHERS: 'Mulch Finishers',
        PLOWS: 'Plows',
        RIPPERS: 'Rippers',
        ROTARY_TILLAGE: 'Rotary Tillage',
        ROW_CROP_CULTIVATORS: 'Row Crop Cultivators',
        STRIP_TILL_BARS: 'Strip-Till Bars',
        VERTICAL_TILLAGE: 'Vertical Tillage',
        OTHER: 'Other',
    },
};
const TRACTORS = {
    name: 'Tractors',
    subcategories: {
        LESS_THAN_40: 'Less than 40 HP',
        '40_TO_99': '40 to 99 HP',
        '100_TO_174': '100 to 174 HP',
        '175_TO_299': '175 to 299 HP',
        '300_PLUS': '300 or more HP',
    },
};

export const CATEGORIES = {
    AG_TRAILERS,
    CHEMICAL_APPLICATORS,
    HARVESTING,
    HAY_AND_FORAGE,
    MANURE_HANDLING,
    OTHER_EQUIPMENT,
    PLANTING,
    TILLAGE,
    TRACTORS,
};

export const CATEGORY_LIST = Object.values(CATEGORIES);

export const getSubcategoriesForCategory = (categoryName) => {
    const categoryKey = Object.keys(CATEGORIES).find((key) => CATEGORIES[key].name === categoryName);

    return Object.keys(CATEGORIES[categoryKey].subcategories).map(
        (subcategory) => CATEGORIES[categoryKey].subcategories[subcategory]
    );
};
