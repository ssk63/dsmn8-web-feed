import { Apollo, ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client';
import { withDesign } from 'storybook-addon-designs';
import { HttpLink } from 'apollo-angular/http';
import { graphql } from 'msw';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { FeedService, GET_ALL_FEED } from '../../services';
import { FeedActionsComponent } from '../feed-actions/feed-actions.component';
import { FeedBodyComponent } from '../feed-body/feed-body.component';
import { FeedFooterComponent } from '../feed-footer/feed-footer.component';
import { FeedHeaderComponent } from '../feed-header/feed-header.component';
import { FeedContainerComponent } from './feed-container.component';
import { ButtonComponent } from '@dsmn8/shared';
import { mockFeed, likeBtnLabel, reshareBtnLabel } from '../../models';

const uri = 'http://localhost:5000/';

const createApollo = (httpLink: HttpLink): ApolloClientOptions<any> => {
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
    defaultOptions: {
      query: {
        fetchPolicy: 'cache-first',
      },
    },
  };
};

export default {
  title: 'Pages/Feed/FeedContainerComponent',
  component: FeedContainerComponent,
  decorators: [
    withDesign,
    moduleMetadata({
      declarations: [
        FeedHeaderComponent,
        FeedBodyComponent,
        FeedActionsComponent,
        FeedFooterComponent,
        ButtonComponent,
      ],
      imports: [
        HttpClientModule,
        ApolloModule,
        CommonModule,
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule,
      ],
      providers: [
        Apollo,
        FeedService,
        {
          provide: APOLLO_OPTIONS,
          useFactory: createApollo,
          deps: [HttpLink],
        },
      ],
    }),
  ],
  argTypes: {
    likesBtnLabel: {
      name: 'likesBtnLabel',
      description: 'Sets the like button text.',
      defaultValue: likeBtnLabel,
      control: {
        type: 'text',
      },
      table: {
        category: 'Props',
      },
    },
    reshareBtnLabel: {
      name: 'reshareBtnLabel',
      description: 'Sets the reshare button text.',
      defaultValue: reshareBtnLabel,
      control: {
        type: 'text',
      },
      table: {
        category: 'Props',
      },
    },
    onLikesBtnClicked: {
      description:
        'Perform the likes operation when the likes button is clicked.',
      action: 'onLikesBtnClicked',
      table: {
        category: 'fn',
      },
    },
    onReshareBtnClicked: {
      description:
        'Perform the reshare operation when the reshare button is clicked.',
      action: 'onReshareBtnClicked',
      table: {
        category: 'fn',
      },
    },
  },
} as Meta<FeedContainerComponent>;

const Template: Story<FeedContainerComponent> = (
  args: FeedContainerComponent
) => ({
  props: args,
});

export const Feeds = Template.bind({});
Feeds.args = {};
Feeds.parameters = {
  msw: {
    handlers: [
      graphql.query(GET_ALL_FEED, (req, res, ctx) => {
        return res(
          ctx.data({
            allFeeds: mockFeed,
          })
        );
      }),
    ],
  },
};

Feeds.parameters = {
  design: [
    {
      name: 'Image',
      type: 'image',
      url: 'https://dsmn8.imgix.net/_scraper/13cf5006bf679afa7bee45831d7c974a.jpeg',
      allowFullscreen: true,
    },
  ],
};

export const ImageFeeds = Template.bind({});
ImageFeeds.args = {};
ImageFeeds.parameters = {
  msw: {
    handlers: [
      graphql.query(GET_ALL_FEED, (req, res, ctx) => {
        return res(
          ctx.data({
            allFeeds: mockFeed.filter((feed) => !!feed.imgUrl),
          })
        );
      }),
    ],
  },
};

export const VideoFeeds = Template.bind({});
VideoFeeds.args = {};
VideoFeeds.parameters = {
  msw: {
    handlers: [
      graphql.query(GET_ALL_FEED, (req, res, ctx) => {
        return res(
          ctx.data({
            allFeeds: mockFeed.filter((feed) => !!feed.videoUrl),
          })
        );
      }),
    ],
  },
};

export const LikedFeeds = Template.bind({});
LikedFeeds.args = {};
LikedFeeds.parameters = {
  msw: {
    handlers: [
      graphql.query(GET_ALL_FEED, (req, res, ctx) => {
        return res(
          ctx.data({
            allFeeds: mockFeed.filter((feed) => !!feed.isLiked),
          })
        );
      }),
    ],
  },
  docs: {
    hidden: false,
  },
};

export const WillLikeFeeds = Template.bind({});
WillLikeFeeds.args = {};
WillLikeFeeds.parameters = {
  msw: {
    handlers: [
      graphql.query(GET_ALL_FEED, (req, res, ctx) => {
        return res(
          ctx.data({
            allFeeds: mockFeed.filter((feed) => !feed.isLiked),
          })
        );
      }),
    ],
  },
};

export const SharedFeeds = Template.bind({});
SharedFeeds.args = {};
SharedFeeds.parameters = {
  msw: {
    handlers: [
      graphql.query(GET_ALL_FEED, (req, res, ctx) => {
        return res(
          ctx.data({
            allFeeds: mockFeed.filter((feed) => !!feed.isShared),
          })
        );
      }),
    ],
  },
};

export const WillShareFeeds = Template.bind({});
WillShareFeeds.args = {};
WillShareFeeds.parameters = {
  msw: {
    handlers: [
      graphql.query(GET_ALL_FEED, (req, res, ctx) => {
        return res(
          ctx.data({
            allFeeds: mockFeed.filter((feed) => !feed.isShared),
          })
        );
      }),
    ],
  },
};
