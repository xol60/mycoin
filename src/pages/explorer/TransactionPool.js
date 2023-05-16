import * as React from 'react'
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
function createData(id, amount, from, to) {
    return { id, amount, from, to };
}
const columns = [
    {
        width: 200,
        label: 'TransactionPool Id#',
        dataKey: 'id',
    },
    {
        width: 60,
        label: 'Amount',
        dataKey: 'amount',
    },
    {
        width: 200,
        label: 'From',
        dataKey: 'from',
    },
    {
        width: 200,
        label: 'To',
        dataKey: 'to',
    },
];
const rows = [
    createData(1, 1, 'aaaaaaaaaaaaaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'),
    createData(1, 1, 'aaaaaaaaaaaaaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'),
    createData(1, 1, 'aaaaaaaaaaaaaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'),
    createData(1, 1, 'aaaaaaaaaaaaaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'),
    createData(1, 1, 'aaaaaaaaaaaaaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'),
    createData(1, 1, 'aaaaaaaaaaaaaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'),
    createData(1, 1, 'aaaaaaaaaaaaaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'),
    createData(1, 1, 'aaaaaaaaaaaaaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'),
    createData(1, 1, 'aaaaaaaaaaaaaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'),
    createData(1, 1, 'aaaaaaaaaaaaaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'),
    createData(1, 1, 'aaaaaaaaaaaaaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'),
    createData(1, 1, 'aaaaaaaaaaaaaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'),
    createData(1, 1, 'aaaaaaaaaaaaaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'),
    createData(1, 1, 'aaaaaaaaaaaaaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'),
    createData(1, 1, 'aaaaaaaaaaaaaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'),
    createData(1, 1, 'aaaaaaaaaaaaaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'),
    createData(1, 1, 'aaaaaaaaaaaaaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'),
    createData(1, 1, 'aaaaaaaaaaaaaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'),
    createData(1, 1, 'aaaaaaaaaaaaaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'),
    createData(1, 1, 'aaaaaaaaaaaaaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'),
    createData(1, 1, 'aaaaaaaaaaaaaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'),
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
const TransactionPool = () => {
    return (
        <Box
            sx={{
                width: '100vw',
                margin: '20px 80px',
                flexGrow: 1,
            }}
        >
            <Typography variant="h5" gutterBottom color='blue' margin='40px '>
                Transaction Pool
            </Typography>
            <Paper style={{ height: 400, width: '100%', maxWidth: 1300 }}>
                <TableVirtuoso
                    data={rows}
                    components={VirtuosoTableComponents}
                    fixedHeaderContent={fixedHeaderContent}
                    itemContent={rowContent}
                />
            </Paper>
        </Box>
    )
}
export default TransactionPool