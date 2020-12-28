import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.combatLevel}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                Information
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableBody>
                                    <TableRow><TableCell>Standing Animation ({row.standingAnimation})</TableCell></TableRow>
                                    <TableRow><TableCell>Rotate Left Animation ({row.rotateLeftAnimation})</TableCell></TableRow>
                                    <TableRow><TableCell>Rotate Right Animation ({row.rotateRightAnimation})</TableCell></TableRow>
                                    <TableRow><TableCell>Walking Animation ({row.walkingAnimation})</TableCell></TableRow>
                                    <TableRow><TableCell>Rotate 180 Animation ({row.rotate180Animation})</TableCell></TableRow>
                                    <TableRow><TableCell>Rotate 90 Right Animation ({row.rotate90RightAnimation})</TableCell></TableRow>
                                    <TableRow><TableCell>Rotate 90 Left Animation ({row.rotate90LeftAnimation})</TableCell></TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        calories: PropTypes.number.isRequired,
        carbs: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            }),
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        protein: PropTypes.number.isRequired,
    }).isRequired,
};

const createRows = (npcs) => {
    return npcs.map((npc) => ({
        name: npc.name,
        combatLevel: npc.combatLevel,
        standingAnimation: npc.standingAnimation,
        rotateLeftAnimation: npc.rotateLeftAnimation,
        rotateRightAnimation: npc.rotateRightAnimation,
        walkingAnimation: npc.walkingAnimation,
        rotate180Animation: npc.rotate180Animation,
        rotate90RightAnimation: npc.rotate90RightAnimation,
        rotate90LeftAnimation: npc.rotate90LeftAnimation
    }));
}

function BuildTable(npcs) {
    const rows = createRows(npcs);

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>NPC Name</TableCell>
                        <TableCell align="right">Combat Level</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const NpcList = (props) => {
    return (
        <div className="npc-list">
            { BuildTable(props.npcs)}
            {/* { props.npcs.map((npc, index) => <div key={index}>{npc.name}</div>)} */}
        </div>
    )
}

NpcList.proptype = {
    npcs: PropTypes.array.isRequired
};

export default NpcList;