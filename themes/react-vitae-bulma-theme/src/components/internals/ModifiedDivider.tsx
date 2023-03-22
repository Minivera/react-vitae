import React from 'react';
import { withHelpersModifiers } from 'bloomer';

const ModifiedDivider: React.FunctionComponent<Record<string, unknown>> = (
  props: Record<string, unknown>
): React.ReactElement => <hr {...props} />;

export default withHelpersModifiers(ModifiedDivider);
