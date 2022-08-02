export class subMenuBar {

    selectMenuItem(menuItem) {
        cy.contains('a', menuItem).click({ force: true });

        if (menuItem.slice(-1) == 's') {
            menuItem = menuItem.slice(0, menuItem.length - 1);
        }

        cy.url().should('contain', menuItem.toLowerCase().split(' ').join('-'));



        cy.get('head title').should('contain.text', menuItem);
        cy.get('h1').should('contain.text', menuItem);
        cy.task('log', `----->>> ${menuItem} page opened successfully <<<-----`);
    }
}

export const onSubMenuBar = new subMenuBar();