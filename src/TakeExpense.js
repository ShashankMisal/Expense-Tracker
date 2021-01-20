import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

const TakeExpense = (props) =>{


    const [expenseType, setexpenseType] = useState({
        amount:"",
        type:""
    })



    const handleExpense = (e)=>{
            e.preventDefault();
            const {name,value} = e.target


            setexpenseType((prev)=>{
                return {
                    ...prev,
                [name]: value        
                }
            })
    }


    const sendExpense = () =>{
        if(expenseType.amount!== "" && expenseType.type !== "")
        {
                if(expenseType.amount>=0)
                {
                    props.passExpense(expenseType);
                    setexpenseType({ amount:"",
                    type:""})
                }
                else
                    alert("Please Enter Positive Amount");
                
        }
        else{
            alert("Please Enter Amount and its Expense-Type!");
        }
        
    } 


    return (
        <>
        <div id="TakeExpense">
            
                <input type="number"  min="0" id="amountInput" placeholder="Enter Expense.." value={expenseType.amount} name="amount" onChange={handleExpense} />
                
                <select id="dropdown"  name="type" onChange={handleExpense} value={expenseType.type}>
                    <option >SelectCatagory</option>
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                </select>

                <Button onClick={sendExpense} id="addBtn">
                    <AddCircleRoundedIcon id="addIconBtn" />
                    </Button>


        </div>
       
        
      </>
    )
}

export default TakeExpense