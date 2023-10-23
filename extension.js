module.exports = {
    name: 'CourseCatalog',
    publisher: 'UIW',
    cards: [{
        type: 'CourseCatalogCard',
        source: './src/cards/CourseCatalogCard',
        title: 'CourseCatalog Card',
        displayCardType: 'CourseCatalog Card',
        description: 'This card provides access to the UIW Course Catalog',
        pageRoute: {
            route: '/',
            excludeClickSelectors: ['a']
        }
    }],
    page: {
        source: './src/page/router.jsx'
    }
};