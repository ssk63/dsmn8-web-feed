describe('feed', () => {
  it('should render the component', () => {
    cy.visit('/iframe.html?id=feedcontainercomponent--feeds');
    cy.get('dsmn8-feed-container').should('exist');
  });

  it('should render the image feeds', () => {
    cy.visit('/iframe.html?id=feedcontainercomponent--image-feeds');
    cy.get('dsmn8-feed-container .feed').should('exist');
  });

  it('should render the video feeds', () => {
    cy.visit('/iframe.html?id=feedcontainercomponent--video-feeds');
    cy.get('dsmn8-feed-container .feed').should('exist');
  });

  it('should render the liked feeds', () => {
    cy.visit('/iframe.html?id=feedcontainercomponent--liked-feeds');
    cy.get('dsmn8-feed-container .feed').should('exist');
  });

  it('should render the shared feeds', () => {
    cy.visit('/iframe.html?id=feedcontainercomponent--shared-feeds');
    cy.get('dsmn8-feed-container .feed').should('exist');
  });
});
