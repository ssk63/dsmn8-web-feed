describe('feed', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=feedheadercomponent--header-text&args=text;')
  );
  it('should render the component', () => {
    cy.get('dsmn8-feed-header').should('exist');
  });
});
