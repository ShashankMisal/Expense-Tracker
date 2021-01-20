import React, { useState } from 'react'
import TakeExpense from './TakeExpense'
import ShowExpense from './ShowExpense'
import Button from '@material-ui/core/Button';
import LayersClearIcon from '@material-ui/icons/LayersClear';
import Tooltip from '@material-ui/core/Tooltip';
import './App.css';



function App() {

  const [addAllExpense, setaddAllExpense] = useState([]);

  const [catagory, setcatagory] = useState("");
  
  const [total, setTotal] = useState(0);



  const ondelete = (id, amount) => {
      
    setTotal((prev) => {
          return prev = (prev - Number.parseInt(amount))
        })

        setaddAllExpense((prev) =>
          prev.filter((item, index) => {
            return index !== id
          })
        )
  }


  const addExpense = (item) => {

        setTotal((prev) => {
          return (prev + Number.parseInt(item.amount))
        })

        setaddAllExpense((prev) => {
          return [...prev, item];
        })
  }

  const handleCatagory = (e) => {
    const { value } = e.target
    setcatagory(value)
  }


  const onClear = () =>{
    setcatagory("")
  }

  React.useEffect(()=>{
    const expenses = localStorage.getItem("expenses"); 
    if(expenses){
      setaddAllExpense(JSON.parse(expenses));
    }
  },[]);


  React.useEffect(()=>{
    localStorage.setItem("expenses",JSON.stringify(addAllExpense));
  })

  React.useEffect(()=>{
    const totalAmount = localStorage.getItem("totalAmount"); 
    if(totalAmount){
      setTotal(JSON.parse(totalAmount));
    }
  },[]);


  React.useEffect(()=>{
    localStorage.setItem("totalAmount",JSON.stringify(total));
  })



  return (
    <>
      <h1 id="header">Expense Tracker</h1>

      <h2 id="totalExpense">Total Expense : <span style={{fontSize:"3.5rem"}}>{total}</span></h2>

      <TakeExpense passExpense={addExpense} />


      

      <div className="selectCat"> 
            <select name="cat" id="dropdown2"  onChange={handleCatagory} value={catagory}>
              <option value="">SelectCatagory</option>
              <option value="Food">FOOD</option>
              <option value="Travel">Travel</option>
              <option value="Petrol">Petrol</option>
            </select>
            <Tooltip title={<span className="tt">Clear Catagory</span>} arrow placement="bottom">
              <Button onClick={onClear} className="btn">
                <LayersClearIcon id="clearIcon"/>  
              </Button>
            </Tooltip>
      </div>


      <div id="expenseList">
          <table>
              <tr>
                <th>AMOUNT</th>
                <th>TYPE</th>
                <th></th>
              </tr>

              {
                    addAllExpense.map((val, index) => {
                      
                        if (val.type === catagory) {
                              return <ShowExpense
                              amount={val.amount}
                              type={val.type}
                              key={index}
                              id={index}
                              deleteItem={ondelete}
                              />
                        }
                        else if(catagory==="") {
                          return <ShowExpense
                              amount={val.amount}
                              type={val.type}
                              key={index}
                              id={index}
                              deleteItem={ondelete}/>
                        }else
                        return ""
                    })   
              }
          </table>

      </div>


      <p id="footer">Made With REACT</p>

    </>
  )
}

export default App;
