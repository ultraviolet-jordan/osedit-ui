import React, { useEffect, useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { getAllNpcs } from '../../service/npc';
import NpcList from './NpcList';

import TablePagination from '@material-ui/core/TablePagination';


const NpcPagination = () => {
    const [page, setPage] = useState(2);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TablePagination
            component="div"
            count={100}
            page={page}
            onChangePage={handleChangePage}
            rowsPerPage={rowsPerPage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    );
}

const NpcSearchHeader = (npcs) => {
    return (
        <div style={{ width: 300 }}>
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={[...new Set(npcs.map(item => item.name))]}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search input"
                        margin="normal"
                        variant="outlined"
                        InputProps={{ ...params.InputProps, type: 'search' }}
                    />
                )}
            />
        </div>
    );
}

const NpcDashboard = () => {
    const [state, setState] = useState({
        isLoaded: false,
        npcs: [],
        searchText: null,
        totalElements: 0
    });

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setState({ isLoaded: false, npcs: [] });
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setState({ isLoaded: false, npcs: [] });
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    useEffect(() => {
        getAllNpcs({ searchText: state.searchText, skip: page, take: rowsPerPage }).then((response) => {
            setState({ isLoaded: true, npcs: response.content, totalElements: response.totalElements })
        });
    }, [page, rowsPerPage]);


    const pagination = <TablePagination
        component="div"
        count={state.totalElements}
        page={page}
        onChangePage={handleChangePage}
        rowsPerPage={rowsPerPage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
    />;

    return (
        <div className="npcs-container container">
            <div title="npcs-container-title container-title" style={{display:'flex', justifyContent:'center'}}>
                <h1>OSRS Npcs: {state.totalElements} </h1>
            </div>
            { pagination }
            { NpcSearchHeader(state.npcs)}
            { state.isLoaded && <NpcList npcs={state.npcs} /> }
            { pagination}
        </div>
    )
}




export default NpcDashboard;