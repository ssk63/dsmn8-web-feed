describe('feed', () => {
  it('should render the component', () => {
    cy.visit('/iframe.html?id=feedheadercomponent--header-text&args=text;');
    cy.get('dsmn8-feed-header').should('exist');
  });

  it('should render the header', () => {
    cy.get('.feed-header__details > h1').contains(
      `Help promote DSMN8's post on Linkedin`
    );
  });

  it('should render the text', () => {
    cy.visit(
      '/iframe.html?id=feedheadercomponent--header-text&args=text:By+liking+and+re-sharing+this+post+,+you+can+help+boost+the+organic+reach+of+the+content;'
    );
    cy.get('.feed-header > p').contains(
      `By liking and re-sharing this post, you can help boost the organic reach of the content`
    );
  });
});
