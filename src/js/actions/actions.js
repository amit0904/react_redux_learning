import React from 'react'
import {NEW_BOOKING} from '../actions/actions'
import {CANCEL_BOOKING} from '../actions/actions'
import {SEARCH_BOOKING} from '../actions/actions'

function NEW_BOOKING(id,name,trainNumber,travelDate){

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