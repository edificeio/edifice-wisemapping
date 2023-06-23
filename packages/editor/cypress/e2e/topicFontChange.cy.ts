/// <reference types="cypress" />
describe('Topic Font Suite', () => {
  beforeEach(() => {
    // Remove storage for autosave ...
    cy.visit('/editor.html');
    cy.waitEditorLoaded();

    cy.focusTopicById(1);
  });

  it('Open Font Shape Panel', () => {
    cy.onMouseOverToolbarButton('Font Style');
    cy.matchImageSnapshot('fontShapePanel');
  });

  it('Change Main Topic Text', () => {
    cy.get('body').type('New Title Main Topic{enter}');
    cy.get('[test-id=1] > text > tspan').should('have.text', 'New Title Main Topic');
    cy.focusTopicByText('Mind Mapping');
    cy.matchImageSnapshot('changeMainTopicText');
  });

  it('Change Font Size', () => {
    // Go to the minimal size.
    cy.onMouseOverToolbarButton('Font Style');

    cy.get('[aria-label="Smaller"]').as('smaller');
    cy.get('@smaller').eq(1).click();
    cy.get('@smaller').eq(1).click();

    cy.get('[test-id=1] > text').invoke('attr', 'font-size').should('eq', '8.1');
    cy.matchImageSnapshot('changeFontSizeSmall');

    cy.get('[aria-label="Bigger"]').as('bigger');
    cy.get('@bigger').eq(1).click();
    cy.matchImageSnapshot('changeFontSizeNormal');

    cy.get('@bigger').eq(1).click();
    cy.get('[test-id=1] > text').invoke('attr', 'font-size').should('eq', '13.4');
    cy.matchImageSnapshot('changeFontSizeLarge');

    cy.get('@bigger').eq(1).click();
    cy.get('[test-id=1] > text').invoke('attr', 'font-size').should('eq', '20.2');
    cy.matchImageSnapshot('changeFontSizeHuge');

    cy.get('@bigger').eq(1).click();
    cy.get('[test-id=1] > text').invoke('attr', 'font-size').should('eq', '20.2');

    cy.matchImageSnapshot('changeFontSizeHuge');
  });

  it('Change Font To Italic', () => {
    cy.onMouseOverToolbarButton('Font Style');
    cy.get('[aria-label^="Italic ').first().click();

    cy.get('[test-id=1] > text').invoke('attr', 'font-style').should('eq', 'italic');

    cy.contains('Mind Mapping').click({ force: true });
    cy.matchImageSnapshot('changeFontItalic');
  });

  it('Change Font to Bold', () => {
    cy.onMouseOverToolbarButton('Font Style');
    cy.get('[aria-label^="Bold ').first().click();

    cy.get('[test-id=1] > text').invoke('attr', 'font-weight').should('eq', 'normal');

    cy.contains('Mind Mapping').click({ force: true });
    cy.matchImageSnapshot('changeFontBold');
  });

  it('Change Font Color', () => {
    cy.onMouseOverToolbarButton('Font Style');
    cy.get('[aria-label="Color"]').eq(1).click();
    cy.get('[title="#cc0000"]').click({ force: true });

    cy.get('[test-id=1] > text').invoke('attr', 'fill').should('eq', '#cc0000');

    cy.focusTopicByText('Mind Mapping');
    cy.matchImageSnapshot('changeFontColor');
  });
});
