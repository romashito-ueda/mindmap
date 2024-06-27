import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Checkbox',
  component: Checkbox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Checkbox',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Checkbox',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Checkbox',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Checkbox',
  },
};

export const Disabled: Story = {
	args: {
    size: 'small',
    label: 'Checkbox',
		disabled: true,
  },
}
