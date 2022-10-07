import { Injectable } from '@angular/core';
import { Operation } from '@apollo/client';
import { of } from 'rxjs';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FeedService } from '../../services';
import { FeedActionsComponent } from '../feed-actions/feed-actions.component';
import { FeedBodyComponent } from '../feed-body/feed-body.component';
import { FeedFooterComponent } from '../feed-footer/feed-footer.component';
import { FeedHeaderComponent } from '../feed-header/feed-header.component';
import { FeedContainerComponent } from './feed-container.component';
import { ButtonComponent } from '@dsmn8/shared';
import { createStorybookApolloMock, mockFeed } from '../../models';

@Injectable()
class FeedServiceMock {
  getAllFeeds() {
    return of(mockFeed);
  }
}

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
      providers: [
        {
          provide: FeedService,
          useClass: FeedServiceMock,
        },
        createStorybookApolloMock({
          mapper: (operation: Operation) => {
            switch (operation.operationName) {
              case 'getAllPosts':
                return {
                  data: {
                    getAllPosts: mockFeed,
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
} as Meta<FeedContainerComponent>;

const Template: Story<FeedContainerComponent> = (
  args: FeedContainerComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
