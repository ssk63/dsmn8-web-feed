import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FeedPostActionsComponent } from './feed-post-actions.component';

export default {
  title: 'FeedPostActionsComponent',
  component: FeedPostActionsComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<FeedPostActionsComponent>;

const Template: Story<FeedPostActionsComponent> = (
  args: FeedPostActionsComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
