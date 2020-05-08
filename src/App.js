import React from 'react'
import CurrentBookings from './CurrentBookings'
import NewBookingEntry from './NewBookingEntry'


function App(){
 
  return(
  
    <div style={{margin : '100px'}} >
      <NewBookingEntry/>
      <CurrentBookings/>
    </div>
  )
}

export default App