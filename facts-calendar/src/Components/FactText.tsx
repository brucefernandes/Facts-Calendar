import React, { FC } from 'react'
import { FactType } from '../types';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';



interface displayProps {
    fact: FactType | null;
    addFavorite: (newFavorite: FactType) => void;
}

const FactText: FC<displayProps> = ({ fact, addFavorite }) => {

    const handleLike = () => {
        if (fact) addFavorite(fact)

    }

    return (
        <div className="factText">
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={2000}>
                <Typography
                    sx={{ p: 1, fontWeight: "medium", color: '#ebebeb' }}
                >
                    {fact ? fact.text : "No fact available :("}
                </Typography>
            </Grow>

            <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={2000}>
                <Tooltip title="Tap to Like!" arrow >
                    <IconButton onClick={handleLike}>
                        <ThumbUpIcon fontSize="medium" style={{ fill: "#93b7be" }} />
                    </IconButton>
                </Tooltip >
            </Grow>

        </div >
    )
}

export default FactText