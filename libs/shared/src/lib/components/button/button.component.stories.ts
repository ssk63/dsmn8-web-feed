import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Shared/Components/ButtonComponent',
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
      table: {
        category: 'Inputs',
      },
    },
    isDisabled: {
      name: 'isDisabled',
      description: 'Whether the button is disabled.',
      type: {
        name: 'boolean',
      },
      table: {
        category: 'Inputs',
      },
    },
    isPrimary: {
      name: 'isPrimary',
      description: 'Whether the button is primary.',
      type: {
        name: 'boolean',
      },
      table: {
        category: 'Inputs',
      },
    },
    isFullWidth: {
      name: 'isFullWidth',
      description:
        'If true, the button stretches to the full width of its container.',
      defaultValue: false,
      type: {
        name: 'boolean',
      },
      table: {
        category: 'Inputs',
      },
    },
    clicked: {
      description: 'Event that is emitted when an button is clicked.',
      action: 'clicked',
      table: {
        category: 'Outputs',
      },
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
  isDisabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  isDisabled: true,
  isPrimary: false,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  ...Primary.args,
  isFullWidth: true,
};
