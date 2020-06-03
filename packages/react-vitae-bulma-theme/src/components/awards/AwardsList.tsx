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
import { Award, useAwards } from 'react-vitae';

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
};

const AwardsElement: React.FunctionComponent<{ item: Award }> = ({ item }): React.ReactElement | null => (
  <div style={styles.itemDiv}>
    <Columns>
      <Column isSize="1/2">
        <Title isSize={5}>{item.title}</Title>
        {item.awarder && <Subtitle isSize={5}>{item.awarder}</Subtitle>}
      </Column>
      {item.date && (
        <Column isSize="1/2" hasTextAlign="right" hasTextColor="info">
          <div style={styles.dateDiv}>
            <span style={styles.dateSpan}>{item.date}</span>
          </div>
        </Column>
      )}
    </Columns>
    {item.summary && <Content>{item.summary}</Content>}
  </div>
);

export const AwardsList: React.FunctionComponent = (): React.ReactElement | null => {
  const awards = useAwards();

  if (!awards) {
    return null;
  }

  return (
    <Column isSize="1/2">
      <Card>
        <CardHeader>
          <CardHeaderIcon
            render={(): React.ReactElement => (
              <div style={styles.icon}>
                <Icon className="fas fa-trophy" />
              </div>
            )}
          />
          <CardHeaderTitle style={styles.heading}>Awards</CardHeaderTitle>
        </CardHeader>
        <CardContent>
          {awards.map(
            (item: Award, index: number, items: Award[]): React.ReactElement => (
              <React.Fragment key={index}>
                <AwardsElement item={item} />
                {index !== items.length - 1 && <hr />}
              </React.Fragment>
            )
          )}
        </CardContent>
      </Card>
    </Column>
  );
};
