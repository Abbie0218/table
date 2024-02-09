
import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Checkbox, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

interface Column {
    id: string;
    label: string;
}

interface Styles {
    headerBgColor: string,
    headerTxtColor: string,
    hoverRowBgColor: string
}

interface Props {
    columns: Column[];
    data: any[]; // Array of objects
    onRowDelete: (index: number) => void;
    styles: Styles
}

const CommonTable: React.FC<Props> = ({ columns, data, onRowDelete, styles }) => {
    return (
        <Table>
            <TableHead>
                <TableRow sx={{ background: styles.headerBgColor }}>
                    <TableCell padding="checkbox">
                        <Checkbox color="primary" />
                    </TableCell>
                    {columns.map((column) => (
                        <TableCell key={column.id} sx={{ color: styles.headerTxtColor }}>{column.label}</TableCell>
                    ))}
                    <TableCell sx={{ color: styles.headerTxtColor }}>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((row, rowIndex) => {
                    debugger;
                    return (
                        <TableRow key={rowIndex} sx={{ '&:hover': { backgroundColor: styles.hoverRowBgColor } }}>
                            <TableCell padding="checkbox">
                                <Checkbox color="primary" />
                            </TableCell>
                            {columns.map((column) => {
                                debugger;
                                return (
                                    <TableCell key={column.id}>{row[column.id]}</TableCell>
                                )
                            })}
                            <TableCell>
                                <IconButton onClick={() => onRowDelete(rowIndex)} color="error">
                                    <Delete />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    );
};

export default CommonTable;
