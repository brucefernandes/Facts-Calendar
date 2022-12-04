import React, { FC } from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { FactType } from '../types';
import Slide from '@mui/material/Slide';


interface favoritesProps {
    favorites: (FactType | null)[]
}

const columns: GridColDef[] = [
    { field: 'text', headerName: 'Fact', width: 150 },
    {
        field: 'date',
        headerName: 'Date',
        type: 'number',
        width: 90,
    },
    {
        field: 'month',
        headerName: 'Month',
        type: 'number',
        width: 90,
    },

];
const Favorites: FC<favoritesProps> = ({ favorites }) => {
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 400, width: "750px" }}>
                <DataGrid
                    rows={favorites}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </div>
    )
}

export default Favorites