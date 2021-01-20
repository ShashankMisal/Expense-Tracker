import React from 'react'
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Tooltip from '@material-ui/core/Tooltip';



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
                <Tooltip title={<span className="tt">Delete Expense</span>} arrow placement="left">
                    <Button className="btn" style={{ marginLeft: "10px" }} onClick={deleteExpense}>
                        < DeleteOutlineIcon  id="deleteIcon"/>
                    </Button>
                </Tooltip>

                </td>
            </tr>


        </>
    )
}


export default ShowExpense