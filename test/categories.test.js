import {CATEGORIES, CATEGORY_LIST, getSubcategoriesForCategory} from '../src/categories'
import Chance from 'chance'

const chance = new Chance()

describe('Equipment Types and Subcategories', () => {
    test('AG_TRAILERS', () => {
        const expectedAgTrailers = {
            name: 'Ag Trailers',
            subcategories: {
                MATERIAL_HANDLING: 'Material Handling',
                LIVESTOCK_TRAILERS: 'Livestock Trailers',
                HEADER_TRAILERS: 'Header Trailers',
                OTHER: 'Other',
            },
        }

        expect(CATEGORIES.AG_TRAILERS).toStrictEqual(expectedAgTrailers)
    })

    test('CHEMICAL_APPLICATORS', () => {
        const expectedChemicalApplicators = {
            name: 'Chemical Applicators',
            subcategories: {
                FERTILIZER_APPLICATORS_ANHYDROUS: 'Fertilizer Applicators - Anhydrous',
                FERTILIZER_APPLICATORS_DRY: 'Fertilizer Applicators - Dry',
                FERTILIZER_APPLICATORS_LIQUID: 'Fertilizer Applicators - Liquid',
                FLOATERS: 'Floaters',
                SPRAYERS_PULL_TYPE: 'Sprayers - Pull Type',
                SPRAYERS_SELF_PROPELLED: 'Sprayers - Self Propelled',
                SPRAYERS_3PT_MOUNTED: 'Sprayers - 3pt Mounted',
                TOOLBARS: 'Toolbars',
                OTHER: 'Other',
            },
        }

        expect(CATEGORIES.CHEMICAL_APPLICATORS).toStrictEqual(expectedChemicalApplicators)
    })

    test('HARVESTING', () => {
        const expectedHarvesting = {
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
        }

        expect(CATEGORIES.HARVESTING).toStrictEqual(expectedHarvesting)
    })

    test('HAY_AND_FORAGE', () => {
        const expectedHayAndForage = {
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
        }

        expect(CATEGORIES.HAY_AND_FORAGE).toStrictEqual(expectedHayAndForage)
    })

    test('MANURE_HANDLING', () => {
        const expectedManureHandling = {
            name: 'Manure Handling',
            subcategories: {
                MANURE_SPREADERS_DRY: 'Manure Spreaders - Dry',
                MANURE_SPREADERS_LIQUID: 'Manure Spreaders - Liquid',
                MANURE_SYSTEMS: 'Manure Systems',
                POULTRY_LITTER_EQUIPMENT: 'Poultry Litter Equipment',
                OTHER: 'Other',
            },
        }

        expect(CATEGORIES.MANURE_HANDLING).toStrictEqual(expectedManureHandling)
    })

    test('OTHER_EQUIPMENT', () => {
        const expectedOtherEquipment = {
            name: 'Other Equipment',
            subcategories: {
                THREE_POINT_ATTACHMENTS: '3 Point Attachments',
                CONSTRUCTION_EQUIPMENT: 'Construction Equipment',
                DOZERS: 'Dozers',
                FUEL_TRAILERS: 'Fuel Trailers',
                GPS_EQUIPMENT: 'GPS Equipment',
                GENERATORS: 'Generators',
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
        }

        expect(CATEGORIES.OTHER_EQUIPMENT).toStrictEqual(expectedOtherEquipment)
    })

    test('PLANTING', () => {
        const expectedPlanting = {
            name: 'Planting',
            subcategories: {
                AIR_SEEDERS_OR_CARTS: 'Air Seeders or Carts',
                GRAIN_DRILLS: 'Grain Drills',
                PLANTERS: 'Planters',
                SEED_TENDERS: 'Seed Tenders',
                OTHER: 'Other',
            },
        }

        expect(CATEGORIES.PLANTING).toStrictEqual(expectedPlanting)
    })

    test('TILLAGE', () => {
        const expectedTillage = {
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
        }

        expect(CATEGORIES.TILLAGE).toStrictEqual(expectedTillage)
    })

    test('TRACTORS', () => {
        const expectedTractors = {
            name: 'Tractors',
            subcategories: {
                FULL_SIZE: 'Full-Size',
                UTILITY: 'Utility',
            },
        }

        expect(CATEGORIES.TRACTORS).toStrictEqual(expectedTractors)
    })

    test('should have list of category names', () => {
        const expectedCategoryList = Object.keys(CATEGORIES).map(category => CATEGORIES[category].name)

        expect(CATEGORY_LIST).toStrictEqual(expectedCategoryList)
    })

    test('should have a list of subcategories for category', () => {
        const expectedCategory = chance.pickone(Object.keys(CATEGORIES))
        const expectedCategoryName = CATEGORIES[expectedCategory].name
        const expectedSubcategories = Object.keys(CATEGORIES[expectedCategory].subcategories).map(
            subcategory => CATEGORIES[expectedCategory].subcategories[subcategory]
        )
        const actual = getSubcategoriesForCategory(expectedCategoryName)

        expect(actual).toStrictEqual(expectedSubcategories)
    })
})
