import React from 'react';
import {
    Card,
    CardHeader,
    CardContent,
    CardHeaderTitle,
    CardHeaderIcon,
    Icon,
    Columns,
    Column,
    Title,
    Subtitle,
    Content,
    Tag,
    Heading,
} from 'bloomer';
import { Project, useProjects } from 'react-vitae';

const styles: { [s: string]: React.CSSProperties } = {
    icon: {
        width: 40,
        paddingLeft: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        textTransform: 'uppercase',
    },
    dateDiv: {
        fontSize: '0.8em',
    },
    dateSpan: {
        marginLeft: '0.4rem',
        marginRight: '0.4rem',
        fontStyle: 'italic',
    },
    highlightList: {
        listStyle: 'square',
        marginLeft: 20,
    },
    tagElement: {
        marginLeft: '0.3rem',
    },
};

const ProjectElement: React.FunctionComponent<{ item: Project }> = ({ item }): React.ReactElement | null => (
    <div style={styles.itemDiv}>
        <Columns>
            <Column isSize="1/2">
                <Title isSize={5}>{item.url ? <a href={item.url}>{item.name}</a> : item.name}</Title>
                {item.roles && (
                    <Subtitle isSize={5}>
                        {item.roles.join(', ')}
                    </Subtitle>
                )}
                {(item.type || item.entity) && (
                    <Heading>
                        {item.entity}
                        {(item.type || item.entity) && ', '}
                        {item.type}
                    </Heading>
                )}
            </Column>
            {(item.startDate || item.endDate) && (
                <Column isSize="1/2" hasTextAlign="right" hasTextColor="info">
                    <div style={styles.dateDiv}>
                        {item.startDate && <span style={styles.dateSpan}>{item.startDate}</span>}
                        {item.startDate && item.endDate && <span>to</span>}
                        {item.endDate && <span style={styles.dateSpan}>{item.endDate}</span>}
                    </div>
                </Column>
            )}
        </Columns>
        {item.description && <Content>{item.description}</Content>}
        {item.highlights && (
            <ul style={styles.highlightList}>
                {item.highlights.map(
                    (highlight: string): React.ReactElement => (
                        <li key={highlight}>{highlight}</li>
                    )
                )}
            </ul>
        )}
        {item.keywords && (
            <div style={styles.tagsList}>
                {item.keywords.map(
                    (keyword: string): React.ReactElement => (
                        <Tag style={styles.tagElement} key={keyword} isColor="info">
                            {keyword}
                        </Tag>
                    )
                )}
            </div>
        )}
    </div>
);

export const ProjectsList: React.FunctionComponent = (): React.ReactElement | null => {
    const projects = useProjects();

    if (!projects) {
        return null;
    }

    return (
        <Card>
            <CardHeader>
                <CardHeaderIcon
                    render={(): React.ReactElement => (
                        <div style={styles.icon}>
                            <Icon className="fas fa-tasks" />
                        </div>
                    )}
                />
                <CardHeaderTitle style={styles.heading}>Projects</CardHeaderTitle>
            </CardHeader>
            <CardContent>
                {projects.map(
                    (item: Project, index: number, items: Project[]): React.ReactElement => (
                        <React.Fragment key={index}>
                            <ProjectElement item={item} />
                            {index !== items.length - 1 && <hr />}
                        </React.Fragment>
                    )
                )}
            </CardContent>
        </Card>
    );
};
