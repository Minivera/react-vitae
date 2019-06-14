import React from 'react';
import { useLanguages, Language } from 'react-vitae';
import { createStyles, makeStyles, StyleRules, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(
    (theme: Theme): StyleRules =>
        createStyles({
            wrapper: {
                margin: theme.spacing(1),
                position: 'relative',
                width: 98,
                height: 98,
            },
            element: {
                position: 'relative',
                top: -6,
                left: -6,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            },
            progress: {
                position: 'absolute',
                top: -6,
                left: -6,
                zIndex: 1,
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

export const Languages: React.FunctionComponent = (): React.ReactElement | null => {
    const languages = useLanguages();
    const classes = useStyles();

    if (!languages) {
        return null;
    }

    return (
        <Box>
            <Typography variant="h5" color="primary">
                Languages
            </Typography>
            <br />
            <Box display="flex" flexWrap="wrap">
                {languages.map((language: Language): React.ReactElement => (
                    <div key={language.language} className={classes.wrapper}>
                        <Typography variant="body2" className={classes.element}>
                            <b>{language.language}</b>
                        </Typography>
                        {language.fluency && (
                            <CircularProgress
                                size={98}
                                variant="static"
                                value={levelToProgress(language.fluency)}
                                className={classes.progress}
                            />
                        )}
                    </div>
                ))}
            </Box>
        </Box>
    );
};
