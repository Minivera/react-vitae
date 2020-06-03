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
import { Volunteer, useVolunteer } from 'react-vitae';

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

const VolunteerElement: React.FunctionComponent<{ item: Volunteer }> = ({ item }): React.ReactElement | null => (
  <div style={styles.itemDiv}>
    <Columns>
      <Column isSize="1/2">
        <Title isSize={5}>{item.url ? <a href={item.url}>{item.organization}</a> : item.organization}</Title>
        {item.position && <Subtitle isSize={5}>{item.position}</Subtitle>}
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

export const VolunteerList: React.FunctionComponent = (): React.ReactElement | null => {
  const volunteer = useVolunteer();

  if (!volunteer) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardHeaderIcon
          render={(): React.ReactElement => (
            <div style={styles.icon}>
              <Icon className="fas fa-male" />
            </div>
          )}
        />
        <CardHeaderTitle style={styles.heading}>Volunteer Experience</CardHeaderTitle>
      </CardHeader>
      <CardContent>
        {volunteer.map(
          (item: Volunteer, index: number, items: Volunteer[]): React.ReactElement => (
            <React.Fragment key={index}>
              <VolunteerElement item={item} />
              {index !== items.length - 1 && <hr />}
            </React.Fragment>
          )
        )}
      </CardContent>
    </Card>
  );
};
