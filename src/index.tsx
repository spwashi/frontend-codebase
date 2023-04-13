import React from 'react';
import {createRoot} from 'react-dom/client';
import './app/@core/styles/app.scss';
import App from './app/App';


const container = document.getElementById('root');
if (!container) throw new Error('could not initialize');
const root = createRoot(container);
root.render(<App/>);