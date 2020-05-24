import {NEW_BOOKING , CANCEL_BOOKING, SEARCH_BOOKING} from '../constants/action-types'

const initialState = {
            bookings: [
                //   {
                //     id : "",
                //     name : "",
                //     trainNumber : "",
                //     travelDate : "",
                //     checked : ""
                //   }
    ]
}

function rootReducer(state = initialState,action){

    switch (action.type) {

        case NEW_BOOKING : 
            return (
                {...state,bookings : [...state.bookings,action.payload]}
            );

        case CANCEL_BOOKING :

            return (
                {...state, bookings : state.bookings.filter((item, index) => (item.id.toString() !== action.payload.id) )} 
            );
        case SEARCH_BOOKING :

            return (
                {...state, bookings : state.bookings.filter((item, index) => (item.id.toString() == action.payload.id) )} 
            );
        default : return (state)
    }
}

export default rootReducer