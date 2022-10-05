describe('feed', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=feedpostcontainercomponent--primary')
  );
  it('should render the component', () => {
    cy.get('dsmn8-feed-post-container').should('exist');
  });
});
