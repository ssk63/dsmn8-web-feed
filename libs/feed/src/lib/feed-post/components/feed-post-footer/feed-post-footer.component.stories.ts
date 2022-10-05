import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { mockFeedPosts } from '../../models';
import { FeedPostFooterComponent } from './feed-post-footer.component';

export default {
  title: 'FeedPostFooterComponent',
  component: FeedPostFooterComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<FeedPostFooterComponent>;

const Template: Story<FeedPostFooterComponent> = (
  args: FeedPostFooterComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  metrics: mockFeedPosts[0].boostPostMetrics,
};
