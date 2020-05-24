import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addBooking} from './js/actions/actions'
import './App.css'

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
                addBooking(counter,fullName,trainNumber,travelDate)
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
            <div className='flexContainer'> 
                <section className='flexItem'>
                    <label>Full Name</label>
                    <input name='fullName' type='text' value={fullName} onChange={handleChange} />   
                </section>
                <section className='flexItem'>
                    <label>Train Number</label>
                    <input name='trainNumber' type='text' value={trainNumber} onChange={handleChange}/>
                </section>
                <section className='flexItem'>
                    <label>Travel Date</label>
                    <input name='travelDate' type='date' value={travelDate} onChange={handleChange}/>
                </section>
                <section className='submitContainer'>
                    <button type='button' onClick={handleSubmit}>submit</button>
                </section>
            </div>
      </form>
  
    )
}


export default NewBookingEntry