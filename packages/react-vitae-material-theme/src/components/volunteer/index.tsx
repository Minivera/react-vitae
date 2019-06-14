import React from 'react';
import { useVolunteer, Volunteer } from 'react-vitae';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { stepperStyle } from '../../commonStyles';

const useStyles = makeStyles(stepperStyle({
    dateTo: {
        marginLeft: '0.3rem',
        marginRight: '0.3rem',
    },
    position: {
        textTransform: 'uppercase',
    }
}));

export const VolunteerList: React.FunctionComponent = (): React.ReactElement | null => {
    const volunteer = useVolunteer();
    const classes = useStyles();

    if (!volunteer) {
        return null;
    }

    return (
        <Box display="flex" flexDirection="column">
            <Typography variant="h5" color="primary">
                Volunteer
            </Typography>
            <br />
            {volunteer.map((item: Volunteer): React.ReactElement => (
                <div key={item.organization} className={classes.stepContainer}>
                    <div className={classes.stepDotContainer}>
                        <span className={classes.stepDot}/>
                    </div>
                    <Typography variant="h6" component="a" className={classes.stepLinkText} {...{ href: item.url }}>
                        {item.organization}
                    </Typography>
                    <div className={classes.stepLineContainer}>
                        <span className={classes.stepLine} />
                    </div>
                    <div className={classes.stepDate}>
                        {item.startDate && <Typography variant="caption">{item.startDate}</Typography>}
                        {(item.startDate && item.endDate) && (
                            <Typography variant="caption" className={classes.dateTo}> to </Typography>
                        )}
                        {item.endDate && <Typography variant="caption">{item.endDate}</Typography>}
                    </div>
                    <div className={classes.stepContent}>
                        {item.position && (
                            <Typography variant="subtitle1" className={classes.position}>
                                {item.position}
                            </Typography>
                        )}
                        {item.summary && <Typography variant="body2">{item.summary}</Typography>}
                        {item.highlights && (
                            <ul>
                                {item.highlights.map((highlight: string): React.ReactElement => (
                                    <li key={highlight}>
                                        <Typography variant="body2">{highlight}</Typography>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <Divider />
                    </div>
                </div>
            ))}
        </Box>
    );
};
