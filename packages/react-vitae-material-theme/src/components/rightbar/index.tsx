import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import { WorkList } from '../work';
import { VolunteerList } from '../volunteer';
import { EducationList } from '../education';
import { ProjectsList } from '../projects';
import { AwardsList } from '../awards';
import { PublicationsList } from '../publications';

export const RightBar: React.FunctionComponent = (): React.ReactElement | null => (
  <Grid item xs={12} md={7}>
    <Box display="flex" flexDirection="column" padding={3}>
      <WorkList />
      <br />
      <VolunteerList />
      <br />
      <EducationList />
      <br />
      <ProjectsList />
      <br />
      <AwardsList />
      <br />
      <PublicationsList />
    </Box>
  </Grid>
);
