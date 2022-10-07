describe('feed', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=feedpostactionscomponent--primary')
  );
  it('should render the component', () => {
    cy.get('dsmn8-feed-actions').should('exist');
  });
});
