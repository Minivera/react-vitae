import React from "react";
import PropTypes from "prop-types";

import defines from '../../defines';

/**
 * A public higher-order component to access the schema stored in context.
 * Use with your custom components to have access to parts of the schema.
 */
const withBasics = Component => {
    const Wrapper = (props, context) => {
        const { schema } = context;
        
        const menus = [];
        
        defines.sections.forEach((section) => {
            if (schema.hasOwnProperty(section))
            {
                menus.push(section);
            }
        });
    
        return <Component {...props} basics={schema.basics} availableSections={menus}/>;
    };
    
    Wrapper.displayName = `withBasics(${Component.displayName || Component.name})`;
    
    Wrapper.contextTypes = {
        schema: PropTypes.shape({}).isRequired
    };
    
    return Wrapper;
};

export default withBasics;