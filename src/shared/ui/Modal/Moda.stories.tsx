import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium expedita nihil repudiandae, saepe quam delectus odio cum, est voluptatum ex rerum eos, placeat aspernatur quis dolores a deleniti quia ad.e',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium expedita nihil repudiandae, saepe quam delectus odio cum, est voluptatum ex rerum eos, placeat aspernatur quis dolores a deleniti quia ad.e',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
