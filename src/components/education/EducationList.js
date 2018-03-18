import React from "react";
import PropTypes from "prop-types";

import { hasProperties } from '../../utils.js';

import withEducation from './withEducation.js';

import GenericList from '../internals/GenericList.js';

const EducationList = (props) => {
    const {
        education
    } = props;
    
    //TODO: Improve this, maybe force a dependency on lodash?
    const items = education.map((obj) => {
        const item = {};
        if (hasProperties(obj, 'area'))
        {
            item.title = hasProperties(obj, 'studyType') ? `${obj.studyType}, ${obj.area}` : obj.area;
        }
        if (hasProperties(obj, 'institution'))
        {
            item.subtitle = obj.institution;
        }
        if (hasProperties(obj, 'startDate'))
        {
            item.start = obj.startDate;
        }
        if (hasProperties(obj, 'endDate'))
        {
            item.end = obj.endDate;
        }
        if (hasProperties(obj, 'courses'))
        {
            item.highlights = obj.courses;
        }
        return item;
    });
    
    return (
        <GenericList items={items} listName="Education" listIcon="fas fa-graduation-cap" id="education" highlightType="tags"/>
    );
};

EducationList.propTypes = {
    education: PropTypes.arrayOf(PropTypes.shape({}))
};

EducationList.defaultProps = {
    education: []
};

export default withEducation(EducationList);