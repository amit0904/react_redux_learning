import {NEW_BOOKING} from '../actions/actions'
import {CANCEL_BOOKING} from '../actions/actions'
import {SEARCH_BOOKING} from '../actions/actions'

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
        default : return (state)
    }
    
    



}

export default rootReducer