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
} from 'bloomer';
import { Work, useWork } from 'react-vitae';

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
};

const WorkElement: React.FunctionComponent<{ item: Work }> = ({ item }): React.ReactElement | null => (
    <div style={styles.itemDiv}>
        <Columns>
            <Column isSize="1/2">
                <Title isSize={5}>
                    {item.position && `${item.position} - `}
                    {item.url ? <a href={item.url}>{item.name}</a> : item.name}
                </Title>
                {item.description && <Subtitle>{item.description}</Subtitle>}
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
        {item.summary && <Content>{item.summary}</Content>}
        {item.highlights && (
            <ul style={styles.highlightList}>
                {item.highlights.map(
                    (highlight: string): React.ReactElement => (
                        <li key={highlight}>{highlight}</li>
                    )
                )}
            </ul>
        )}
    </div>
);

export const WorkList: React.FunctionComponent = (): React.ReactElement | null => {
    const work = useWork();

    if (!work) {
        return null;
    }

    return (
        <Card>
            <CardHeader>
                <CardHeaderIcon
                    render={(): React.ReactElement => (
                        <div style={styles.icon}>
                            <Icon className="fas fa-building" />
                        </div>
                    )}
                />
                <CardHeaderTitle style={styles.heading}>Work Experience</CardHeaderTitle>
            </CardHeader>
            <CardContent>
                {work.map(
                    (item: Work, index: number, items: Work[]): React.ReactElement => (
                        <React.Fragment key={index}>
                            <WorkElement item={item} />
                            {index !== items.length - 1 && <hr />}
                        </React.Fragment>
                    )
                )}
            </CardContent>
        </Card>
    );
};
