import React from 'react'
import  {useDispatch} from 'react-redux'
import './Table.css'

export default function TableBody(props){
    
    const dispatch = useDispatch()
    
    function handleClick(e) {
           const {id} = e.target
        return(
            dispatch(
                {
                type : 'CANCELBOOKING', 
                payload : { 
                    id : id
                }
            }
            )
        )
    }
    
    return(
        <tbody>
            <tr>
                <td>{props.name}</td>
                <td>{props.trainNumber}</td>
                <td>{props.travelDate}</td>
                <td><button id={props.id} onClick={(e) => handleClick(e)}>cancel</button></td>
            </tr>
        </tbody>
    )
}   