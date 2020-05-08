const NEW_BOOKING = 'NEWBOOKING'
const CANCEL_BOOKING = 'CANCELBOOKING'
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
            console.log("Action.payload.id " + action.payload)
            console.log(state.bookings)
            debugger
            return (
                {...state, bookings : state.bookings.filter((item, index) => (item.id.toString() !== action.payload.id) )} 
            );
        default : return (state)
    }
    
    



}

export default rootReducer