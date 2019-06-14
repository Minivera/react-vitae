import React from 'react';
import { Card, CardHeader, CardContent, CardHeaderTitle, CardHeaderIcon, Icon, Column, Title, Tag } from 'bloomer';
import { Interest, useInterests } from 'react-vitae';

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
    tagElement: {
        marginLeft: '0.3rem',
    },
};

const InterestsElement: React.FunctionComponent<{ item: Interest }> = ({ item }): React.ReactElement | null => (
    <React.Fragment>
        <Title isSize={5}>{item.name}</Title>
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
    </React.Fragment>
);

export const InterestsList: React.FunctionComponent = (): React.ReactElement | null => {
    const interests = useInterests();

    if (!interests) {
        return null;
    }

    return (
        <Column isSize="1/2">
            <Card style={{ height: '100%' }}>
                <CardHeader>
                    <CardHeaderIcon
                        render={(): React.ReactElement => (
                            <div style={styles.icon}>
                                <Icon className="fas fa-heart" />
                            </div>
                        )}
                    />
                    <CardHeaderTitle style={styles.heading}>Interests</CardHeaderTitle>
                </CardHeader>
                <CardContent>
                    {interests.map(
                        (item: Interest, index: number, items: Interest[]): React.ReactElement => (
                            <React.Fragment key={index}>
                                <InterestsElement item={item} />
                                {index !== items.length - 1 && <hr />}
                            </React.Fragment>
                        )
                    )}
                </CardContent>
            </Card>
        </Column>
    );
};
