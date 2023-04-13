import {LogAppReduxState} from '@core/dev/Log';
import {mainDecorator} from '../../storybook/decorators';

export default {
  title:      'Dev/AppState',
  component:  LogAppReduxState,
  decorators: [mainDecorator],
};

export const State = ({args: {open: true, style: 'json'}})