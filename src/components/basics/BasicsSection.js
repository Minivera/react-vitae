import React from "react";
import PropTypes from "prop-types";

import defines from '../../defines';
import { hasProperties } from '../../utils.js';

import withBasics from './withBasics.js';
import Contact from './Contact.js';
import Profiles from './Profiles.js';
import ModifiedDivider from '../internals/ModifiedDivider.js';

//Bloomer imports
import {
    Box,
    Image,
    Level,
    LevelItem,
    Title,
    Subtitle,
    Content
} from 'bloomer';

const styles = {
    mainBox: {
        overflow: 'hidden',
        height: 'fit-content'
    },
    divider: {
        marginLeft: '-1.25rem',
        marginRight: '-1.25rem'
    },
    imageHolder: {
        marginTop: '-1.25rem',
        marginLeft: '-1.25rem',
        marginRight: '-1.25rem'
    },
    nameHolder: {
        textAlign: 'center',
        marginBottom: '1.5rem'
    },
    levelMenu: {
        flexDirection: 'column',
        paddingTop: '0.5rem',
        marginLeft: '-1rem',
        marginRight: '-1rem'
    },
    levelMenuItem: {
        fontSize: '1.25rem',
        textTransform: 'uppercase',
        display: 'block',
        width: '100%'
    },
    activeItem: {
        backgroundColor: '#3273dc',
        borderRadius: 2
    }
};

const BasicsSection = (props) => {
    const { 
        basics, 
        availableMenus, 
        onMenuLinkClick,
        activeSection,
        children,
        ...rest
    } = props;
    
    return (
        <Box {...rest} style={styles.mainBox} id="basics">
            {hasProperties(basics, 'picture') ? 
                <div style={styles.imageHolder}>
                    <Image isRatio="square" src={basics.picture}/>
                </div> : null
            }
            <div style={styles.nameHolder}>
                {hasProperties(basics, 'name') ? 
                    <Title isSize={1}>
                        {basics.name}
                    </Title> : null
                }
                {hasProperties(basics, 'label') ?
                    <Subtitle isSize={3}>
                        {basics.label}
                    </Subtitle> : null
                }
            </div>
            {hasProperties(basics, 'summary') ?
                <Content>
                    <p>
                        {basics.summary}
                    </p>
                </Content> : null
            }
            <ModifiedDivider style={styles.divider} isHidden={['tablet', 'desktop', 'widescreen']}/>
            <Level isDisplay="flex-mobile" isHidden={['tablet', 'desktop', 'widescreen']}
                style={styles.levelMenu}>
                {availableMenus.map((menu) => (
                    <LevelItem href={`#${menu}`} hasTextAlign="centered" onClick={() => onMenuLinkClick(menu)}
                        style={{...styles.levelMenuItem, ...(activeSection === menu ? styles.activeItem : {})}} 
                        hasTextColor={activeSection === menu ? 'white' : 'dark'} key={menu}>
                        {menu}
                    </LevelItem>
                ))}
            </Level>
            <hr style={styles.divider}/>
            {children}
            {hasProperties(basics, ['email', 'phone', 'website']) || hasProperties(basics, 'location') ? 
                <Contact email={basics.email} phone={basics.phone} 
                    website={basics.website} location={basics.location} /> : null
            }
            {
                (hasProperties(basics, ['email', 'phone', 'website']) || hasProperties(basics, 'location')) 
                && hasProperties(basics, 'profiles') ? <hr style={styles.divider}/> : null
            }
            {hasProperties(basics, 'profiles') ? 
                <Profiles profiles={basics.profiles} /> : null
            }
        </Box>   
    );
};

BasicsSection.propTypes = {
    basics: PropTypes.shape({}),
    availableMenus: PropTypes.arrayOf(PropTypes.oneOf(defines.sections)),
    onMenuLinkClick: PropTypes.func,
    activeSection: PropTypes.string
};

BasicsSection.defaultProps = {
    basics: {},
    availableMenus: [],
    onMenuLinkClick: () => {},
    activeSection: 'basics'
};

export default withBasics(BasicsSection);