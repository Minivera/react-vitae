import React from 'react';
import { useInterests, Interest } from 'react-vitae';
import { createStyles, makeStyles, StyleRules, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
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
            chip: {
                marginLeft: theme.spacing(1),
            },
        })
);

export const Interests: React.FunctionComponent = (): React.ReactElement | null => {
    const interests = useInterests();
    const classes = useStyles();

    if (!interests) {
        return null;
    }

    return (
        <Box>
            <Typography variant="h5" color="primary">
                Interests
            </Typography>
            <br />
            {interests.map(
                (interest: Interest): React.ReactElement => (
                    <Box key={interest.name} display="flex" alignItems="center">
                        <Typography variant="body2">
                            <b>{interest.name}</b>
                        </Typography>
                        {interest.keywords && (
                            <Box display="flex">
                                {interest.keywords &&
                                    interest.keywords.map(
                                        (keyword: string): React.ReactElement => (
                                            <Chip
                                                key={keyword}
                                                label={keyword}
                                                className={classes.chip}
                                                color="secondary"
                                            />
                                        )
                                    )}
                            </Box>
                        )}
                    </Box>
                )
            )}
        </Box>
    );
};
