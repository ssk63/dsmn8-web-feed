describe('feed', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=feedpostfootercomponent--primary&args=metrics;')
  );
  it('should render the component', () => {
    cy.get('dsmn8-feed-post-footer').should('exist');
  });
});
