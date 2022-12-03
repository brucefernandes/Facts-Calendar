import React, { FC } from 'react'
import Calendar from './Calendar'
import FactDisplay from './FactDisplay'
import { useEffect, useState } from 'react';
import { FactType } from '../types';


const Base: FC = () => {

    const [fact, setFact] = useState<FactType | null>(null)

    return (
        <div>
            <Calendar setFact={setFact} />
            <FactDisplay fact={fact} />
        </div>
    )
}

export default Base