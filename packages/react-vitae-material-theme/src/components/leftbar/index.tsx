import React from 'react';
import { createStyles, makeStyles, StyleRules, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import { Personal } from '../personal';
import { Skills } from '../skills';
import { Languages } from '../languages';
import { Interests } from '../interests';
import { References } from '../references';

const useStyles = makeStyles(
  (theme: Theme): StyleRules =>
    createStyles({
      leftBox: {
        boxShadow: 'rgba(0, 0, 0, 0.2) 8px 0px 4px -3px',
        padding: theme.spacing(3),
      },
    })
);

export const LeftBar: React.FunctionComponent = (): React.ReactElement | null => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={5} style={{ minHeight: '100%' }}>
      <Box className={classes.leftBox} height="100%">
        <Personal />
        <br />
        <Skills />
        <br />
        <Languages />
        <br />
        <Interests />
        <br />
        <References />
      </Box>
    </Grid>
  );
};
