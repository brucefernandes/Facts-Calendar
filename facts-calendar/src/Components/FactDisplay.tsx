import React, { FC } from 'react'
import { FactType } from '../types';

interface displayProps {
    fact: FactType | null
}

const FactDisplay: FC<displayProps> = ({ fact }) => {
    return (
        <div>{fact ? fact.text : "No fact available :("}</div>
    )
}

export default FactDisplay