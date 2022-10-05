import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FeedPostContainerComponent } from './feed-post-container.component';

export default {
  title: 'FeedPostContainerComponent',
  component: FeedPostContainerComponent,
  decorators: [
    moduleMetadata({
      imports: [],
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
