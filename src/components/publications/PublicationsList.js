import React from "react";
import PropTypes from "prop-types";

import { hasProperties } from '../../utils.js';

import withPublications from './withPublications.js';

import GenericList from '../internals/GenericList.js';

import { Column } from 'bloomer';

const PublicationsList = (props) => {
    const {
        publications
    } = props;
    
    //TODO: Improve this, maybe force a dependency on lodash?
    const items = publications.map((obj) => {
        const item = {};
        if (hasProperties(obj, 'name'))
        {
            item.title = obj.name;
        }
        if (hasProperties(obj, 'publisher'))
        {
            item.subtitle = obj.publisher;
        }
        if (hasProperties(obj, 'website'))
        {
            item.url = obj.website;
        }
        if (hasProperties(obj, 'summary'))
        {
            item.summary = obj.summary;
        }
        if (hasProperties(obj, 'releaseDate'))
        {
            item.start = obj.releaseDate;
        }
        return item;
    });
    
    return (
        <Column isSize="1/2">
            <GenericList items={items} listName="Publications" listIcon="fas fa-newspaper" id="publications" highlightType="list"/>
        </Column>
    );
};

PublicationsList.propTypes = {
    publications: PropTypes.arrayOf(PropTypes.shape({}))
};

PublicationsList.defaultProps = {
    publications: []
};

export default withPublications(PublicationsList);