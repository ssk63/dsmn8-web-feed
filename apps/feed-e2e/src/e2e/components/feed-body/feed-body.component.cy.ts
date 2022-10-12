describe('feed', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=feedbodycomponent--feed-content'
    )
  );
  it('should render the component', () => {
    cy.get('dsmn8-feed-body').should('exist');
  });
});
