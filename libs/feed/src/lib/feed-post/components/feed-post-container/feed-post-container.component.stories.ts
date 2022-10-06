import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FeedPostService } from '../../services';
import { FeedPostActionsComponent } from '../feed-post-actions/feed-post-actions.component';
import { FeedPostBodyComponent } from '../feed-post-body/feed-post-body.component';
import { FeedPostFooterComponent } from '../feed-post-footer/feed-post-footer.component';
import { FeedPostHeaderComponent } from '../feed-post-header/feed-post-header.component';
import { FeedPostContainerComponent } from './feed-post-container.component';

export default {
  title: 'FeedPostContainerComponent',
  component: FeedPostContainerComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        FeedPostHeaderComponent,
        FeedPostBodyComponent,
        FeedPostActionsComponent,
        FeedPostFooterComponent,
      ],
      providers: [FeedPostService],
    }),
  ],
} as Meta<FeedPostContainerComponent>;

const Template: Story<FeedPostContainerComponent> = (
  args: FeedPostContainerComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
