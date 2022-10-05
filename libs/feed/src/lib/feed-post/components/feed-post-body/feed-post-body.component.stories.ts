import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { mockFeedPosts } from '../../models';
import { FeedPostBodyComponent } from './feed-post-body.component';

export default {
  title: 'FeedPostBodyComponent',
  component: FeedPostBodyComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<FeedPostBodyComponent>;

const Template: Story<FeedPostBodyComponent> = (
  args: FeedPostBodyComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  name: mockFeedPosts[0].name,
  content: mockFeedPosts[0].content,
  imgUrl: mockFeedPosts[0].imgUrl,
};
