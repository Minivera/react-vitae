import React from 'react';
import { useReferences, Reference } from 'react-vitae';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export const References: React.FunctionComponent = (): React.ReactElement | null => {
    const references = useReferences();

    if (!references) {
        return null;
    }

    return (
        <Box>
            <Typography variant="h5" color="primary">
                References
            </Typography>
            <br />
            <Table>
                <TableBody>
                    {references.map((reference: Reference): React.ReactElement => (
                        <TableRow>
                            <TableCell>
                                <b>{reference.name}</b>
                            </TableCell>
                            <TableCell>
                                {reference.reference}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    );
};
