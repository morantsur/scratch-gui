import React from 'react';
import ReactDOM from 'react-dom';

import AppStateHOC from './lib/app-state-hoc.jsx';
import MwGUI from './containers/mw-gui.jsx';
import ProjectLoaderHOC from './lib/project-loader-hoc.jsx';

import styles from './index.css';

const App = AppStateHOC(ProjectLoaderHOC(MwGUI, 'ocean-2'));

const appTarget = document.createElement('div');
appTarget.className = styles.app;
document.body.appendChild(appTarget);

ReactDOM.render(<App />, appTarget);
