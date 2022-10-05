import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FeedPostHeaderComponent } from './feed-post-header.component';

export default {
  title: 'FeedPostHeaderComponent',
  component: FeedPostHeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<FeedPostHeaderComponent>;

const Template: Story<FeedPostHeaderComponent> = (
  args: FeedPostHeaderComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
