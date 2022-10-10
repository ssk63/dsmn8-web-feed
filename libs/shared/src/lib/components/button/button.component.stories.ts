import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Components/ButtonComponent',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
  argTypes: {
    label: {
      name: 'label',
      description: 'Sets the button text.',
      type: { name: 'string', required: true },
      control: {
        type: 'text',
      },
    },
    isDisabled: {
      name: 'isDisabled',
      description: 'Whether the button is disabled.',
      type: {
        name: 'boolean',
      },
    },
    isPrimary: {
      name: 'isPrimary',
      description: 'Whether the button is primary.',
      type: {
        name: 'boolean',
      },
    },
    isFullWidth: {
      name: 'isFullWidth',
      description:
        'If true, the button stretches to the full with of its container.',
      defaultValue: false,
      type: {
        name: 'boolean',
      },
    },
    clicked: {
      description: 'Event that is emitted when an button is clicked.',
      action: 'clicked',
    },
  },
} as Meta<ButtonComponent>;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: {
    ...args,
    // clicked: action('log'),
  },
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  isPrimary: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Button',
  isDisabled: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: 'Full Width Button',
  isDisabled: false,
  isPrimary: true,
  isFullWidth: true,
};
