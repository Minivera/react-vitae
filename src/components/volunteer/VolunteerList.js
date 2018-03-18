import React from "react";
import PropTypes from "prop-types";

import { hasProperties } from '../../utils.js';

import withVolunteer from './withVolunteer.js';

import GenericList from '../internals/GenericList.js';

const VolunteerList = (props) => {
    const {
        volunteer
    } = props;
    
    //TODO: Improve this, maybe force a dependency on lodash?
    const items = volunteer.map((obj) => {
        const item = {};
        if (hasProperties(obj, 'organization'))
        {
            item.title = obj.organization;
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
        <GenericList items={items} listName="Volunteer experience" listIcon="fas fa-male" id="volunteer" highlightType="list"/>
    );
};

VolunteerList.propTypes = {
    volunteer: PropTypes.arrayOf(PropTypes.shape({}))
};

VolunteerList.defaultProps = {
    volunteer: []
};

export default withVolunteer(VolunteerList);