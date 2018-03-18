import React from "react";
import PropTypes from "prop-types";

import { hasProperties } from '../../utils.js';

import withLanguages from './withLanguages.js';

import GenericList from '../internals/GenericList.js';

import { 
    Column,
    Card,
    CardHeader,
    CardHeaderIcon,
    Icon,
    CardHeaderTitle,
    CardContent,
    Title,
    Subtitle
} from 'bloomer';

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

const Languages = (props) => {
    const {
        languages
    } = props;
    
    if (!languages.length)
    {
        return null;
    }
    
    return (
        <Column isSize="1/2">
            <Card style={{height: '100%'}}>
                <CardHeader>
                    <CardHeaderIcon render={() => (<div style={styles.icon}><Icon className="fas fa-language"/></div>)} />
                    <CardHeaderTitle style={styles.heading}>
                        Languages
                    </CardHeaderTitle>
                </CardHeader>
                <CardContent>
                    {languages.map((item, index, items) => [
                        hasProperties(item, 'name') ?
                            <Title isSize={5} key={`name_${index}`}>
                                {item.name}
                            </Title> : null,
                        hasProperties(item, 'level') ?
                            <Subtitle isSize={5} hasTextColor="info" key={`level_${index}`}>
                                {item.level}
                            </Subtitle> : null,
                        index !== items.length - 1 ? <hr /> : null
                    ])}
                </CardContent>
            </Card>
        </Column>
    );
};

Languages.propTypes = {
    languages: PropTypes.arrayOf(PropTypes.shape({}))
};

Languages.defaultProps = {
    languages: []
};

export default withLanguages(Languages);