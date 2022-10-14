import { URLSearchParams } from 'url';

describe('feed', () => {
  it('should render the component', () => {
    cy.visit('/iframe.html?id=pages-feed-feedbodycomponent--feed-content');
    cy.get('dsmn8-feed-body').should('exist');
  });

  it('should render the feed title when the name arg is exist', () => {
    cy.visit(
      '/iframe.html?id=pages-feed-feedbodycomponent--feed-title&args=name:Why+You+SHOULD+Limit+Employee+Advocacy+Podcast;'
    );
    cy.get('.feed-body__header-title').contains(
      `Why You SHOULD Limit Employee Advocacy Podcast`
    );
  });

  it('should render the feed content when the content arg is exist', () => {
    const content = 'BE REALISTIC';
    cy.visit(
      `/iframe.html?id=pages-feed-feedbodycomponent--feed-content&args=content:BE+REALISTIC;`
    );
    cy.get('.feed-body__content').should('have.text', content);
  });

  it('should render the feed image when the imgUrl arg is exist', () => {
    const imgUrl =
      'https://dsmn8.imgix.net/_scraper/13cf5006bf679afa7bee45831d7c974a.jpeg';
    cy.visit(
      `/iframe.html?id=pages-feed-feedbodycomponent--feed-image&args=imgUrl:${imgUrl}`
    );
    cy.get('.feed-body__image > img').should('be.visible');
    cy.get('.feed-body__image > img').should('have.attr', 'src', imgUrl);
  });

  it('should render the feed video when the videoUrl arg is exist', () => {
    const videoUrl =
      'https://prod-ugc-content-c37d5ec.s3-eu-west-2.amazonaws.com/ugc/fc51444137e0e36236f42c58f405a626/7376744159700336703381266/source.mp4';
    cy.visit(
      `/iframe.html?id=pages-feed-feedbodycomponent--feed-video&args=videoUrl:${videoUrl}`
    );
    cy.get('.feed-body__video  video').should('be.visible');
    cy.get('.feed-body__video  video > source').should(
      'have.attr',
      'src',
      videoUrl
    );
  });
});
