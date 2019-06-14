import * as React from 'react';
import { render } from 'react-dom';

import { Resume } from '../src';
import { resume } from './resume';

const App: React.ComponentType = (): React.ReactElement => <Resume resume={resume} />;

render(<App />, document.querySelector('#app'));
