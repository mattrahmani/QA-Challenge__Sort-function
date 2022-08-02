import { getPriceList } from "../commands";

export class productsPage {

    verifyItemsAreSortedCorrectly() {
        const priceList = getPriceList();
        cy.then(() => {
            const sorted = Cypress._.sortBy(priceList);
            cy.log(sorted)
            cy.log(priceList)
            expect(sorted, 'Sorted price').to.deep.equal(priceList);
            cy.task('log', `----->>> All items are sorted properly <<<-----`)
        })
    }
}

export const onProductsPage = new productsPage();