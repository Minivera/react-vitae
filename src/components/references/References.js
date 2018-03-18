import React from "react";
import PropTypes from "prop-types";

import { hasProperties } from '../../utils.js';

import withReferences from './withReferences.js';

//Bloomer imports
import {
    Content
} from 'bloomer';

const styles = {
    mainDiv: {
        marginBottom: '1.25rem'
    },
    divider: {
        marginLeft: '-1.25rem',
        marginRight: '-1.25rem'
    },
    referencesList: {
        
    },
    name: {
        fontStyle: 'italic',
        marginTop: '-1.25rem',
        display: 'block',
        marginLeft: '1rem'
    }
};

const References = (props) => {
    const {
        references
    } = props;
    
    return (
        <div id="references" style={styles.mainDiv}>
            <div style={styles.referencesList}>
                <Content>
                    {references.map((reference, index) => [
                        hasProperties(reference, 'reference') ?
                            <blockquote key={`quote_${index}`}> 
                                {reference.reference}
                            </blockquote> : null,
                        hasProperties(reference, 'name') ?
                            <span style={styles.name} key={`name_${index}`}>
                                {reference.name}
                            </span> : null
                    ])}
                </Content>
            </div>
            {references.length ? <hr style={styles.divider}/> : null}
        </div>
    );
};

References.propTypes = {
    references: PropTypes.arrayOf(PropTypes.shape({}))
};

References.defaultProps = {
    references: []
};

export default withReferences(References);