import * as React from 'react'
import Info from '../core/Explorer'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';
import moment from 'moment'
function createData(id, block, length, createdAt, nonce, hash) {
    return { id, block, length, createdAt, nonce, hash };
}
const columns = [
    {
        width: 60,
        label: 'Block#',
        dataKey: 'block',
    },
    {
        width: 120,
        label: 'Transaction length',
        dataKey: 'length',
        time: true,
    },
    {
        width: 120,
        label: 'Created At',
        dataKey: 'createdAt',
    },
    {
        width: 120,
        label: 'Nonce',
        dataKey: 'nonce',
    },
    {
        width: 200,
        label: 'Hash',
        dataKey: 'hash',
    },
];
const rows = [
    createData(1, 1, 1, moment.now(), 1, 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'),
    createData(1, 1, 1, moment.now(), 1, 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'),
    createData(1, 1, 1, moment.now(), 1, 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'),
    createData(1, 1, 1, moment.now(), 1, 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'),
    createData(1, 1, 1, moment.now(), 1, 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'),
]
const VirtuosoTableComponents = {
    Scroller: React.forwardRef((props, ref) => (
        <TableContainer component={Paper} {...props} ref={ref} />
    )),
    Table: (props) => (
        <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
    ),
    TableHead,
    TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
    TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};
function fixedHeaderContent() {
    return (
        <TableRow>
            {columns.map((column) => (
                <TableCell
                    key={column.dataKey}
                    variant="head"
                    align='left'
                    style={{ width: column.width }}
                    sx={{
                        backgroundColor: 'background.paper',
                    }}
                >
                    {column.label}
                </TableCell>
            ))}
        </TableRow>
    );
}

function rowContent(_index, row) {
    return (
        <React.Fragment>
            {columns.map((column) => (
                <TableCell
                    key={column.dataKey}
                    align='left'
                >
                    {row[column.dataKey]}
                </TableCell>
            ))}
        </React.Fragment>
    );
}
const Block = () => {
    return (
        <Box
            sx={{
                width: '100vw',
                flexGrow: 1,
            }}
        >
            <Info />
            <Box
                sx={{
                    width: '100vw',
                    margin: '20px 80px',
                    flexGrow: 1,
                }}
            >
                <Typography variant="h5" gutterBottom color='blue' margin='40px '>
                    Latest Blocks
                </Typography>
                <Paper style={{ height: 400, width: '100%', maxWidth: 1000 }}>
                    <TableVirtuoso
                        data={rows}
                        components={VirtuosoTableComponents}
                        fixedHeaderContent={fixedHeaderContent}
                        itemContent={rowContent}
                    />
                </Paper>
            </Box>
        </Box>
    )
}
export default Block