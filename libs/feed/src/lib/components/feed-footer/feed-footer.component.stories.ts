import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { mockFeed } from '../../models';
import { FeedFooterComponent } from './feed-footer.component';

export default {
  title: 'Pages/Feed/FeedFooterComponent',
  component: FeedFooterComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
  argTypes: {
    metrics: {
      name: 'metrics',
      description: 'Sets feed social details metrics.',
      control: {
        type: 'object',
      },
      table: {
        category: 'Inputs',
      },
    },
  },
} as Meta<FeedFooterComponent>;

const Template: Story<FeedFooterComponent> = (args: FeedFooterComponent) => ({
  props: args,
});

export const Metrics = Template.bind({});
Metrics.args = {
  metrics: mockFeed[0].boostPostMetrics,
};
