import React from 'react'
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';



const ShowExpense = (props) => {


    const deleteExpense = () => {
        props.deleteItem(props.id,props.amount);
    }


    return (
        <>
            
             <tr>
                <td>{props.amount}</td>
                <td>{props.type}</td>
                <td>
                    <Button className="btn" style={{ marginLeft: "10px" }} onClick={deleteExpense}>
                        < DeleteOutlineIcon  id="deleteIcon"/>
                    </Button>
                </td>
            </tr>


        </>
    )
}


export default ShowExpense