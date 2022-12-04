import React, { FC } from 'react'
import Calendar from './Calendar'
import FactText from './FactText'
import Favorites from './Favorites';
import { useEffect, useState } from 'react';
import { FactType } from '../types';


const Base: FC = () => {

    const [fact, setFact] = useState<FactType | null>(null)
    const [favorites, setFavorites] = useState<Array<FactType | null>>([])
    console.log(favorites);

    const addFavorite = (favorite: FactType | null) => {
        favorites.includes(favorite) || setFavorites([...favorites, favorite])
    }

    return (
        <div className='base'>
            <Calendar setFact={setFact} />
            <FactText fact={fact} addFavorite={addFavorite} />
            {favorites.length != 0 && <Favorites favorites={favorites} />}
        </div>
    )
}

export default Base