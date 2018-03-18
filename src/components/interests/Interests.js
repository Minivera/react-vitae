import React from "react";
import PropTypes from "prop-types";

import { hasProperties } from '../../utils.js';

import withInterests from './withInterests.js';

import GenericList from '../internals/GenericList.js';

import { Column } from 'bloomer';

const Interests = (props) => {
    const {
        interests
    } = props;
    
    //TODO: Improve this, maybe force a dependency on lodash?
    const items = interests.map((obj) => {
        const item = {};
        if (hasProperties(obj, 'name'))
        {
            item.title = obj.name;
        }
        if (hasProperties(obj, 'keywords'))
        {
            item.highlights = obj.keywords;
        }
        return item;
    });
    
    return (
        <Column isSize="1/2">
            <GenericList items={items} listName="Interests" listIcon="fas fa-heart" id="interests" highlightType="tags"
                style={{height: '100%'}}/>
        </Column>
    );
};

Interests.propTypes = {
    interests: PropTypes.arrayOf(PropTypes.shape({}))
};

Interests.defaultProps = {
    interests: []
};

export default withInterests(Interests);