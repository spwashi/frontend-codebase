import React from 'react';
import {createRoot} from 'react-dom/client';
import './app/styles/app.scss';
import ConnectedApplication from './app/components/base/ConnectedApplication';


const container = document.getElementById('root');
const root      = createRoot(container!);
root.render(<ConnectedApplication/>);