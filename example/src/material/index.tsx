import * as React from 'react';
import { render } from 'react-dom';

import { Resume } from 'react-vitae-material-theme';
import { resume } from '../resume';

const App: React.ComponentType = (): React.ReactElement => <Resume resume={resume} />;

render(<App />, document.querySelector('#app'));
