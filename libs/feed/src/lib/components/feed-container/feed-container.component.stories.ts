import { Operation } from '@apollo/client';
import { Apollo } from 'apollo-angular';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FeedService } from '../../services';
import { FeedActionsComponent } from '../feed-actions/feed-actions.component';
import { FeedBodyComponent } from '../feed-body/feed-body.component';
import { FeedFooterComponent } from '../feed-footer/feed-footer.component';
import { FeedHeaderComponent } from '../feed-header/feed-header.component';
import { FeedContainerComponent } from './feed-container.component';
import { ButtonComponent } from '@dsmn8/shared';
import {
  createStorybookApolloMock,
  mockFeed,
  likeBtnLabel,
  reshareBtnLabel,
} from '../../models';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

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
      imports: [HttpClientModule, CommonModule],
      providers: [
        Apollo,
        FeedService,
        createStorybookApolloMock({
          mapper: (operation: Operation) => {
            switch (operation.operationName) {
              case 'AllFeeds':
                return {
                  data: {
                    allFeeds: mockFeed,
                  },
                };
              default:
                return null;
            }
          },
        }),
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
} as Meta<FeedContainerComponent>;

const Template: Story<FeedContainerComponent> = (
  args: FeedContainerComponent
) => ({
  props: args,
});

export const Feed = Template.bind({});
Feed.args = {};
