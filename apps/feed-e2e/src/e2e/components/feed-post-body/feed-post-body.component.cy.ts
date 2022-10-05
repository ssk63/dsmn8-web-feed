describe('feed', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=feedpostbodycomponent--primary&args=name;content;imgUrl;'
    )
  );
  it('should render the component', () => {
    cy.get('dsmn8-feed-post-body').should('exist');
  });
});
