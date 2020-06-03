import React from 'react';
import { useSkills, Skill } from 'react-vitae';
import { createStyles, makeStyles, StyleRules, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(
  (theme: Theme): StyleRules =>
    createStyles({
      gridElement: {
        paddingLeft: 0,
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        paddingRight: 0,
      },
      gridSlider: {
        marginTop: '0.5rem',
      },
      chip: {
        marginLeft: theme.spacing(1),
      },
    })
);

const levelToProgress = (level: string): number => {
  switch (level) {
    case 'Basic':
      return 20;
    case 'Initiated':
      return 40;
    case 'Average':
      return 60;
    case 'Competent':
      return 80;
    case 'Master':
      return 100;
    default:
      return 60;
  }
};

export const Skills: React.FunctionComponent = (): React.ReactElement | null => {
  const skills = useSkills();
  const classes = useStyles();

  if (!skills) {
    return null;
  }

  return (
    <Box>
      <Typography variant="h5" color="primary">
        Skills
      </Typography>
      <br />
      {skills.map(
        (skill: Skill): React.ReactElement => (
          <Box key={skill.name}>
            <Grid container>
              <Grid item xs={skill.level ? 4 : 12} className={classes.gridElement}>
                <Typography variant="body2">
                  <b>{skill.name}</b>
                </Typography>
              </Grid>
              {skill.level && (
                <Grid item xs={8} className={classes.gridElement}>
                  <LinearProgress
                    variant="determinate"
                    value={levelToProgress(skill.level)}
                    className={classes.gridSlider}
                  />
                </Grid>
              )}
            </Grid>
            <Box display="flex">
              {skill.keywords &&
                skill.keywords.map(
                  (keyword: string): React.ReactElement => (
                    <Chip key={keyword} label={keyword} className={classes.chip} color="secondary" />
                  )
                )}
            </Box>
          </Box>
        )
      )}
    </Box>
  );
};
