import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { mockFeed } from '../../models';
import { FeedFooterComponent } from './feed-footer.component';

export default {
  title: 'FeedFooterComponent',
  component: FeedFooterComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<FeedFooterComponent>;

const Template: Story<FeedFooterComponent> = (args: FeedFooterComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  metrics: mockFeed[0].boostPostMetrics,
};
