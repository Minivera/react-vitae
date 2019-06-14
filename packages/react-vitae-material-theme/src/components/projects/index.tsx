import React from 'react';
import { useProjects, Project } from 'react-vitae';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';

import { stepperStyle } from '../../commonStyles';

const useStyles = makeStyles(
    stepperStyle(
        (theme: Theme): object => ({
            dateTo: {
                marginLeft: '0.3rem',
                marginRight: '0.3rem',
            },
            position: {
                textTransform: 'uppercase',
            },
            chip: {
                marginRight: theme.spacing(1),
                marginBottom: theme.spacing(1),
            },
        })
    )
);

export const ProjectsList: React.FunctionComponent = (): React.ReactElement | null => {
    const projects = useProjects();
    const classes = useStyles();

    if (!projects) {
        return null;
    }

    return (
        <Box display="flex" flexDirection="column">
            <Typography variant="h5" color="primary">
                Projects
            </Typography>
            <br />
            {projects.map(
                (item: Project): React.ReactElement => (
                    <div key={item.name} className={classes.stepContainer}>
                        <div className={classes.stepDotContainer}>
                            <span className={classes.stepDot} />
                        </div>
                        <Typography variant="h6" className={classes.stepText}>
                            {`${item.type}${!item.type ? item.entity : ` @ ${item.entity}`}`}
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
                            {item.roles && (
                                <Typography variant="subtitle1" className={classes.position}>
                                    {item.roles.join(', ')}
                                </Typography>
                            )}
                            {item.description && <Typography variant="body2">{item.description}</Typography>}
                            {item.highlights && (
                                <ul>
                                    {item.highlights.map(
                                        (highlight: string): React.ReactElement => (
                                            <li>
                                                <Typography variant="body2">{highlight}</Typography>
                                            </li>
                                        )
                                    )}
                                </ul>
                            )}
                            {item.keywords && (
                                <Box display="flex">
                                    {item.keywords.map(
                                        (keyword: string): React.ReactElement => (
                                            <Chip
                                                key={keyword}
                                                label={keyword}
                                                color="secondary"
                                                className={classes.chip}
                                            />
                                        )
                                    )}
                                </Box>
                            )}
                            <Divider />
                        </div>
                    </div>
                )
            )}
        </Box>
    );
};
