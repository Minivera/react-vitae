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
    Tag,
} from 'bloomer';
import { Education, useEducation } from 'react-vitae';

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
    tagElement: {
        marginLeft: '0.3rem',
    },
};

const EducationElement: React.FunctionComponent<{ item: Education }> = ({ item }): React.ReactElement | null => (
    <div style={styles.itemDiv}>
        <Columns>
            <Column isSize="1/2">
                {(item.studyType || item.area) && (
                    <Title isSize={5}>
                        {item.studyType}, {item.area}
                    </Title>
                )}
                <Subtitle isSize={5}>{item.institution}</Subtitle>
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
        {item.courses && (
            <div style={styles.tagsList}>
                {item.courses.map(
                    (course: string): React.ReactElement => (
                        <Tag style={styles.tagElement} key={course} isColor="info">
                            {course}
                        </Tag>
                    )
                )}
            </div>
        )}
    </div>
);

export const EducationList: React.FunctionComponent = (): React.ReactElement | null => {
    const education = useEducation();

    if (!education) {
        return null;
    }

    return (
        <Card>
            <CardHeader>
                <CardHeaderIcon
                    render={(): React.ReactElement => (
                        <div style={styles.icon}>
                            <Icon className="fas fa-graduation-cap" />
                        </div>
                    )}
                />
                <CardHeaderTitle style={styles.heading}>Education</CardHeaderTitle>
            </CardHeader>
            <CardContent>
                {education.map(
                    (item: Education, index: number, items: Education[]): React.ReactElement => (
                        <React.Fragment key={index}>
                            <EducationElement item={item} />
                            {index !== items.length - 1 && <hr />}
                        </React.Fragment>
                    )
                )}
            </CardContent>
        </Card>
    );
};
