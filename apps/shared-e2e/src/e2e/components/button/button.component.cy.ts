describe('shared', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=components-buttoncomponent--primary&args=label;ariaLabel;isPrimary;isDisabled;isFullWidth:false;'
    )
  );
  it('should render the component', () => {
    cy.get('dsmn8-button').should('exist');
  });
});
