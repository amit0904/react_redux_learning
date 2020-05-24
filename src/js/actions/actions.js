import React, {useState} from 'react'
import {NEW_BOOKING,CANCEL_BOOKING,SEARCH_BOOKING} from '../constants/action-types'


export function addBooking (id,name,trainNumber,travelDate){
    return (
        {
        type : NEW_BOOKING,
        payload : {
            id : id,
            name : name,
            trainNumber : trainNumber,
            travelDate : travelDate
        }
        }
    )
}

export function removeBooking(id){
    return(
        {
            type : CANCEL_BOOKING,
            payload : {
                id : id
        }
        }
    )
}

export function searchBooking(id){
    return(
        {
            type : SEARCH_BOOKING,
            payload : {
                id : id
        }
        }
    )
}