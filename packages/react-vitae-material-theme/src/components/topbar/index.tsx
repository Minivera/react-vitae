import React from 'react';
import { useBasic } from 'react-vitae';
import { createStyles, makeStyles, Theme, StyleRules } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(
    (theme: Theme): StyleRules =>
        createStyles({
            profileImage: {
                margin: 10,
                marginRight: theme.spacing(4),
                width: 120,
                height: 120,
            },
            title: {
                marginTop: theme.spacing(2),
                marginBottom: theme.spacing(2),
            },
            subtitle: {
                color: theme.palette.grey['300'],
                fontWeight: theme.typography.fontWeightLight,
            },
            subbar: {
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.grey['100'],
            },
            summary: {
                paddingTop: theme.spacing(2),
                paddingBottom: theme.spacing(2),
            },
        })
);

export const TopBar = (): React.ReactElement | null => {
    const basics = useBasic();
    const classes = useStyles();

    if (!basics) {
        return null;
    }

    return (
        <Box display="flex" flexDirection="column">
            <AppBar position="static" elevation={5}>
                <Container fixed>
                    <Box display="flex" alignItems="center" marginTop="3rem" marginBottom="3rem">
                        {basics.image && (
                            <Avatar alt={basics.name} src={basics.image} className={classes.profileImage} />
                        )}
                        <Box display="flex" flexDirection="column">
                            <Typography variant="h2" component="h2" className={classes.title}>
                                {basics.name}
                            </Typography>
                            {basics.label && (
                                <Typography variant="h5" className={classes.subtitle}>
                                    {basics.label}
                                </Typography>
                            )}
                        </Box>
                    </Box>
                </Container>
            </AppBar>
            {basics.summary && (
                <Paper className={classes.subbar} square>
                    <Container fixed>
                        <Typography variant="body1" component="p" className={classes.summary}>
                            {basics.summary}
                        </Typography>
                    </Container>
                </Paper>
            )}
        </Box>
    );
};
