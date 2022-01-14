import {VisualizationParameters} from '../config/types';
import React from 'react';
import {ConfigWidget} from './ConfigWidget';

interface AppConfigParams {
    config: VisualizationParameters;
    setConfig: (config: VisualizationParameters) => void;
}

export class AppConfig extends React.PureComponent<AppConfigParams> {
    render() {
        const {setConfig, config} = this.props;
        return (
            <div className={'d3app__config-widget-wrapper'}>
                <ConfigWidget updateValues={setConfig} config={config}/>
            </div>
        );
    }
}