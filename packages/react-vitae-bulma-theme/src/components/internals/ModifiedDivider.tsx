import React from 'react';
import { withHelpersModifiers } from 'bloomer';

const ModifiedDivider: React.FunctionComponent<object> = (props: object): React.ReactElement => <hr {...props} />;

export default withHelpersModifiers(ModifiedDivider);
