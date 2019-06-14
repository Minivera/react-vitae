import React from 'react';
import { useAwards, Award } from 'react-vitae';
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

export const AwardsList: React.FunctionComponent = (): React.ReactElement | null => {
    const awards = useAwards();
    const classes = useStyles();

    if (!awards) {
        return null;
    }

    return (
        <Box display="flex" flexDirection="column">
            <Typography variant="h5" color="primary">
                Awards
            </Typography>
            <br />
            {awards.map(
                (item: Award): React.ReactElement => (
                    <div key={item.title} className={classes.stepContainer}>
                        <div className={classes.stepDotContainer}>
                            <span className={classes.stepDot} />
                        </div>
                        <Typography variant="h6" className={classes.stepText}>
                            {item.title}
                        </Typography>
                        <div className={classes.stepLineContainer}>
                            <span className={classes.stepLine} />
                        </div>
                        <div className={classes.stepDate}>
                            {item.date && <Typography variant="caption">{item.date}</Typography>}
                        </div>
                        <div className={classes.stepContent}>
                            {item.awarder && (
                                <Typography variant="subtitle1" className={classes.position}>
                                    {item.awarder}
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
