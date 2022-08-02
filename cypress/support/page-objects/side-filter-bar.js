import { clickButton } from "../commands";

export class sideFilterBar {

    selectSortBy(checkbox) {
        cy.get('div.elementor-widget-sidebar').contains('span', checkbox).then(chkbx => {
            cy.wrap(chkbx).click({ force: true });
            cy.wrap(chkbx).parents('label').invoke('attr', 'class').should('contain', 'active');
        })
        cy.task('log', `----->>> The ${checkbox} checkbox selected successfully <<<-----`)
    }

    clickGoButton() {
        clickButton('GO!');
        cy.contains('span', 'Clear filters').parents().invoke('removeAttr', 'display').should('be.visible');
        cy.task('log', `----->>> The selected filters applied successfully <<<-----`)
    }
}

export const onSideFilterBar = new sideFilterBar();