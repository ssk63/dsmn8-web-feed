import {
  ApolloClientOptions,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { Apollo, ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { FeedService, GET_ALL_FEED } from '../../services';
import { FeedContainerComponent } from './feed-container.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { likeBtnLabel, mockFeed, reshareBtnLabel } from '../../models';

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
      imports: [
        // HttpClientModule,
        // HttpClientTestingModule,
        // ApolloTestingModule,
        ApolloModule,
      ],
      providers: [
        Apollo,
        FeedService,
        // {
        //   provide: APOLLO_OPTIONS,
        //   useFactory: createApollo,
        //   deps: [HttpLink],
        // },
      ],
    }),
  ],
  parameters: {
    apolloClient: {
      mocks: [
        {
          delay: 1e21,
          request: {
            query: GET_ALL_FEED,
          },
          result: {
            data: {
              allFeeds: mockFeed,
            },
          },
        },
      ],
      link: ApolloLink.from([
        createHttpLink({
          uri,
        }),
      ]),
      cache: new InMemoryCache(),
      defaultOptions: {
        query: {
          fetchPolicy: 'no-cache',
        },
      },
    },
  },
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
} as Meta<FeedContainerComponent>;

const Template: Story<FeedContainerComponent> = (
  args: FeedContainerComponent
) => ({
  props: args,
});

export const Feed = Template.bind({});
Feed.args = {};
