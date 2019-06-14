import React from 'react';
import { useBasic, Profile } from 'react-vitae';
import { createStyles, makeStyles, Theme, StyleRules } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(
    (theme: Theme): StyleRules =>
        createStyles({
            iconBlock: {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.grey['100'],
                borderRadius: '50%',
                width: 68,
                height: 68,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: theme.shadows[2],
            },
            networkUrl: {
                color: theme.palette.grey['100'],
                marginTop: theme.spacing(1),
            },
            link: {
                color: theme.palette.grey['100'],
            }
        })
);

export const Profiles: React.FunctionComponent = (): React.ReactElement | null => {
    const classes = useStyles();
    const basic = useBasic();

    if (!basic || !basic.profiles) {
        return null;
    }

    return (
        <Container fixed>
            <Box display="flex" flexWrap="wrap" justifyContent="space-around" marginTop={3} marginBottom={3}>
                {basic.profiles.map((profile: Profile): React.ReactElement => (
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" margin={1}>
                        <div className={classes.iconBlock}>
                            <Icon fontSize="large" className={`fab fa-${profile.network}`} />
                        </div>
                        <Typography variant="body2" className={classes.networkUrl}>
                            <a className={classes.link} href={profile.url}>{profile.url}</a>
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Container>
    );
};
