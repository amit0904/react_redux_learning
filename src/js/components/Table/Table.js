import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import './Table.css'

export default function Table(props){


    const displayBooking = props.bookingArray.map( bookingElement => {return (<TableBody  key={bookingElement.id}
                                                                                          id = {bookingElement.id}
                                                                                          name={bookingElement.name}
                                                                                          trainNumber={bookingElement.trainNumber} 
                                                                                          travelDate={bookingElement.travelDate} 
                                                                                          checked = {bookingElement.checked}  /> )})

    return(
        <table className="table">
            <TableHeader/>
            {displayBooking}
        </table>

    )
}