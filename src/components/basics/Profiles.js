import React from "react";
import PropTypes from "prop-types";

import { hasProperties } from '../../utils.js';

//Bloomer imports
import {
    Level,
    LevelItem,
    Icon
} from 'bloomer';

import { Tooltip } from 'react-tippy';

const styles = {
};

const Profiles = (props) => {
    const {
        profiles
    } = props;
    
    return (
        <Level>
            {profiles.map((profile, index) => (
                hasProperties(profile, 'username') ? 
                    <LevelItem key={index}>
                        <Tooltip title={`Follow ${profile.username} on ${profile.network}`}>
                            <a href={profile.url}>
                                <Icon isSize="medium" className={`fab fa-${profile.network.toLowerCase()}`}/>
                            </a>
                        </Tooltip>
                    </LevelItem> :
                    <LevelItem>
                        <a href={profile.url}>
                            <Icon isSize="medium" className={`fab fa-${profile.network}`}/>
                        </a>
                    </LevelItem>
            ))}
        </Level>
    );
};

Profiles.propTypes = {
    profiles: PropTypes.arrayOf(PropTypes.shape({}))
};

Profiles.defaultProps = {
    profiles: []
};

export default Profiles;