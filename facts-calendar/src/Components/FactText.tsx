import React, { FC } from 'react'
import { FactType } from '../types';


import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';




interface displayProps {
    fact: FactType | null;
    addFavorite: (newFavorite: FactType) => void;
}

const FactText: FC<displayProps> = ({ fact, addFavorite }) => {

    const handleLike = () => {
        if (fact) addFavorite(fact)

    }

    return (
        <div>
            {fact ? fact.text : "No fact available :("}


            <Tooltip title="Tap to Like!" arrow>
                <IconButton onClick={handleLike}>
                    <FavoriteIcon fontSize="medium" style={{ fill: "#d84727" }} />
                </IconButton>
            </Tooltip>
        </div>
    )
}

export default FactText