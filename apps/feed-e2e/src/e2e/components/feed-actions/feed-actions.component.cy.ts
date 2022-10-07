describe('feed', () => {
  beforeEach(() => cy.visit('/iframe.html?id=feedactionscomponent--primary'));

  it('should render the component', () => {
    cy.get('dsmn8-feed-actions').should('exist');
  });
});
