import React from 'react';
import { useBasic, Location } from 'react-vitae';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const renderAddress = (location: Location): string => {
    let address = '';
    if (location.address) {
        address += location.address;
    }
    if (location.city) {
        address += `, ${location.city}`;
    }
    if (location.region) {
        address += `, ${location.region}`;
    }
    if (location.countryCode) {
        address += ` (${location.countryCode})`;
    }
    if (location.postalCode) {
        address += `, ${location.postalCode}`;
    }
    return address;
};

export const Personal: React.FunctionComponent = (): React.ReactElement | null => {
    const basic = useBasic();

    if (!basic) {
        return null;
    }

    return (
        <Box>
            <Typography variant="h5" color="primary">
                Personal
            </Typography>
            <br />
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <b>Name</b>
                        </TableCell>
                        <TableCell>{basic.name}</TableCell>
                    </TableRow>
                    {basic.label && (
                        <TableRow>
                            <TableCell>
                                <b>Current Position</b>
                            </TableCell>
                            <TableCell>{basic.label}</TableCell>
                        </TableRow>
                    )}
                    {basic.email && (
                        <TableRow>
                            <TableCell>
                                <b>Email</b>
                            </TableCell>
                            <TableCell>{basic.email}</TableCell>
                        </TableRow>
                    )}
                    {basic.phone && (
                        <TableRow>
                            <TableCell>
                                <b>Phone</b>
                            </TableCell>
                            <TableCell>{basic.phone}</TableCell>
                        </TableRow>
                    )}
                    {basic.location && (
                        <TableRow>
                            <TableCell>
                                <b>Address</b>
                            </TableCell>
                            <TableCell>{renderAddress(basic.location)}</TableCell>
                        </TableRow>
                    )}
                    {basic.url && (
                        <TableRow>
                            <TableCell>
                                <b>Website</b>
                            </TableCell>
                            <TableCell>
                                <a href={basic.url}>{basic.url}</a>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </Box>
    );
};
