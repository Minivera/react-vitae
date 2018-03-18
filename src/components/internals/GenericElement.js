import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { hasProperties } from '../../utils.js';

//Bloomer imports
import { 
    Columns,
    Column,
    Title,
    Subtitle,
    Content,
    Tag
} from 'bloomer';

const styles = {
    itemDiv: {
        
    },
    dateDiv: {
        fontSize: '0.8em',
    },
    dateSpan: {
        marginLeft: '0.4rem',
        marginRight: '0.4rem',
        fontStyle: 'italic'
    },
    highlightList: {
        listStyle: 'square',
        marginLeft: 20
    },
    highlightElement: {
        
    },
    tagsList: {
        
    },
    tagElement: {
        marginLeft: '0.3rem'
    }
};

const GenericElement = (props) => {
    const { 
        item,
        highlightType
    } = props;
    
    return (
        <div style={styles.itemDiv}>
            <Columns>
                <Column isSize='1/2'>
                    {hasProperties(item, 'title') ? 
                        <Title isSize={5}>
                            {hasProperties(item, 'url') ? 
                                <a href={item.url}>
                                    {item.title}
                                </a> : item.title
                            }
                        </Title> : null
                    }
                    {hasProperties(item, 'subtitle') ? 
                        <Subtitle isSize={5}>
                            {item.subtitle}
                        </Subtitle> : null
                    }
                </Column>
                {hasProperties(item, 'start') || hasProperties(item, 'end') ?
                    <Column isSize='1/2' hasTextAlign="right" hasTextColor="info">
                        <div style={styles.dateDiv}>
                            {hasProperties(item, 'start') ? 
                                <span style={styles.dateSpan}>
                                    {item.start}
                                </span> : null
                            }
                            {hasProperties(item, ['start', 'end']) ? 
                                <span>to</span> : null
                            }
                            {hasProperties(item, 'end') ? 
                                <span style={styles.dateSpan}>
                                    {item.end}
                                </span> : null
                            }
                        </div>
                    </Column> : null
                }
            </Columns>
            {hasProperties(item, 'summary') ? 
                <Content>
                    {item.summary}
                </Content> : null
            }
            {hasProperties(item, 'highlights') ? 
                (highlightType === 'list' ? 
                    <ul style={styles.highlightList}>
                        {item.highlights.map((highlight, index) => (
                            <li style={styles.highlightElement} key={index}>
                                {highlight}
                            </li>
                        ))}
                    </ul> :
                    <div style={styles.tagsList}>
                        {item.highlights.map((highlight, index) => (
                            <Tag style={styles.tagElement} key={index} isColor='info'>
                                {highlight}
                            </Tag>
                        ))}
                    </div>
                ) : null
            }
        </div>
    );
};

GenericElement.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        summary: PropTypes.string,
        url: PropTypes.string,
        start: PropTypes.string,
        end: PropTypes.string,
        highlights: PropTypes.arrayOf(PropTypes.string)
    }).isRequired,
    highlightType: PropTypes.oneOf(['list', 'tags'])
};

GenericElement.defaultProps = {
    highlightType: 'list'
};

export default GenericElement;