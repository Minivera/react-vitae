import React from 'react';
import { useEducation, Education } from 'react-vitae';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { stepperStyle } from '../../commonStyles';

const useStyles = makeStyles(
  stepperStyle({
    dateTo: {
      marginLeft: '0.3rem',
      marginRight: '0.3rem',
    },
    position: {
      textTransform: 'uppercase',
    },
  })
);

export const EducationList: React.FunctionComponent = (): React.ReactElement | null => {
  const education = useEducation();
  const classes = useStyles();

  if (!education) {
    return null;
  }

  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h5" color="primary">
        Education
      </Typography>
      <br />
      {education.map(
        (item: Education): React.ReactElement => (
          <div key={item.institution} className={classes.stepContainer}>
            <div className={classes.stepDotContainer}>
              <span className={classes.stepDot} />
            </div>
            <Typography variant="h6" className={classes.stepText}>
              {`${item.studyType}${!item.studyType ? item.area : `, ${item.area}`}${
                (item.studyType || item.area) && ' @ '
              }${item.institution}`}
            </Typography>
            <div className={classes.stepLineContainer}>
              <span className={classes.stepLine} />
            </div>
            <div className={classes.stepDate}>
              {item.startDate && <Typography variant="caption">{item.startDate}</Typography>}
              {item.startDate && item.endDate && (
                <Typography variant="caption" className={classes.dateTo}>
                  {' '}
                  to{' '}
                </Typography>
              )}
              {item.endDate && <Typography variant="caption">{item.endDate}</Typography>}
            </div>
            <div className={classes.stepContent}>
              {item.courses && (
                <ul>
                  {item.courses.map(
                    (course: string): React.ReactElement => (
                      <li key={course}>
                        <Typography variant="body2">{course}</Typography>
                      </li>
                    )
                  )}
                </ul>
              )}
              <Divider />
            </div>
          </div>
        )
      )}
    </Box>
  );
};
