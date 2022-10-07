describe('feed', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=feedbodycomponent--primary&args=name;content;imgUrl;'
    )
  );
  it('should render the component', () => {
    cy.get('dsmn8-feed-body').should('exist');
  });
});
