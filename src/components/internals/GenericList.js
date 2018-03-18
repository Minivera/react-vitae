import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Bloomer imports
import { 
    Card,
    CardHeader,
    CardHeaderTitle,
    Title,
    CardHeaderIcon,
    CardContent,
    Icon
} from 'bloomer';

import GenericElement from './GenericElement.js';

const styles = {
    icon: {
        width: 40,
        paddingLeft: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        textTransform: 'uppercase'
    }
};

const GenericList = (props) => {
    const {
        listName,
        listIcon,
        items,
        highlightType,
        ...rest
    } = props;
    
    if (!items.length)
    {
        return null;
    }
    
    return (
        <Card {...rest}>
            <CardHeader>
                {listIcon ?
                    <CardHeaderIcon render={() => (<div style={styles.icon}><Icon className={listIcon}/></div>)}>
                    </CardHeaderIcon> : null
                }
                <CardHeaderTitle style={styles.heading}>
                    {listName}
                </CardHeaderTitle>
            </CardHeader>
            <CardContent>
                {items.map((item, index, items) => [
                    <GenericElement item={item} key={index} highlightType={highlightType}/>,
                    index !== items.length - 1 ? <hr /> : null
                ])}
            </CardContent>
        </Card>
    );
};

GenericList.propTypes = {
    listName: PropTypes.string.isRequired,
    listIcon: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        summary: PropTypes.string,
        url: PropTypes.string,
        start: PropTypes.string,
        end: PropTypes.string,
        highlights: PropTypes.arrayOf(PropTypes.string)
    })),
    highlightType: PropTypes.oneOf(['list', 'tags'])
};

GenericList.defaultProps = {
    items: [],
    highlightType: 'list'
};

export default GenericList;