import React from "react";
import PropTypes from "prop-types";

import { hasProperties } from '../../utils.js';

import withWork from './withWork.js';

import GenericList from '../internals/GenericList.js';

const WorkList = (props) => {
    const {
        work
    } = props;
    
    //TODO: Improve this, maybe force a dependency on lodash?
    const items = work.map((obj) => {
        const item = {};
        if (hasProperties(obj, 'company'))
        {
            item.title = obj.company;
        }
        if (hasProperties(obj, 'position'))
        {
            item.subtitle = obj.position;
        }
        if (hasProperties(obj, 'website'))
        {
            item.url = obj.website;
        }
        if (hasProperties(obj, 'summary'))
        {
            item.summary = obj.summary;
        }
        if (hasProperties(obj, 'startDate'))
        {
            item.start = obj.startDate;
        }
        if (hasProperties(obj, 'endDate'))
        {
            item.end = obj.endDate;
        }
        if (hasProperties(obj, 'highlights'))
        {
            item.highlights = obj.highlights;
        }
        return item;
    });
    
    return (
        <GenericList items={items} listName="Work experience" listIcon="fas fa-building" id="work" highlightType="list"/>
    );
};

WorkList.propTypes = {
    work: PropTypes.arrayOf(PropTypes.shape({}))
};

WorkList.defaultProps = {
    work: []
};

export default withWork(WorkList);