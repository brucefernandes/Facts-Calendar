import React, { FC } from 'react'
import Calendar from './Calendar'
import FactText from './FactText'
import Favorites from './Favorites';
import { useEffect, useState } from 'react';
import { FactType } from '../types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';



const Base: FC = () => {

    const [fact, setFact] = useState<FactType | null>(null)
    const [favorites, setFavorites] = useState<Array<FactType | null>>([])
    console.log(favorites);

    const addFavorite = (favorite: FactType | null) => {
        favorites.includes(favorite) || setFavorites([...favorites, favorite])
    }

    return (
        <div className='base'>
            <Box sx={{ flexGrow: 1 }}>

                <Grid container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '100vh' }} >

                    <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={2000}>
                        <Grid item >
                            <Calendar setFact={setFact} />
                        </Grid>
                    </Grow>

                    <Grid item >
                        <FactText fact={fact} addFavorite={addFavorite} />
                    </Grid>
                    <Grow
                        in={true}
                        style={{ transformOrigin: '0 0 0' }}
                        timeout={5000}
                    >
                        <Grid item >
                            {favorites.length != 0 && <Favorites favorites={favorites} />}
                        </Grid>
                    </Grow>


                </Grid>
            </Box>


        </div>
    )
}

export default Base