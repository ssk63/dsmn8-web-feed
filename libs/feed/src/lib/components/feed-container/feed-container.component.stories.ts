import { Apollo, ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { graphql } from 'msw';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FeedService, GET_ALL_FEED } from '../../services';
import { FeedActionsComponent } from '../feed-actions/feed-actions.component';
import { FeedBodyComponent } from '../feed-body/feed-body.component';
import { FeedFooterComponent } from '../feed-footer/feed-footer.component';
import { FeedHeaderComponent } from '../feed-header/feed-header.component';
import { FeedContainerComponent } from './feed-container.component';
import { ButtonComponent } from '@dsmn8/shared';
import { mockFeed, likeBtnLabel, reshareBtnLabel } from '../../models';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client';
import { HttpLink } from 'apollo-angular/http';

const uri = 'http://localhost:5000/';

const createApollo = (httpLink: HttpLink): ApolloClientOptions<any> => {
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
    defaultOptions: {
      query: {
        fetchPolicy: 'no-cache',
      },
    },
  };
};

export default {
  title: 'FeedContainerComponent',
  component: FeedContainerComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        FeedHeaderComponent,
        FeedBodyComponent,
        FeedActionsComponent,
        FeedFooterComponent,
        ButtonComponent,
      ],
      imports: [HttpClientModule, ApolloModule, CommonModule],
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
    },
    reshareBtnLabel: {
      name: 'reshareBtnLabel',
      description: 'Sets the reshare button text.',
      defaultValue: reshareBtnLabel,
      control: {
        type: 'text',
      },
    },
    onLikesBtnClicked: {
      description:
        'Perform the likes operation when the likes button is clicked.',
      action: 'onLikesBtnClicked',
    },
    onReshareBtnClicked: {
      description:
        'Perform the reshare operation when the reshare button is clicked.',
      action: 'onReshareBtnClicked',
    },
  },
  parameters: {
    msw: {
      handlers: [
        graphql.query(GET_ALL_FEED, (req, res, ctx) => {
          return res(
            ctx.data({
              allFeeds: [{ ...mockFeed[0] }],
            })
          );
        }),
      ],
    },
  },
} as Meta<FeedContainerComponent>;

const Template: Story<FeedContainerComponent> = (
  args: FeedContainerComponent
) => ({
  props: args,
});

export const Feed = Template.bind({});
Feed.args = {};
