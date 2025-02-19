import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title lorem ipsum',
    text: 'Text Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorum nobis eius exercitationem ducimus cumque nemo velit, fugit officia natus reiciendis at perspiciatis eveniet voluptatum culpa porro enim ut in.',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title lorem ipsum',
    text: 'Text Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorum nobis eius exercitationem ducimus cumque nemo velit, fugit officia natus reiciendis at perspiciatis eveniet voluptatum culpa porro enim ut in.',
    theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title lorem ipsum',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Text Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorum nobis eius exercitationem ducimus cumque nemo velit, fugit officia natus reiciendis at perspiciatis eveniet voluptatum culpa porro enim ut in.',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title lorem ipsum',
    text: 'Text Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorum nobis eius exercitationem ducimus cumque nemo velit, fugit officia natus reiciendis at perspiciatis eveniet voluptatum culpa porro enim ut in.',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Title lorem ipsum',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Text Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorum nobis eius exercitationem ducimus cumque nemo velit, fugit officia natus reiciendis at perspiciatis eveniet voluptatum culpa porro enim ut in.',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
