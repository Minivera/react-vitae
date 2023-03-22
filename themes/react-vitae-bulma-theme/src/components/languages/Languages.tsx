import React from 'react';
import { Card, CardHeader, CardContent, CardHeaderTitle, CardHeaderIcon, Icon, Column, Title, Subtitle } from 'bloomer';
import { Language, useLanguages } from 'react-vitae';

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
};

const LanguagesElement: React.FunctionComponent<{ item: Language }> = ({ item }): React.ReactElement | null => (
  <React.Fragment>
    <Title isSize={5}>{item.language}</Title>
    {item.fluency && <Subtitle isSize={5}>{item.fluency}</Subtitle>}
  </React.Fragment>
);

export const LanguagesList: React.FunctionComponent = (): React.ReactElement | null => {
  const languages = useLanguages();

  if (!languages) {
    return null;
  }

  return (
    <Column isSize="1/2">
      <Card style={{ height: '100%' }}>
        <CardHeader>
          <CardHeaderIcon
            render={(): React.ReactElement => (
              <div style={styles.icon}>
                <Icon className="fas fa-language" />
              </div>
            )}
          />
          <CardHeaderTitle style={styles.heading}>Languages</CardHeaderTitle>
        </CardHeader>
        <CardContent>
          {languages.map(
            (item: Language, index: number, items: Language[]): React.ReactElement => (
              <React.Fragment key={index}>
                <LanguagesElement item={item} />
                {index !== items.length - 1 && <hr />}
              </React.Fragment>
            )
          )}
        </CardContent>
      </Card>
    </Column>
  );
};
