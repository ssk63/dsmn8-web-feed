describe('feed', () => {
  it('should render the component', () => {
    cy.visit('/iframe.html?id=pages-feed-feedfootercomponent--metrics&args=metrics;');
    cy.get('dsmn8-feed-footer').should('exist');
  });

  it('should render the views-count', () => {
    cy.visit(
      '/iframe.html?id=pages-feed-feedfootercomponent--metrics&args=metrics.totalReach:11382;metrics.shares:;metrics.likes:;'
    );
    cy.get('.views-count').contains('Audience size: 11382');
  });

  it('should render the likes count', () => {
    cy.visit(
      '/iframe.html?id=pages-feed-feedfootercomponent--metrics&args=metrics.likes:59;metrics.totalReach:;metrics.shares:;'
    );
    cy.get('.feed-footer__details-likes').contains('59 likes');
  });

  it('should render the shares count', () => {
    cy.visit(
      '/iframe.html?id=pages-feed-feedfootercomponent--metrics&args=metrics.shares:100;metrics.likes:;metrics.totalReach:;'
    );
    cy.get('.feed-footer__details-reshares').contains('100 reshares');
  });
});
