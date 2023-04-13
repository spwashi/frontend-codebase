import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {LogAppReduxState} from './Log';
import {mainDecorator} from '../../util/storybook/decorators';

export default {
  title:      'Dev/AppState',
  component:  LogAppReduxState,
  decorators: [mainDecorator],
} as ComponentMeta<typeof LogAppReduxState>;

export const State = ({args: {open: true, style: 'json'}})