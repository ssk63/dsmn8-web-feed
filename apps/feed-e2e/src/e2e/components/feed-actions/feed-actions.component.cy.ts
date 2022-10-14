describe('feed', () => {
  it('should render the component', () => {
    cy.visit('/iframe.html?id=pages-feed-feedactionscomponent--feed-actions');
    cy.get('dsmn8-feed-actions').should('exist');
  });

  it('should render the likes button when the likesButtonLabel is exists', () => {
    cy.visit(
      '/iframe.html?id=pages-feed-feedactionscomponent--feed-actions&args=likesButtonLabel:Like+on+LinkedIn;reshareButtonLabel:;isLiked:false'
    );
    cy.get('.feed-actions__likes-btn').should('exist');
  });

  it('should render the disabled likes button when the isLiked flag is true', () => {
    cy.visit(
      '/iframe.html?id=pages-feed-feedactionscomponent--feed-actions&args=likesButtonLabel:Like+on+LinkedIn;reshareButtonLabel:;isLiked:true'
    );
    cy.get('.feed-actions__likes-btn .dsmn8-btn').should('be.disabled');
  });

  it('should render the reshare button when the reshareButtonLabel is exists', () => {
    cy.visit(
      '/iframe.html?id=pages-feed-feedactionscomponent--feed-actions&args=reshareButtonLabel:Reshare+on+LinkedIn;likesButtonLabel:;'
    );
    cy.get('.feed-actions__reshare-btn').should('exist');
  });
});
