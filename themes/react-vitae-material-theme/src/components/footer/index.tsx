import React from 'react';
import { useBasic } from 'react-vitae';
import { createStyles, makeStyles, Theme, StyleRules } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { Profiles } from '../profiles';

const useStyles = makeStyles(
  (theme: Theme): StyleRules =>
    createStyles({
      subbar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.grey['100'],
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 2px 1px',
      },
      fullbar: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.grey['100'],
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 4px 3px',
      },
      link: {
        color: theme.palette.grey['100'],
      },
    })
);

export const Footer: React.FunctionComponent = (): React.ReactElement | null => {
  const classes = useStyles();
  const basics = useBasic();

  if (!basics || !basics.profiles) {
    return null;
  }

  return (
    <Box display="flex" flexDirection="column">
      <Paper className={classes.subbar} square elevation={2}>
        <Profiles />
      </Paper>
      <Paper className={classes.fullbar} square elevation={2}>
        <Box padding={2} textAlign="center">
          <Typography variant="body2">
            Made with{' '}
            <a className={classes.link} href="https://github.com/Minivera/react-vitae">
              react-vitae
            </a>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};
