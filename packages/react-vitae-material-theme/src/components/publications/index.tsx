import React from 'react';
import { usePublications, Publication } from 'react-vitae';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { stepperStyle } from '../../commonStyles';

const useStyles = makeStyles(
  stepperStyle({
    position: {
      textTransform: 'uppercase',
    },
  })
);

export const PublicationsList: React.FunctionComponent = (): React.ReactElement | null => {
  const publications = usePublications();
  const classes = useStyles();

  if (!publications) {
    return null;
  }

  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h5" color="primary">
        Publications
      </Typography>
      <br />
      {publications.map(
        (item: Publication): React.ReactElement => (
          <div key={item.name} className={classes.stepContainer}>
            <div className={classes.stepDotContainer}>
              <span className={classes.stepDot} />
            </div>
            <Typography variant="h6" component="a" className={classes.stepLinkText} {...{ href: item.url }}>
              {item.name}
            </Typography>
            <div className={classes.stepLineContainer}>
              <span className={classes.stepLine} />
            </div>
            <div className={classes.stepDate}>
              {item.releaseDate && <Typography variant="caption">{item.releaseDate}</Typography>}
            </div>
            <div className={classes.stepContent}>
              {item.publisher && (
                <Typography variant="subtitle1" className={classes.position}>
                  {item.publisher}
                </Typography>
              )}
              {item.summary && <Typography variant="body2">{item.summary}</Typography>}
              <br />
              <Divider />
            </div>
          </div>
        )
      )}
    </Box>
  );
};
