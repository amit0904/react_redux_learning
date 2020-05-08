import React from 'react'
import Table from './js/components/Table/Table'
import {useSelector} from 'react-redux'

function CurrentBookings(){

    const bookingArray = useSelector(state => {return state.bookings})

    return ( 
        bookingArray.length !== 0 ? <Table bookingArray={bookingArray}/> : null
    )
}

export default CurrentBookings