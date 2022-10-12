describe('feed', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=feedactionscomponent--feed-actions&args=likesButtonLabel:Like+on+LinkedIn;reshareButtonLabel:Reshare+on+LinkedIn;isLiked:true;'
    )
  );
  it('should render the component', () => {
    cy.get('dsmn8-feed-actions').should('exist');
  });
});
