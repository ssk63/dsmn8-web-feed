import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { withDesign } from 'storybook-addon-designs';
import { ButtonComponent } from './button.component';
import results from '../../../../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';

export default {
  title: 'Shared/Components/ButtonComponent',
  component: ButtonComponent,
  decorators: [
    withDesign,
    withTests({ results }),
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
  parameters: {
    jest: 'button.component',
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
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample',
    allowFullscreen: true,
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  isDisabled: true,
  isPrimary: false,
};
Disabled.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample',
  },
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  ...Primary.args,
  isFullWidth: true,
};
FullWidth.parameters = {
  design: [
    {
      name: 'Figma',
      type: 'figma',
      url: 'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample',
      allowFullscreen: true,
    },
    {
      name: 'Link',
      type: 'link',
      url: 'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample',
    },
  ],
};
