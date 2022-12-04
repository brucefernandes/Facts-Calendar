import React, { FC } from 'react'
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid';
import { FactType } from '../types';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';


interface favoritesProps {
    favorites: (FactType | null)[]
}

const columns: GridColDef[] = [
    {
        field: 'text',
        headerName: 'Fact',
        width: 750,

    },
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

    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const [value, setValue] = React.useState('');

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        const id = event.currentTarget.parentElement!.dataset.id!;
        const row = favorites.find((obj) => {
            return obj!.id == Number(id)
        })

        setValue(row!.text);
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };


    const open = Boolean(anchorEl);

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: "400px", width: "1050px" }}>
                <DataGrid
                    rows={favorites}
                    columns={columns}
                    pageSize={7}
                    rowsPerPageOptions={[5]}
                    density={'compact'}
                    sx={{
                        color: '#ebebeb',
                        bgcolor: '#618985',
                        boxShadow: 3,
                        borderRadius: 2,
                        p: 2,
                        minWidth: 300,
                        fontSize: 16,
                        fontWeight: "medium"
                    }}
                    componentsProps={{
                        cell: {
                            onMouseEnter: handlePopoverOpen,
                            onMouseLeave: handlePopoverClose,
                        },
                    }}
                />
                <Popover
                    sx={{
                        pointerEvents: 'none',
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                >
                    {/* styling issues can be handled with wrapping a card or paper component */}
                    <Typography sx={{ p: 1, fontWeight: "medium", bgcolor: '#618985', color: '#042a2b' }} noWrap={true} width="auto">{value}</Typography>
                </Popover>
            </div>
        </div>
    )
}

export default Favorites