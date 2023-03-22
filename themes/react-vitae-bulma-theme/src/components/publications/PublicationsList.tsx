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
import { Publication, usePublications } from 'react-vitae';

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

const PublicationsElement: React.FunctionComponent<{ item: Publication }> = ({ item }): React.ReactElement | null => (
  <div style={styles.itemDiv}>
    <Columns>
      <Column isSize="1/2">
        <Title isSize={5}>{item.url ? <a href={item.url}>{item.name}</a> : item.name}</Title>
        {item.publisher && <Subtitle isSize={5}>{item.publisher}</Subtitle>}
      </Column>
      {item.releaseDate && (
        <Column isSize="1/2" hasTextAlign="right" hasTextColor="info">
          <div style={styles.dateDiv}>
            <span style={styles.dateSpan}>{item.releaseDate}</span>
          </div>
        </Column>
      )}
    </Columns>
    {item.summary && <Content>{item.summary}</Content>}
  </div>
);

export const PublicationsList: React.FunctionComponent = (): React.ReactElement | null => {
  const publications = usePublications();

  if (!publications) {
    return null;
  }

  return (
    <Column isSize="1/2">
      <Card>
        <CardHeader>
          <CardHeaderIcon
            render={(): React.ReactElement => (
              <div style={styles.icon}>
                <Icon className="fas fa-newspaper" />
              </div>
            )}
          />
          <CardHeaderTitle style={styles.heading}>Publications</CardHeaderTitle>
        </CardHeader>
        <CardContent>
          {publications.map(
            (item: Publication, index: number, items: Publication[]): React.ReactElement => (
              <React.Fragment key={index}>
                <PublicationsElement item={item} />
                {index !== items.length - 1 && <hr />}
              </React.Fragment>
            )
          )}
        </CardContent>
      </Card>
    </Column>
  );
};
