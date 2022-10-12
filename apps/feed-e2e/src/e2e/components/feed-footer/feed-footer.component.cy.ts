describe('feed', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=feedfootercomponent--metrics&args=metrics;')
  );
  it('should render the component', () => {
    cy.get('dsmn8-feed-footer').should('exist');
  });
});
