//#region 
const { onMainMenuBar } = require("../support/page-objects/main-menu-bar");
const { onSideFilterBar } = require("../support/page-objects/side-filter-bar");
const { onProductsPage } = require("../support/page-objects/products-page");
const { onSubMenuBar } = require("../support/page-objects/sub-menus");
//#endregion

describe('Should verify sorting functionality', () => {
    
    it('Should sort items by price: low to high', () => {
        onMainMenuBar.hoverOver('Shop');
        onSubMenuBar.selectMenuItem('Spirits');
        onSideFilterBar.selectSortBy('Price: low to high');
        onSideFilterBar.clickGoButton();
        onProductsPage.verifyItemsAreSortedCorrectly();
    })

    it('Should sort items by price: high to low', () => {
        onMainMenuBar.hoverOver('Shop');
        onSubMenuBar.selectMenuItem('Craft Beers');
        onSideFilterBar.selectSortBy('Price: high to low');
        onSideFilterBar.clickGoButton();
        onProductsPage.verifyItemsAreSortedCorrectly();
    })

})