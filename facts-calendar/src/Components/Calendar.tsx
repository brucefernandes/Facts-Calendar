import React, { FC } from 'react'
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { FactType } from '../types';


interface calendarProps {
    setFact: (fact: FactType) => void
}


const Calendar: FC<calendarProps> = ({ setFact }) => {

    const [value, setValue] = useState<Dayjs | null>(dayjs('2022-04-20'));

    useEffect(() => {

        let factQuery = async () => {

            let factInfo = {} as FactType
            let date = value ? value.date() : 20
            let month = value ? value.month() + 1 : 4

            const response = await axios.get(`http://numbersapi.com/${month}/${date}/date?json`)

            factInfo.text = response.data.text
            factInfo.date = date
            factInfo.month = month

            setFact(factInfo)

        }

        factQuery()

    }, [value])


    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDatePicker
                    displayStaticWrapperAs="desktop"
                    openTo="day"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </div>
    )
}

export default Calendar