import React from "react";
import PropTypes from "prop-types";

import { hasProperties } from '../../utils.js';

import withAwards from './withAwards.js';

import GenericList from '../internals/GenericList.js';

import { Column } from 'bloomer';

const AwardsList = (props) => {
    const {
        awards
    } = props;
    
    //TODO: Improve this, maybe force a dependency on lodash?
    const items = awards.map((obj) => {
        const item = {};
        if (hasProperties(obj, 'title'))
        {
            item.title = obj.title;
        }
        if (hasProperties(obj, 'awarder'))
        {
            item.subtitle = obj.awarder;
        }
        if (hasProperties(obj, 'summary'))
        {
            item.summary = obj.summary;
        }
        if (hasProperties(obj, 'date'))
        {
            item.start = obj.date;
        }
        return item;
    });
    
    return (
        <Column isSize="1/2">
            <GenericList items={items} listName="Awards" listIcon="fas fa-trophy" id="awards" highlightType="list"
                style={{height: '100%'}}/>
        </Column>
    );
};

AwardsList.propTypes = {
    awards: PropTypes.arrayOf(PropTypes.shape({}))
};

AwardsList.defaultProps = {
    awards: []
};

export default withAwards(AwardsList);