import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./App.css"

const App = () => {

  const [x,setX]=useState([])
  // useRef to link input to ref
  const inputRef = useRef()

  const add = ()=>{
    // to take the value in input 
    const value = inputRef.current.value
    const newData={
      completed:false,
      value
    }

    setX([...x,newData])

    inputRef.current.value=""
  }

  const itemDone=(index)=>{
    const newX = [...x]
    newX[index].completed = !newX[index].completed

    setX(newX)
  }

  const deleteTask=(index)=>{
    const newX =[...x]
    newX.splice(index,1)

    setX(newX)
  }


  return (
    <div className='App'>
      <h2>📋 To Do List</h2>

      
      <input className='enterTask' ref={inputRef} placeholder='Enter New Task'></input>
      <button onClick={add}>Add Task</button>

      <div className='ul'>
        {
          x.map((item,index)=>{
            return <div key={index} className={`task ${item.completed ? 'completed' : ''}`}>
              

                <input type='checkbox' checked={item.completed}
                 className='inp-check' onChange={()=>itemDone(index)}/>

               <div className='items'>{item.value}</div>

               <span className='deleteBtn' onClick={()=>deleteTask(index)}>Delete</span>
               
              
              
            </div>
          })
        }
      </div>
      

      
    </div>
  )
}

export default App
