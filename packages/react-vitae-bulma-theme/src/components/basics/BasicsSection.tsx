import React from 'react';
import { Box, Image, Title, Subtitle, Content } from 'bloomer';
import { useBasic } from 'react-vitae';

import { Contact } from './Contact';
import { Profiles } from './Profiles';
import ModifiedDivider from '../internals/ModifiedDivider';

const styles: { [s: string]: React.CSSProperties } = {
  mainBox: {
    overflow: 'hidden',
    height: 'fit-content',
  },
  divider: {
    marginLeft: '-1.25rem',
    marginRight: '-1.25rem',
  },
  imageHolder: {
    marginTop: '-1.25rem',
    marginLeft: '-1.25rem',
    marginRight: '-1.25rem',
  },
  nameHolder: {
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  levelMenu: {
    flexDirection: 'column',
    paddingTop: '0.5rem',
    marginLeft: '-1rem',
    marginRight: '-1rem',
  },
  levelMenuItem: {
    fontSize: '1.25rem',
    textTransform: 'uppercase',
    display: 'block',
    width: '100%',
  },
  activeItem: {
    backgroundColor: '#3273dc',
    borderRadius: 2,
  },
};

export const BasicsSection: React.FunctionComponent = (): React.ReactElement | null => {
  const basics = useBasic();

  if (!basics) {
    return null;
  }

  return (
    <Box style={styles.mainBox} id="basics">
      {basics.image && (
        <div style={styles.imageHolder}>
          <Image isRatio="square" src={basics.image} />
        </div>
      )}
      <div style={styles.nameHolder}>
        <Title isSize={1}>{basics.name}</Title>
        {basics.label && <Subtitle isSize={3}>{basics.label}</Subtitle>}
      </div>
      {basics.summary && (
        <Content>
          <p>{basics.summary}</p>
        </Content>
      )}
      <ModifiedDivider style={styles.divider} isHidden={['tablet', 'desktop', 'widescreen']} />
      <hr style={styles.divider} />
      <Contact email={basics.email} phone={basics.phone} url={basics.url} location={basics.location} />
      <Profiles profiles={basics.profiles} />
    </Box>
  );
};
