import * as React from 'react';
import { render } from 'react-dom';

// @ts-expect-error
import { Resume } from 'react-vitae-bulma-theme';
import { resume } from '../resume';

const App: React.ComponentType = (): React.ReactElement => <Resume resume={resume} />;

render(<App />, document.querySelector('#app'));
