import React from "react";
import PropTypes from "prop-types";

import { hasProperties } from '../../utils.js';

//Bloomer imports
import {
    Title,
    Icon,
    Subtitle,
} from 'bloomer';

const styles = {
    mainDiv: {
        
    },
    subDiv: {
        marginBottom: '1.5rem'
    },
    iconStyle: {
        marginRight: '1.25rem'
    }
};

const renderAddress = (location) => {
    let address = '';
    if (hasProperties(location, 'address'))
    {
        address += location.address;
    }
    if (hasProperties(location, 'city'))
    {
        address += `, ${location.city}`;
    }
    if (hasProperties(location, 'region'))
    {
        address += `, ${location.region}`;
    }
    if (hasProperties(location, 'countryCode'))
    {
        address += ` (${location.countryCode})`;
    }
    if (hasProperties(location, 'postalCode'))
    {
        address += `, ${location.postalCode}`;
    }
    return address;
};

const Contact = (props) => {
    const { 
        phone,
        location,
        email,
        website
    } = props;
    
    return (
        <div style={styles.mainDiv}>
            <Title isSize={4}>
                Contact
            </Title>
            {phone && phone.length ? 
                <div style={styles.subDiv}>
                    <Subtitle isSize={6} isSpaced>
                        <Icon isSize="small" className="fas fa-phone" style={styles.iconStyle}/>
                        {phone}
                    </Subtitle> 
                </div> : null
            }
            <div style={styles.subDiv}>
                <Subtitle isSize={6} isSpaced>
                    <Icon isSize="small" className="fas fa-map-marker-alt" style={styles.iconStyle}/>
                    {renderAddress(location)}
                </Subtitle>
            </div>
            <div style={styles.subDiv}>
                {email && email.length ? 
                    <Subtitle isSize={6} isSpaced style={{marginBottom: '0.25rem'}}>
                        <Icon isSize="small" className="fas fa-envelope" style={styles.iconStyle}/>
                        <a href={`mailto:${email}`} target="_top">
                            {email}
                        </a>
                    </Subtitle> : null
                }
                {website && website.length ? 
                    <Subtitle isSize={6} isSpaced >
                        <Icon isSize="small" className="fas fa-link" style={styles.iconStyle}/>
                        <a href={website} target="_blank">
                            {website}
                        </a>
                    </Subtitle> : null
                }
            </div>
        </div>
    );
};

Contact.propTypes = {
    email: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string,
    location: PropTypes.shape({})
};

Contact.defaultProps = {
    email: null,
    phone: null,
    website: null,
    location: {}
};

export default Contact;