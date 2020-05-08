import React, {useState} from 'react'
import {useDispatch} from 'react-redux'

function NewBookingEntry(){

    const dispatch = useDispatch();
    const [fullName, setFullName] = useState('')
    const [trainNumber, setTrainNumber] = useState('')
    const [travelDate, setTravelDate] = useState('')
    const [counter, setCounter]= useState(0)
   


    function handleSubmit(e){

        // e.preventdefault()
        setFullName('')
        setTrainNumber('')
        setTravelDate('')
        setCounter(counter + 1)
        return (
            dispatch(
                {
                    type: 'NEWBOOKING', 
                    payload : {id : counter,
                               name :fullName, 
                               trainNumber : trainNumber, 
                               travelDate : travelDate}
                }
            )
        )

    }

    function handleChange(event){
        if (event.target.name === 'fullName'){
            return setFullName(event.target.value)
        }
        if (event.target.name === 'trainNumber'){
            return setTrainNumber(event.target.value)
        }
        if (event.target.name === 'travelDate'){
            return setTravelDate(event.target.value)
        }
        
    }

    return( 
        <form>
            <label>Full Name</label>
            <br/>
            <input name='fullName' type='text' value={fullName} onChange={handleChange}/>
            <br/>
            <label>Train Number</label>
            <br/>
            <input name='trainNumber' type='text' value={trainNumber} onChange={handleChange}/>
            <br/>
            <label>Travel Date</label>
            <br/>
            <input name='travelDate' type='date' value={travelDate} onChange={handleChange}/>
            <br/>
            <button type='button' onClick={handleSubmit} >submit</button>
      </form>
  
    )
}


export default NewBookingEntry