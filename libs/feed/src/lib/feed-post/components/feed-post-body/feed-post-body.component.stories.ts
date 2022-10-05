import { moduleMetadata, Story, Meta } from '@storybook/angular';
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
Primary.args = {};
