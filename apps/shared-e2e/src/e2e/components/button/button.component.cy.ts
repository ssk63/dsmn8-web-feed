describe('shared', () => {
  it('should render the component', () => {
    cy.visit(
      '/iframe.html?id=components-buttoncomponent--primary'
    );
    cy.get('dsmn8-button').should('exist');
  });

  it('should render disabled button when the isDisabled flag is true', () => {
    cy.visit(
      '/iframe.html?id=components-buttoncomponent--disabled&args=label:Disabled Button;ariaLabel;isPrimary:false;isDisabled:true;isFullWidth:false;'
    );
    cy.get('.dsmn8-btn').should('be.disabled');
  });

  it('should render full width button when the isFullWidth flag is true', () => {
    cy.visit(
      '/iframe.html?id=components-buttoncomponent--full-width&args=label:Full Width Button;ariaLabel;isPrimary:true;isDisabled:false;isFullWidth:true;'
    );
    cy.get('.dsmn8-btn--block').should('exist');
  });

  it('should render primary button when the isPrimary flag is true', () => {
    cy.visit(
      '/iframe.html?id=components-buttoncomponent--primary&args=label:Primary Button;ariaLabel;isPrimary:true;isDisabled:false;isFullWidth:false;'
    );
    cy.get('.dsmn8-btn--primary').should('exist');
  });
});
