describe('feed', () => {
  beforeEach(() => cy.visit('/iframe.html?id=feedcontainercomponent--primary'));

  it('should render the component', () => {
    cy.get('dsmn8-feed-container').should('exist');
  });
});
