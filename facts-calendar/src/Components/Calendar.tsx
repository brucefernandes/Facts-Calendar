import React, { FC } from 'react'
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { FactType } from '../types';



interface calendarProps {
    setFact: (fact: FactType) => void
}

const Calendar: FC<calendarProps> = ({ setFact }) => {


    const [value, setValue] = useState<Dayjs | null>(dayjs());

    useEffect(() => {

        let factQuery = async () => {

            let factInfo = {} as FactType
            let date = value ? value.date() : 20
            let month = value ? value.month() + 1 : 4

            const response = await axios.get(`https://cors-anywhere.herokuapp.com/http://numbersapi.com/${month}/${date}/date?json`, {
                headers: {
                  'x-requested-with': 'text/plain'
                }
              })

            factInfo.text = response.data.text
            factInfo.date = date
            factInfo.month = month
            factInfo.id = Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1 * 100);

            setFact(factInfo)

        }

        factQuery()

    }, [value])


    return (
        <div className="calender">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDatePicker
                    displayStaticWrapperAs="desktop"
                    openTo="day"
                    value={value}
                    onChange={(newValue) => { setValue(newValue); }}
                    renderInput={(params) => <TextField {...params} />}

                />

            </LocalizationProvider>
        </div>
    )
}

export default Calendar
