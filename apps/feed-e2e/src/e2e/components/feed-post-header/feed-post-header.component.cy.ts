describe('feed', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=feedpostheadercomponent--primary&args=text;')
  );
  it('should render the component', () => {
    cy.get('dsmn8-feed-post-header').should('exist');
  });
});
