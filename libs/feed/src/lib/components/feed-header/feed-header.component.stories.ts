import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { mockFeed } from '../../models';
import { FeedHeaderComponent } from './feed-header.component';

export default {
  title: 'FeedHeaderComponent',
  component: FeedHeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<FeedHeaderComponent>;

const Template: Story<FeedHeaderComponent> = (args: FeedHeaderComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  text: mockFeed[0].text,
};
