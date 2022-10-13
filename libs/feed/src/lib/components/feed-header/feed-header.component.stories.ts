import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { mockFeed } from '../../models';
import { FeedHeaderComponent } from './feed-header.component';

export default {
  title: 'Pages/Feed/FeedHeaderComponent',
  component: FeedHeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
  argTypes: {
    text: {
      name: 'text',
      description: 'Sets the header text.',
      type: { name: 'string' },
      control: {
        type: 'text',
      },
    },
  },
} as Meta<FeedHeaderComponent>;

const Template: Story<FeedHeaderComponent> = (args: FeedHeaderComponent) => ({
  props: args,
});

export const HeaderText = Template.bind({});
HeaderText.args = {
  text: mockFeed[0].text,
};
