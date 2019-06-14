import { createStyles, StyleRules, Theme } from '@material-ui/core/styles';

export const stepperStyle = (overrides: object): ((theme: Theme) => StyleRules) => (theme: Theme): StyleRules =>
    createStyles({
        stepContainer: {
            display: 'grid',
            gridTemplateColumns: '2rem auto 10rem',
            gridTemplateRows: '2rem, auto',
        },
        stepDotContainer: {
            gridColumn: 1,
            gridRow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        stepDot: {
            position: 'relative',
            borderRadius: '50%',
            backgroundColor: `${theme.palette.primary.light}80`,
            height: '1.5rem',
            width: '1.5rem',
            boxShadow: theme.shadows[2],
            '&::after': {
                position: 'absolute',
                content: '" "',
                backgroundColor: theme.palette.primary.main,
                height: '0.8rem',
                width: '0.8rem',
                borderRadius: '50%',
                top: 'calc(50% - 0.4rem)',
                left: 'calc(50% - 0.4rem)',
                boxShadow: theme.shadows[2],
            },
        },
        stepText: {
            gridColumn: 2,
            gridRow: 1,
            marginLeft: theme.spacing(1),
            textDecoration: 'none',
            color: theme.palette.primary.light,
        },
        stepLinkText: {
            gridColumn: 2,
            gridRow: 1,
            marginLeft: theme.spacing(1),
            textDecoration: 'none',
            color: theme.palette.primary.light,
            cursor: 'pointer',
            '&:hover': {
                textDecoration: 'underline',
                color: theme.palette.text.primary,
            },
        },
        stepLineContainer: {
            gridColumn: 1,
            gridRow: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        stepLine: {
            height: `calc(100% + ${theme.spacing(1)}px)`,
            borderLeft: `solid 2px ${theme.palette.primary.light}80`,
            boxShadow: theme.shadows[2],
        },
        stepContent: {
            gridColumnStart: 2,
            gridColumnEnd: 4,
            gridRow: 2,
            marginLeft: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
        stepDate: {
            gridColumn: 3,
            gridRow: 1,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            color: theme.palette.primary.light,
        },
        ...(typeof overrides === 'function' ? overrides(theme) : overrides),
    });
