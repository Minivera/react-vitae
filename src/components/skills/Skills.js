import React from "react";
import PropTypes from "prop-types";

import { hasProperties } from '../../utils.js';

import withSkills from './withSkills.js';

//Bloomer imports
import {
    Title,
    Subtitle,
    Progress,
    Tag
} from 'bloomer';

const styles = {
    mainDiv: {
        marginBottom: '1.25rem'
    },
    skillsList: {
        
    },
    skills: {
        marginBottom: '1rem'
    },
    skillTitle: {
        marginBottom: '0.5rem'
    },
    skillProgress: {
        marginBottom: '0.5rem'
    },
    skillTags: {
        textAlign: 'right'
    },
    tag: {
        marginLeft: '0.2rem'
    }
};

const levelToProgress = (level) => {
    switch(level) {
        case 'Basic':
            return 1;
        case 'Initiated':
            return 2;
        case 'Average':
            return 3;
        case 'Competent':
            return 4;
        case 'Master':
            return 5;
        default:
            return 3;
    }
};

const Skills = (props) => {
    const {
        skills
    } = props;
    
    if (!skills.length)
    {
        return null;
    }
    
    return (
        <div id="skills" style={styles.mainDiv}>
            <Title isSize={4}>
                Profesionnal Skills
            </Title>
            <div style={styles.skillsList}>
                {skills.map((skill, index) => (
                    <div style={styles.skills} key={index}>
                        {hasProperties(skill, 'name') ?
                            <Subtitle isSize={5} style={styles.skillTitle}>
                                {skill.name}
                            </Subtitle>
                            : null
                        }
                        {hasProperties(skill, 'level') ?
                            <Progress isColor='primary' value={levelToProgress(skill.level)} max={5} 
                                style={styles.skillProgress}/> : null
                        }
                        {hasProperties(skill, 'keywords') ?
                            <div style={styles.skillTags}>
                                {skill.keywords.map((keyword, index) => (
                                    <Tag isColor='info' style={styles.tag} key={index}>
                                        {keyword}
                                    </Tag>
                                ))}
                            </div>
                            : null
                        }
                    </div>
                ))}
            </div>
        </div>
    );
};

Skills.propTypes = {
    skills: PropTypes.arrayOf(PropTypes.shape({}))
};

Skills.defaultProps = {
    skills: []
};

export default withSkills(Skills);