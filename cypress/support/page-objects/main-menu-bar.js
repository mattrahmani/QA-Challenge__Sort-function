export class mainMenuBar {

    hoverOver(menuItem) {
        cy.contains('a', menuItem).trigger('mouseover', { force: true });
        cy.get('#menu-1-2a947cd .menu-item-11332').find('.elementor-nav-menu--dropdown').parent()
            .invoke('removeAttr', 'display');
            // .invoke('show').should('be.visible');
    }
}

export const onMainMenuBar = new mainMenuBar();