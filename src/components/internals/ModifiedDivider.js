import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Bloomer imports
import { withHelpersModifiers} from 'bloomer';

const ModifiedDivider = (props) => (
    <hr {...props}>{props.children}</hr>
);

export default withHelpersModifiers(ModifiedDivider);